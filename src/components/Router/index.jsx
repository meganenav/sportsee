import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Home />} />
      </Routes>
    </Router>
  )
}