import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mediaRoutes from './routes/media_routes'
import authRoutes from './routes/auth_routes'

const app: Express = express()

dotenv.config()

const port = process.env.PORT || 3000

app.use(
  cors({
    origin: 'http://localhost:3001',
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes)
app.use('/medias', mediaRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log('Listening on port : ', port)
})
