const http = require("http")

// let client = http.get("http://127.0.0.1:8080/?name=yu&age=7", function(res) {
//     console.log(res.statusCode)
//     res.pipe(process.stdout)
// })


// let options = {
//     protocol: "http:",
//     hostname: "id.qq.com",
//     port: "80",
//     path: "/",
//     method: "GET"
// };

// let client = http.request(options,function(res) {
//     let data = "";
//     res.setEncoding("utf8");
//     res.on("data", function(chunk) {
//         data += chunk;
//     });
//     res.on("end", function() {
//         console.log(data)
//     })
// })
// client.end()

http.get("http://id.qq.com/", function(res) {
    let data = "";
    res.setEncoding("utf8");
    res.on("data", function(chunk) {
        data += chunk;
    });
    res.on("end", function() {
        console.log(data)
    })
})