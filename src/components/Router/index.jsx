import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/'

//Création du routeur pour la page d'accueil permettant de personnaliser l'URL avec un id passé en paramètre
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Home />} />
      </Routes>
    </Router>
  )
}