const http = require("http");

const myServer = http.createServer((req,res)=>{
    // console.log("Hello World");
    // res.end("Hi this is my First Server");
    if(req.url === "/"){
        res.end("<h1>ABES Engineering College</h1> <br> <img src='https://www.abes.ac.in/assets/2.jpg' alt='ABESEC Logo' width='500' height='350' style='border-radius: 10%; ' border='5px solid black' >");
    }
    else if(req.url === "/about"){
        res.end("We are student of Btech 2nd year");
    }
    else if(req.url === "/contact"){
        res.end("Contact Me at EMAIL");
    }
    else if(req.url === '/class'){
        res.end("<h1>Class IT A</h1>")
    }
    else{
        res.end("404 Not Found");
    }
});

myServer.listen(3000,() =>{
    console.log("Server Started at port 3000");
});
