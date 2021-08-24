const http = require("http");
// const querystring = require("querystring")

// let createClientPostRequest = function() {
//     let options = {
//         method: "POST",
//         protocol: "http:",
//         hostname: "127.0.0.1",
//         port: "8080",
//         path: "/post",
//         headers: {
//             "connection": "keep-alive",
//             "content-type": "application/x-www-form-urlencoded"
//         }
//     };
//     let postBody= {
//         name: "yu"
//     }
//     let client = http.request(options, function(res) {
//         res.pipe(process.stdout)
//     })
//     client.write(querystring.stringify(postBody));
//     client.end();
// }

http.createServer((req, res) => {
    res.write("Server got client data: ")
    req.pipe(res)
    setTimeout(() => {
        res.end()
    }, 1000);
}).listen(8080)