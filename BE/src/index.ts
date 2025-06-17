import express from "express";
import WebSocket from "ws";
import http from 'http';
import cors from 'cors';
const env = require('dotenv').config();
const route = require('./auth/auth');
const PORT = process.env.PORT;


const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const wss = new WebSocket.Server({server})

wss.on("connection", (ws: WebSocket) => {

})

app.use('/api/v1', route);

server.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})