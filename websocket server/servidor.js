var express = require('express');
var app = express();
var servidor = require('http').createServer(app);
var io = require('socket.io')(servidor);
user = [];
connections = [];

servidor.listen(process.env.PORT || 3000);
console.log('Servidor rodando na porta 3000');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Conectado: %s sockets permanecem conectados', connections.length);

    /* desconexões */
    socket.on('disconnect', function(data){
        connections.splice(connections.indexOf(socket), 1);
        console.log('Desconectado: %s sockets permanecem conectados', connections.length);
    });

    /* envio de mensagens */
    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg: data});
    });
});