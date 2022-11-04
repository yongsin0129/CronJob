import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

const word = 'It`s a test word'
const time1 = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/taipei' })
// const time1 =new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
const time2 = timeFormatter(new Date())

app.get('/test', async (req, res) => {
  const result = await prisma.text.findMany()
  res.send(result)
})

app.get('/addData', async (req, res) => {
  await main()

  res.send({
    first: 'add date to mongodb successful',
    time: time1
  })
})

app.get('/', (req, res) => {
  res.send(
    '完成 prisma create and findMany version Express + TypeScript Server'
  )
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

/********************************************************************************
*
          deploy website : https://red-test-yongsin0129.vercel.app/test
*
*********************************************************************************/

/********************************************************************************
*
          helper
*
*********************************************************************************/
function timeFormatter (timeObj: Date): string {
  let time = timeObj
  let year = time.getFullYear()
  let month = time.getMonth()
  let date = time.getDate()
  let day = time.getDay()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()

  const dayName = ['日', '一', '二', '三', '四', '五', '六']

  return ` 現在是台北標準時間 ${year} 年 ${month + 1} 月 ${date} 日星期 ${
    dayName[day]
  } ${hours} : ${minutes} : ${seconds} `
}
/********************************************************************************
*
          database
*
*********************************************************************************/

async function main () {
  // const result = await prisma.users.create({
  //   data: {
  //     v: 0,
  //     date: new Date(),
  //     email: 'user3@example',
  //     password: '12345678',
  //     role: 'student',
  //     username: 'user3'
  //   }
  // })
  // const result = await prisma.text.findMany()

  const result = await prisma.text.create({
    data: {
      v: 2,
      text: time1
    }
  })
}
