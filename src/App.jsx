import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
/* import Footer from './components/Footer'; */


function App() {

  return (
    <div>
      <Navbar/>
        <Link to="/" className=''>
          <div className='d-flex justify-content-center'>
              <img src="/Simbol.svg" alt="logo-alex-nordic" className="img-fluid" />
          </div> 
        </Link>      
      <div className='d-flex justify-content-center '>
       <h1 className='text-white'>Bienvenido a mi<strong className='demo rainbow'>Color Picker</strong></h1>
      </div>
      <div className='d-flex text-container justify-content-center '>
       <p><strong className='text-white fs-6 text-secondary text-base leading-tight'>Este es uno de mis proyectos: un selector de colores donde puedes crear gradientes y también subir una imagen para visualizar su paleta de colores. Si estás leyendo esto, es probable que seas un reclutador o un compañero de profesión. ¡Espero que te guste!</strong></p>
       </div>
    </div>
  );
}

export default App;