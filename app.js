const express = require('express')
const app = express()
const mongoose = require('mongoose')  // 載入 mongoose

// 引用 express-handlebars
const exphbs = require('express-handlebars')

// 告訴 express 使用 handlebars 當作 template engine 並預設 layout 是 main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


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

// 載入 todo model
const Todo = require('./models/todo')

// Todo首頁
app.get('/', (req, res) => {
  return res.render('index')
})

// 列出全部 Todo
app.get('/todos', (req, res) => {
  res.send('列出所有Todo')
})

// 新增一筆 Todo 頁面
app.get('/todos/new', (req, res) => {
  res.send('新增Todo頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/todos/:id', (req, res) => {
  res.send('顯示Todo的詳細內容')
})

// 新增一筆  Todo
app.post('/todos', (req, res) => {
  res.send('建立Todo')
})

// 修改 Todo 頁面
app.get('/todos/:id/edit', (req, res) => {
  res.send('修改Todo頁面')
})

// 修改 Todo
app.post('/todos/:id', (req, res) => {
  res.send('修改Todo')
})

// 刪除 Todo
app.post('/todos/:id/delete', (req, res) => {
  res.send('刪除Todo')
})


app.listen(3000, () => {
  console.log('App is running!!!!!!!!!!')
})