const http = require('http')
const url = require('url')

const axios = require('axios')
const db = require('db')



http.createServer((req,res) => {
    res.writeHead(200, {"Content-type":"text/html;charset=utf-8"});
    res.write('hello');
    if(req.url != '/favicon.ico') {
        axios.obj.get();
        axios.obj.post();
        db.delete();
        db.add();
    }
    res.end();
}).listen(8080);
