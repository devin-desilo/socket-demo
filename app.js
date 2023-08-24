const path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
 var options = {
    root: path.join(__dirname)
 }

 var fileName = 'index.html'; 

 res.sendFile(fileName, options);
})

io.on('connection', (server) => {
    console.log('a user connect');

    server.on('disconnect',() => {
        console.log('Disconnected');
    } )
})



http.listen(3000, function(){
    console.log('server ready on 5000');
})

