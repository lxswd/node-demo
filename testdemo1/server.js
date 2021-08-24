const http = require("http")
const url = require("url")
// const queryString = require("querystring")

let server = http.createServer((req, res) => {
    // let url = req.url
    console.log('请求地址是：',req.url)
    // console.log(req.httpVersion)
    // console.log(req.method)
    // console.log(req.headers)

    // 获取get请求参数
    // let value = url.parse(req.url,true).query
    // console.log(JSON.stringify(value))

    res.writeHead("200", "ok", {
        // "Content-Type":"text/html; charset=utf-8",
        "Content-Type":"text/plain; charset=utf-8",
        "X-Content-Type-Options":"nosniff"
    })
    // res.statusCode = 200
    // res.statusMessage = "ok"
    // res.setHeader("Content-Type","text/html")    //可以覆盖之前的content-type
    res.write("hello")
    setTimeout(function(){
        res.write("world")
        res.end()
    },2000)
}).listen(8080)

