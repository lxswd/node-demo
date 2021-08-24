// post发送数据
const http = require("http");
const querystring = require("querystring")

let options = {
    method: "POST",
    protocol: "http:",
    hostname: "127.0.0.1",
    port: "8080",
    path: "/post",
    headers: {
        "connection": "keep-alive",
        "content-type": "application/x-www-form-urlencoded"
    }
};
let postBody= {
    name: "yu"
}
let client = http.request(options, function(res) {
    res.pipe(process.stdout)
})
client.write(querystring.stringify(postBody));
client.end();