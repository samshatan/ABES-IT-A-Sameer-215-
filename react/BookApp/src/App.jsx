import Book from './components/Book.jsx'
import './App.css'
import Nav from './components/Navbar'
import Registration from './components/Registration.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/home' element={<Book />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element= {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;