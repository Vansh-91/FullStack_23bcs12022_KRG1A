import { useState } from 'react'
import React from 'react'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './Pages/About';
function App() {


  return (
    <>
    <BrowserRouter>
   <Routes> <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route  path='/About'element={<About/>}/></Routes>
</BrowserRouter>
    </>
  )
}

export default App
