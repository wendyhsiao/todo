const express = require('express')
const app = express()
const mongoose = require('mongoose')  // 載入 mongoose

// 設定連線到 mongoDB
mongoose.connect('mongodb://127.0.0.1/todo', { useNewUrlParser: true })

// mongoose 連線後透過 mongoose.connection 拿到 Connection 的物件
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!!!')
})

const Todo = require('./models/todo')

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(3000, () => {
  console.log('App is running!!!!!!!!!!')
})