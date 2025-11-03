import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './components/Book'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='bookk'>
      <Book/>
      <br />
      <Book />
      <br />
      <Book />
    </div>
  )
}

export default App
