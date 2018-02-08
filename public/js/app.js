$(document).ready(function(){
    console.log("app_url:" + app.config.app_url)

    var socket = io.connect(app.config.app_url, {
        //ref: https://stackoverflow.com/questions/11089545/stop-socket-io-from-reconnecting
        reconnection: false
    })

    socket.on('current_time', function(data) {
        console.log('current_time %o', data)
    })

    socket.on('disconnect', function(){
        console.log('disconnected')
    })
})
