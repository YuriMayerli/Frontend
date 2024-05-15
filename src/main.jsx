import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//aca se importa bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//importar bundle
import'bootstrap/dist/js/bootstrap.bundle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
