import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/layouts/Header';



const App = () => {
  return (

    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About ' element={<About />} />
          <Route path='/Contact ' element={<Contact />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
