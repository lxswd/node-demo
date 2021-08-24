const http = require('http')
const url = require('url')

http.createServer(function(require, response) {
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    // response.write('hello');
    // console.log(require.url)
    console.log(url.parse(require.url,true))
    if(require.url != '/favicon.ico') {
        let value = url.parse(require.url,true).query
        console.log(`姓名：${value.zhang}, 年龄：${value.age}`)
    }
    response.end();
}).listen(8080);