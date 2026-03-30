import express from 'express';
const app = express();

const port = 8000;

// app.get('/',(req,res) => {
//   res.send('Hello this is /............');
// })

const img = app.use(express.static("public"));

app.get('/aboutus',(req,res) => {
  res.end(img);
  // res.send('Hello this is aboutus............');
})



const student = [{
  id: 1,
  name: "Sameer",
  class: "B tech"
}]


app.get('/',(req,res) => {
  try{
    res.status(200).json({message: "Show all data", data:student})
  }
  catch(err){
    res.status(500).json({message: "Data not found"});
  }
})

app.get('/:id', (req,res) => {
  try{
    const id = res.params.id;
    const std = student.find(s => s.id===id);
    if(!std){
      return res.status(404).json({message: "Data not fund", data: student});
    }
    res.status(200).json({message: "data is found"})
  }
  catch{
    res.status(500).json({message: "student Data not match"});
  }
})


app.listen(port,() => {
  console.log(`Server is running on port ${port}`);
})



