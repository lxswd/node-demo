/* 
    一个简单的静态文件合并服务器 
*/
/* 
    第一次迭代
    简单思路  request -> parse -> combine -> output -> response
    解析，合并，然后输出
*/

const fs = require('fs')
const path = require('path')
const http = require('http')

const MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript'
}

function main(argv) {
    let config = JSON.parse(fs.readFileSync(argv[0], 'utf-8'));
    let root = config.root || '.';
    let port = config.port || 80;

    http.createServer(function(req, res) {
        let urlInfo = parseURL(root, request.url);

        combineFiles(urlInfo.pathnames, function(err, data) {
            if(err) {
                res.writeHead(404);
                res.end(err.message);
            } else {
                res.writeHead(200, {
                    "content-Type": urlInfo.mime
                })
                res.end(data);
            }
        })
    }).listen(port)
}

function combineFiles(pathnames, callback) {
    let output = [];

    (function next(i, len) {
        if(i<len) {
            fs.readFile(pathnames[i], function(err, data) {
                if(err) {
                    callback(err);
                } else {
                    output.push(data);
                    next(i+1, len)
                }
            })
        } else {
            callback(null, Buffer.concat(output))
        }
    }(0, pathnames.length))
}

function parseURL(root, url) {
    if(url.indexOf('??') == -1) {
        url = url.replace('/', '/??');
    }

    let parts = url.split('??');
    let base = parts[0];
    let pathnames = parts[1].split(',').map(function(value) {
        return path.join(root,base,value)
    }) 
    
    return {
        mime: MIME[path.extname(pathnames[0]) || 'text/plain'],
        pathnames: pathnames
    }
}

main(process.argv.slice(2))
