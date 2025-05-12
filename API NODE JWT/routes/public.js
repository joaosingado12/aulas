import  Router from 'express'
import  {PrismaClient} from '../generated/prisma/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET

router.get('/', (req, res) => {
  res.send('Servidor está rodando!')
})

router.post('/cadastro', async (req, res) => {

  try{
    const user = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)
    const userDB = await prisma.user.create({
      data:{
        name: user.name,
        email: user.email,
        password: hashPassword
      },
    })
    res.status(201).json(userDB)
  } catch (err){
    res.status(500).json({message: "Erro no servidor, tente novamente"})
  }
})

router.post("/login", async (req, res)=>{
  try{

    //pegando os dados inseridos
    const userInfo = req.body

    //verificando se o usuário existe
    const user = await prisma.user.findUnique({
      where: {"email": userInfo.email}
    })

    if(!user){
      return res.status(404).json({message: "Usuário não encontrado"})
    }
    
    //verificando se a senha está correta
    const isMatch = await bcrypt.compare(userInfo.password, user.password)
    
    if(!isMatch){
      return res.status(400).json({message: "Senha inválida"})
    }


    //criando o token
    const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '1m'})

    res.status(200).json(token)

  } catch (err){
    res.status(500).json({message: "Erro no servidor, tente novamente"})
  }
})

export default router

