
const fs = require("fs")
const zlib = require("zlib")


// 压缩文件
// let gzip = zlib.createGzip();
// let inFile = fs.createReadStream("./gzip测试.txt")
// let outFile = fs.createWriteStream("./gzip测试压缩文件后.txt.gz")
// inFile.pipe(gzip).pipe(outFile)

// 解压文件
let gunzip = zlib.createGunzip()
let inFile = fs.createReadStream("./gzip测试压缩文件后.txt.gz")
let outFile = fs.createWriteStream("./gzip测试解压文件后.txt")
inFile.pipe(gunzip).pipe(outFile)