// let obj=require("./index.js");
// console.log(obj);

// obj.print();
// console.log(obj.a)

let fs=require("fs");

//create a file->request

//blocking
// console.log("start");
// fs.writeFileSync("file1.txt","This is my file1.");
// console.log("file created");
// console.log("end");

//non-blocking
// console.log("start");
// fs.writeFile("file2.txt","This is my file2.",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file created");
// });
// console.log("end");

//reading a file - request

//blocking 
// console.log("start");
// let data=fs.readFileSync("file1.txt");
// console.log(data.toString());
// console.log("end");

//non-blocking
// console.log("start");
// fs.readFile("file1.txt",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// });

// console.log("end");

//adding more dat to file

//blocking
// console.log("start");
// fs.appendFileSync("file1.txt","wowwwwwwwww");
// console.log("content added");
// console.log("end")

//non-blocking

// console.log("start");
// fs.appendFile("file1.txt","hurrayyyy",(err)=>{
//     console.log("content added");
// });
// console.log("end")

//deleting a file

//blocking
// console.log("start");
// fs.unlinkSync("file1.txt");
// console.log("file deleted");
// console.log("end");

//non-blocking
// console.log("start");
// fs.unlink("file2.txt",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file deleted");
// });
// console.log("end");

//creating a js file

let code=function hello(){
    console.log("helloooooo");
}
let abc=console.log("start");
fs.writeFile("pen.js",`${abc}`,(err)=>{
    if(err){
        throw err;
    }
    console.log("js file created")
})
console.log("end");