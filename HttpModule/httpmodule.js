var http = require('http');
http.createServer(
    function (req, res) {
        res.write("hello world")
        res.end()
    }
).listen(4000, console.log("Server started"))

