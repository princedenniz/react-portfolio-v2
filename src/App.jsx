import { useState } from 'react'
import Nav from './nav/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Background from "./background/Background"
import PlayerStats from './playerStats/PlayerStats'
import "./styles/app.css"

import './App.css'

function App() {

  return (
    <Router>
    <Nav/>
    <Background/>
    <PlayerStats/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
  )
}

export default App
