const express = require('express')
// http for connecting sockets
const http = require('http')
const { Server} = require("socket.io") //destructure and import

const app = express(); //express server
const PORT = 9000;


// create a server that intergrates the express and http protocals
const server = http.createServer(app)
// io is instance of server given by socket.io
// it listens to sockets
const io = new Server(server);

// connection established mean the frontend is accessing the backend It is a prebuilt events
io.on('connection', (socket)=>{
    console.log(socket.id);
})

// using middle to send the public folder to browser. 
// It will run before any other code
app.use(express.static('public'));
// express.ststic is used to send static html files

// Listening to the port
server.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})


