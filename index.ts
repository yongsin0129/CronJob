import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

const word = 'It`s a test word'
const time = new Date()
let number = 0

const timerNumber = setInterval(() => {
  number++
}, 1000)

app.get('/test', (req, res) => {
  res.send({
    first: 'this is a test route , check variable "time" is : ' + time,
    second: word,
    number: number
  })
})

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

/********************************************************************************
*
          deploy website : https://selflearning-vercel-deploy-test.vercel.app/
*
*********************************************************************************/
