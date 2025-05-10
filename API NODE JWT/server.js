import express from 'express'
import PublicRoutes from './routes/public.js'

const app = express()

app.use(express.json())
app.use('/', PublicRoutes)

app.listen(3000, () => console.log("Olá mundo"))


