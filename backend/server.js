const express = require('express');
const app = express();
const cors = require("cors");
const port = 8090;
app.use(cors()); // middle ware


app.get('/',(req,res) =>{
  res.send("hi this is my first server");
});

app.get('/about',(req,res) =>{
  const students=[
    {
      id: 1,
      name: "Sameer",
      class: "IT",
      img: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
    },
    {
      id: 1,
      name: "anc",
      class: "IT",
      img: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
    },
    {
      id: 1,
      name: "Iza",
      class: "IT",
      img: "https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain"
    },
    {
      id: 1,
      name: "ancd",
      class: "IT",
      img: 'https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain'
    }
  ]
  res.json(students);
});

app.get('/contactUs',(req,res) =>{
  res.send("hi this is my first contact server");
});

app.listen(port,() => {
  console.log(`server is running at: http:localhost:${port}`);
})

