// const http = require("http");

// const myServer = http.createServer((req,res)=>{
//     // console.log("Hello World");
//     // res.end("Hi this is my First Server");
//     if(req.url === "/"){
//         res.end("<h1>ABES Engineering College</h1> <br> <img src='https://www.abes.ac.in/assets/2.jpg' alt='ABESEC Logo' width='500' height='350' style='border-radius: 10%; ' border='5px solid black' >");
//     }
//     else if(req.url === "/about"){
//         res.end("We are student of Btech 2nd year");
//     }
//     else if(req.url === "/contact"){
//         res.end("Contact Me at EMAIL");
//     }
//     else if(req.url === '/class'){
//         res.end("<h1>Class IT A</h1>")
//     }
//     else{
//         res.end("404 Not Found");
//     }
// });

// myServer.listen(3000,() =>{
//     console.log("Server Started at port 3000");
// });

const fs = require("fs");
// fs.writeFileSync("hello.txt","We are student of it");
// fs.writeFileSync("abes.txt","We are student of ABES");

// const result = fs.readFileSync("./hello.txt","utf-8");
// console.log(result);

// const result2 = fs.readFileSync("./abes.txt","utf-8");
// console.log(result2);

// fs.writeFile("Helloasync.txt","We are doung Async file system", () => {});

// fs.readFile("./Helloasync.txt","utf-8",(err, re) => {
//   if(err){
//     console.log("Error",err);
//   }
//   else{
//     console.log(re);
//   }
// })

// fs.appendFileSync("./Helloasync.txt",`and i m happy`)

// fs.appendFile("./Helloasync.txt",`and i m happy to do this`,(err) => {
//   if(err){
//     console.log("Error",err);
//   }
//   else{
//     console.log("File Appended");
//   }
// })

// fs.cpSync("./a1.txt","./b1.txt");
// fs.cp("./a1.txt","./b1.txt",() => {})
// fs.cp("./a1.txt","./b1.txt", (err) => {
//   if(err){
//     console.log("Error",err)
//   }
//   else{
//     console.log("File Copied");
//   }
// })

// fs.unlinkSync("./hello.txt");
// fs.unlink("./b1.txt",(err) => {
//   if(err){
//     console.log("Error",err);
//   }
//   else{
//     console.log("File Deleted");
//   }
// })


// const student = {
//   name: "Sameer",
//   rollno: 215,
//   city: "Ghaziabad",
// }

// const json = JSON.stringify(student);
// console.log(json);

// fs.writeFileSync("json.json",json,null,2);

// const result = fs.readFileSync("./json.json","utf-8");
// console.log(result);

