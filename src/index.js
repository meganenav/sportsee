import React from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './components/Router/'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
