const http = require('http')

exports.start = (route, handle) => {
    function onRequest(req, res) {
        let pathname = req.url
        // console.log(pathname)    
        route(pathname,handle,req,res)
    }
    http.createServer(onRequest).listen(8888)
}