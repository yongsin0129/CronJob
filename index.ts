import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

const word = 'It`s a test word'
const time = new Date()
let number = 0

// const timerNumber = setInterval(() => {
//   addNumberAndReset()
// }, 500)

app.get('/test', (req, res) => {
  res.send({
    first: 'this is a test route , check variable "time" is : ' + time,
    second: word,
    number: number
  })
})

app.get('/addNumber', (req, res) => {
  addNumberAndReset()

  res.send({
    first: 'add number successful',
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

/********************************************************************************
*
          helper
*
*********************************************************************************/
function addNumberAndReset (): void {
  if (number >= 100) number = 0
  else number += 10
  return
}
