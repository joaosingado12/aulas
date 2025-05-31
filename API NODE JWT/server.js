import express from 'express'
import PublicRoutes from './routes/public.js'
import PrivateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', PublicRoutes)
app.use('/', auth, PrivateRoutes)


app.listen(3000, () => console.log("Olá mundo"))


