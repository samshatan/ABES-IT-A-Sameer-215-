const express = require('express');
const app = express();
const port = 8000;

const data = require('./data.json');
const cars = Array.isArray(data) ? data : data.cars;

app.use(express.json());

app.get('/cars', (req, res) => {
  res.json(cars);
});

app.get(`/cars/:id`,(req,res)=>{
    const id = parseInt(req.params.id);
    const car = cars.find((s)=>s.id==id);
    if(car)
    {
        return res.status(200).json({message: "Car is found", data: car});
    }
    return res.status(404).json({message:"car not found"});
})

app.post('/cars/add', (req, res) => {
  const newCar = {
    id: cars.length + 1,
    name: req.body.name,
    color: req.body.color,
    price: req.body.price
  };
  cars.push(newCar);
  res.json(newCar);
});

app.put('/cars/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find((s) => s.id === id);
  if (car) {
    car.name = req.body.name;
    car.color = req.body.color;
    car.price = req.body.price;
    res.json({ message: "Car updated", data: car });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
});

app.delete('/cars/delete/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let car = cars.filter((s)=> s.id !== id);
    res.json({message:"data deleted", data: car});
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});