import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
