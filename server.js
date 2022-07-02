const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socket.emit('message', 'welcome to chat');

  socket.broadcast.emit('message', 'A user has joind chat');

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left chat');
  });

  socket.on('chatMessage', (msg) => {
    io.emit('message', msg);
  });
});
const PORT = 3000 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
  console.log(`connected ${PORT}`);
});
