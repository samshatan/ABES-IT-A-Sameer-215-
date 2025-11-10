import Book from './components/Book.jsx'
import './App.css'
import Nav from './components/Navbar'
import Registration from './components/Registration.jsx';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route path='/' element={<Book />} /> */}
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App;