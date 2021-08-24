const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const common = require('./module/common')

http.createServer(function(req,res){
    let pathname = req.url;
    pathname = pathname=='/'?'index.html':pathname
    // let url1 = new URL(`http://localhost:8080${pathname}`)
    // console.log(url1)
    // console.log(path.extname(pathname))
    let extname = path.extname(pathname)
    fs.readFile(`./static/demo-index/${pathname}`, async (err,data)=>{
        if(err) {
            res.writeHead('404',{
                "Content-Type":"text/html",
                "charset": "utf-8"
            });
            res.end('404 Not found')
        } else {
            let mime = await common.getFileMime(extname)
            res.writeHead('200',{
                "Content-Type": `${mime}`,
                "charset": "utf-8"
            });
            res.end(data)
        }
    })
}).listen(8080)