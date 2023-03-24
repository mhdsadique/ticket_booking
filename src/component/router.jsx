import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../home'
import Signup from '../signup'
import Navbar from './navbar'
export const Router = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  )
}
