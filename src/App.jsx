import React from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/skill' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App