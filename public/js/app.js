$(document).ready(function(){
    //let socket = io(app.config.app_url);
    console.log("app_url:" + app.config.app_url)

    var socket = io(app.config.app_url);
    socket.on('current_time', function(data) {
        console.log('current_time %o', data)
    })

})
