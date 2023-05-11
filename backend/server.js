const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');
const connectDB = require('./config/db');
const io = new Server(server, {
    cors: '*',
    method: '*'
}) 

app.use(cors());
app.use(express, urlencoded({ extended: true }));
app.use(express.json());

connectDB()

server.listen(8080, () => {
    console.log('server runing in port', 8080)
})