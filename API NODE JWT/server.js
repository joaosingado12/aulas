import express from 'express'
import PublicRoutes from './routes/public.js'
import PrivateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'

const app = express()

app.use(express.json())
app.use('/', PublicRoutes)
app.use('/', auth, PrivateRoutes)


app.listen(3000, () => console.log("Olá mundo"))


