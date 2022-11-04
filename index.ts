import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

const word = 'It`s a test word'
const time1 = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/taipei' })
// const time1 =new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
const time2 = timeFormatter(new Date())

let number = 0

app.get('/test', (req, res) => {
  res.send({
    time1: 'this is a PNPM-RED  test route , Asia/Taipei Local time is : ' + time1,
    time2: 'this is a PNPM - RED test route , ' + time2,
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
  res.send('PNPM-RED Express + TypeScript Server')
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

function timeFormatter (timeObj: Date) {
  let time = timeObj
  let year = time.getFullYear()
  let month = time.getMonth()
  let date = time.getDate()
  let day = time.getDay()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  const dayName = ['日', '一', '二', '三', '四', '五', '六']


  return ` 現在是台北標準時間 ${year} 年 ${month + 1} 月 ${date} 日星期 ${dayName[day]} ${hours} : ${minutes} : ${seconds} `
}
