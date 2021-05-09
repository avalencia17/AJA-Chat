//this is the startup for putting html in js file
var div = document.createElement('div');
div.setAttribute('class', 'someClass');
div.innerhtml = document.getElementById('page').inner.HTML;
document.getElementById('wrapper').style.property = new style;

<script id="page" type="text/html">
<div id="page" class="wholePage">

const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const messageFormat = require('./Utilities/message');
//const {userJoin, getCurrentUser, userLeaves, getRoomUsers} = require('./Utilities/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
const botName = 'AJAchat Bot';
//run when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({username, room}) => {

    //welcome a new client
    socket.emit('message', messageFormat(botName, 'Welcome to AJAchat!'));

    //show when a client connects
    socket.broadcast.emit('message', messageFormat(botName,'A user has joined the chat!')
        );
    });

    //listen for chat message
    socket.on('chatMessage', msg => {
        io.emit('message', messageFormat('USER', msg));
    });
    //show when cleint disconnects
    socket.on('disconnect', () => {
       io.emit('message', messageFormat(botName, 'A user has left the chat'));   
    });    
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


</div>
</script>
