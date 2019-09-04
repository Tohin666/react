const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const socketIO = require('socket.io')
const http = require('http') //

const Message = require('./models/message')

const app = express() // экспресс вернет рабочий сервер

const server = http.Server(app)
const io = socketIO(server)

app.use(cors()) // так пробрасываются миддлвары

io.on('connection', (socket) => {
    socket.on('message', async (msg) => {
        let message = new Message(msg)
        message = await message.save()

        socket.broadcast.emit('message', message)
        socket.emit('message', message)
    })
})

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true })

app.get('/', (req, res) => {
    res.send('Main')
})

app.get('/messages', (req, res) => {
    // res.send('Hello')
    Message.find().then((messages) => { // запрос в монго
        res.json(messages)
    })
})

app.get('/messages/:id', async (req, res) => {
    const message = await Message.findById(req.params.id)
    res.json(message)
})

server.listen(3000, () => {
    // app.listen(3000, () => {
    console.log('Listening at port 3000')
})