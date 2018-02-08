'use strict'

/*
|--------------------------------------------------------------------------
| Socket
|--------------------------------------------------------------------------
|
*/

const Server = use('Server')
const io = use('socket.io')(Server.getInstance()) //.listen(3380)

setInterval(function() {  
    //put emitter function here to update client
    let current_time = new Date().toLocaleString()
    io.sockets.emit('current_time', { current_time: current_time });
}, 5000)

io.on('connection', function (socket) {
  console.log("socket.id:" + socket.id)

  socket.on('disconnect', function () {
    console.log('A user disconnected')
  })  

})
