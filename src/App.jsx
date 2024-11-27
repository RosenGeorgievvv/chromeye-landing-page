import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {

  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
    {/* <Footer /> */}
   </Router>
  )
}

export default App
