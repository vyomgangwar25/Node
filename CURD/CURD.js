const fs=require('fs')
const path=require('path');
const dirPath=path.join(__dirname,'CURD') //It gives path of CURD folder
// console.log(dirPath)
const filePath=`${dirPath}/apple.txt`;//it gives(create) path of file in curd folder
// fs.writeFileSync(filePath,'this is simple text file') create file



//READ FILE
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item) 
// })




// UPDATE FILE 
//  fs.appendFile(filePath,'and file is updated',(err)=>{
//     if(!err)
//     {
//         console.log("file")
//     }
//  })


// RENAME
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//     {
//         console.log("renamed")
//     }
// })

//DELETE FILE
// fs.unlinkSync(`${dirPath}/fruit.txt`)