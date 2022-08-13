import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>        
    </div>
  )
}

export default App