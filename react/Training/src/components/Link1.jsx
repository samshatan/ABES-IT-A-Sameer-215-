import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return <h2>This is Home Page</h2>;
}

function AboutUs() {
  return <h2>This is About Us Page</h2>;
}

function Link1() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default Link1;
