import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

import '@fontsource/ibm-plex-mono' // Defaults to weight 400
import '@fontsource/ibm-plex-mono/400.css' // Specify weight
import '@fontsource/ibm-plex-mono/400-italic.css' // Specify weight and style

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
