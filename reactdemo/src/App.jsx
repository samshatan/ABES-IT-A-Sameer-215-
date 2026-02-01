import { useEffect, useState } from 'react'
import './App.css'
import Card from './component/Card'
import sameer from './assets/sameer.jpg'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  },[])
  return (
    <div>
      <Header/>
      <div className="App">
        {data.map(item => (
          <Card key={item.id} name={item.title} className={item.category} link={item.image} />
        ))}
      </div>
      <Footer/>
    </div>
    
  )
}

export default App
