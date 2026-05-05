import express from 'express'
import cors from 'cors'
import usuario from './routes/usuario.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/usuario', usuario)

export default app;