const exec = require('child_process').exec
const queryString = require('querystring')
const fs = require('fs')
const formidable = require('formidable')

exports.start = (res) => {
    console.log("Request handler 'start' was called");
    // exec('ls-lah',(error, stdout, stderr)=> {
    //     res.writeHead(200,{
    //         "content-Type": "text/plain"
    //     })
    //     res.write(stdout)
    //     res.end()
    // })
    // exec("find /", { timeout: 50000, maxBuffer: 20000*1024 },(error, stdout, stderr)=> {
    //     res.writeHead(200,{
    //         "content-Type": "text/plain"
    //     })
    //     res.write('aaaaaaa')
    //     res.end()
    // })
    let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
    res.writeHead(200,{
        "Content-Type": "text/html",
    })
    res.write(body)
    res.end()

}

exports.upload = (res, req) => {
    console.log("Request handler 'upload' was called");
    let form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, (err, fields, files)=>{
        if(err) {
            console.log(err)
            return;
        }
        console.log('parsing done')
        console.log(fields)
        console.log(files)
        fs.renameSync(files.upload.path,"C:\\Users\\len\\AppData\\Local\\Temp\\test.jpg");
        res.writeHead(200,{
            "Content-Type": "text/html",
        })
        res.write('received image:<br/>');
        res.write('<img src="/show"/>')
        // res.write(`You've sent: ${postData}`)
        // res.write(`You've sent: ${queryString.parse(postData).text}`)
        res.end()
    })
}

exports.show = (res) => {
    console.log("Request handler 'show' was called");
    fs.readFile('C:\\Users\\len\\AppData\\Local\\Temp\\test.jpg', 'binary', (err, file)=> {
        if(err) {
            res.writeHead(500,{
                "Content-Type": "text/plain"
            });
            res.write(err + "\n");
            res.end();
        } else {
            res.writeHead(200,{
                "Content-Type": "image/jpg"
            })
            res.write(file, 'binary');
            res.end()
        }
    })
}