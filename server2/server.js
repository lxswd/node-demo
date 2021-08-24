const http = require('http');
const url = require('url')

exports.start = (route, handle) => {
    function onRequest(req, res) {
        // let pathname = url.parse(req.url).pathname;  //url.parse已弃用，官方推荐使用url类
        let pathname = req.url
        console.log(`request for ${pathname} received`)
        route(pathname, handle, res, req)
        // let postData = ''
        // req.setEncoding('utf8');
        // req.addListener('data', (postDataChunk)=>{
        //     postData += postDataChunk;
        //     console.log(`Received Post data chunk ${postDataChunk}.`)
        // })
        // req.addListener('end', ()=>{
        //     route(pathname, handle, res, postData);
        // })
    }
    
    http.createServer(onRequest).listen(8080);
    console.log('server has started')
}


