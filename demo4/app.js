const fs = require('fs')


/* async await使用 promise */
// let dirArr = []
/* async function isDir(path) {
    return new Promise((resolve, reject)=>{
        fs.stat(path,(err, stats)=> {
            if(err) {
                console.log(err)
                reject(err)
                return
            }
            if(stats.isDirectory()) {
                // return true
                resolve(true)
            } else {
                // return false
                resolve(false)
            }
        })
    })
}

function main() {
    fs.readdir('./wwwroot', async (err, files)=>{
        if(err) {
            console.log(err)
            return
        }
        for(let i = 0;i<files.length;i++) {
            if(await isDir(`./wwwroot/${files[i]}`)){
                dirArr.push(files[i])
            }
        }
        console.log(dirArr)
    })
}

main() */


/* 读取流，写入流，管道流 */
// 读取流
/* const readStream = fs.createReadStream('./data/input.text')
let str = '';
let count = 0
readStream.on('data',(chunk)=>{
    str += chunk;
    count++;
})
readStream.on('close',()=>{
    console.log(str)
    console.log(count)
}) */

// 写入流
/* const writeStream = fs.createWriteStream('./data/output.text');
let str = '';
for(let i=0;i<500;i++){
    str += '这是输入的文件'
}

writeStream.write(str,(err)=> {
    if(err){
        console.log(err)
        return
    }
})
writeStream.end()
writeStream.on('finish',()=>{
    console.log('传输完成')
}) */

// 管道流   复制大文件

const readStream = fs.createReadStream('./hh.7z')
const writeStream = fs.createWriteStream('./data/hh2.7z')

readStream.pipe(writeStream)