import express from 'express'
import  {PrismaClient} from '../generated/prisma/index.js'

const router = express.Router()
const prisma = new PrismaClient()


router.get('/listar', async (req, res) =>{
    try{
        const user = await prisma.user.findMany()

        res.status(200).json({message: "usuários listados com sucesso", user})

    }catch(err){
        res.status(500).json({message: "Falha no servidor"})
    }
})

export default router