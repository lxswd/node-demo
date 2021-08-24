const fs = require('fs')

exports.getMime = (extname)=> {
    switch(extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/plain'
    }
}

exports.getFileMime = (extneme)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./data/mime.json', (err, data)=>{
            if(err) {
                console.log(err)
                reject(err)
                return
            } else {
                // console.log(JSON.parse(data))
                let mimeObj = JSON.parse(data)[extneme]
                // console.log(mimeObj)
                resolve(mimeObj)
            }
        })
    })
}