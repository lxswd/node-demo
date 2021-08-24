const fs = require('fs')

/* 检测时文件还是目录 */
// fs.stat('./bbb',(err,stats)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('文件',stats.isFile())
//     console.log('目录',stats.isDirectory())
// })

/* 
    创建目录 
    如果有同名目录或没有后缀的同名文件，则会报错
*/
// fs.mkdir('./a',(err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('目录创建成功')
// })

/* 
    创建写入文件 
    如果文件已创建，则直接写入内容
    如果文件未创建，则先创建文件，再写入内容
    如果文件已存在，并且写有内容，则新的内容覆盖已存在的所有内容
*/
// fs.writeFile('./aaa.js','已创建文件,现在写入内容',(err)=>{
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('写入成功')
// })

/* 
    追加文件
    在所有内容后添加，不论是否有重复
*/
// fs.appendFile('./aaa.js',',新的内容', (err)=> {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('新内容添加成功')
// })

/* 
    读取文件
    读取到的是buffer数据，需要转换
*/
// fs.readFile('./aaa.js',(err, data)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(data.toString())
// })

/* 读取目录 */
// fs.readdir('./',(err,files)=> {
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(files)
// })

/* 重命名，移动文件 */
// fs.rename('./a','./aaab/a',(err)=>{
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log('改名成功')
// })

/* 
    删除目录
    如果没有找到目标，则会报错
*/
// fs.rmdir('./ccc',(err)=> {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('目录删除成功')
// })

/* 
    删除文件
    如果没有找到目标则会报错
*/
fs.unlink('./dd.js',(err)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log('文件删除成功')
})
