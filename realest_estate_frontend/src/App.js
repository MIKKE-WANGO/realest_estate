
import {
  //BrowserRouter as Router,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import React ,{useState} from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import ListingDetail from "./pages/ListingDetail";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {

  //if  localStorage.getItem('access') is empty it will return null
  const [isAuthenticated, setisAuthenticated] = useState(
     false
  )

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated}  setisAuthenticated={ setisAuthenticated}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>            
            <Route path="/listings" element={<Listings />}/>           
            <Route  path="/listings/:id" element={<ListingDetail/>}/>
            <Route path="/login" element={<Login isAuthenticated={isAuthenticated}  setisAuthenticated={ setisAuthenticated}/>}/>           
            <Route path="/register" element={<Register />}/>
            <Route path="/contact" element={<Contact />}/>
            
          
          </Routes>   
    </Router>
  );
}

export default App;
