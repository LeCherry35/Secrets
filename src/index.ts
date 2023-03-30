import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { connectToDatabase } from "./services/database.service"
import { userRouter } from "./routes/user.router";

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const start = async () => {
  try {
    await connectToDatabase()

    app.use('/users', userRouter)
    app.listen(port, () => {
      console.log(`[server]: Serverito is running at http://localhost:${port}`)
    });

  } catch (e) {
    console.log(e);
    
  }
}

start()