const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log(`new webSocketConnection`);
});
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  console.log(`connected ${PORT}`);
});
