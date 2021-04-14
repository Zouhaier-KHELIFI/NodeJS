var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get("/", function(req, res) {

    res.sendFile(__dirname + '/index.html')
})

io.on("connection", function(socket) {

    console.log('a user is connected');
    socket.on('disconnect', function() {
            console.log('a user is disconnected');


        }

    )

    socket.on("chat message", function(message) {
        console.log("message reçu : " + message)
        io.emit("chat message", message)
    })
})
http.listen(3000, function() {


    console.log('hello')
})