import './App.css';
import CompCrearClientes from './Componentes/CompCrearClientes';
import CompMostrarClientes from './Componentes/CompMostrarClientes';
import CompEditarClientes from './Componentes/CompEditarClientes';
import CompCrearProducto from './Componentes/CompCrearProducto';
import CompMostrarProducto from './Componentes/CompMostrarProducto';
import CompEditarProducto from './Componentes/CompEditarProducto';
import CompFooter from './Componentes/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Inicio</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/clientes" className='nav-link'>Clientes</a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/producto" className='nav-link'>Productos</a>
              </li>
            </ul>

          </div>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/clientes/' element={<CompMostrarClientes />} />
          <Route path='/clientes/agregar/' element={<CompCrearClientes />} />
          <Route path='/clientes/editar/:id' element={<CompEditarClientes />} />
          <Route path='/producto/' element={<CompMostrarProducto />} />
          <Route path='/producto/agregar/' element={<CompCrearProducto />} />
          <Route path='/producto/editar/:id' element={<CompEditarProducto />} />

        </Routes>
      </BrowserRouter>
      
    <CompFooter/>
      
      
    </div>

    
  );
}

export default App;

