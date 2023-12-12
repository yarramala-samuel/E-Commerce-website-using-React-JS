import React from 'react'
import Home from './home'
import About from './about'
import Services from './services'
import Portfolio from './portfolio'
import Contact from './contact'
import {Routes, Route} from 'react-router-dom'
const Rout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Services />} />
      <Route path='/project' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout