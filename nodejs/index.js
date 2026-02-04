const http = require("http");

const myServer = http.createServer((req,res)=>{
    console.log("Hello World");
    res.end("Hi this is my First Server");
});

myServer.listen(3000,() =>{
    console.log("Server Started at port 3000");
});
