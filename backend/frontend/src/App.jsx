import { useEffect,useState } from 'react'
import './App.css'
import axios from 'axios';  
function App() {
  const [show,setShow] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8090/about')
    .then((res)=>{
      setShow(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  });
  return (
    <div className="App">    
        <h1>data show</h1>
        <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
        {
        show.map((s,id)=>(
          <div key={id} style={{gap: '20px', margin: '20px', padding: '20px', border: '2px solid black'}}>
            <h1>{s.name}</h1>
            <h2>{s.class}</h2>
            <img src={s.img} alt={s.name} style={{height: '150px'}} />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default App