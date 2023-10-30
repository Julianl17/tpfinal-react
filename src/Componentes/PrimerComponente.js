import React from 'react'

export const PrimerComponente = () => {

  return (
    <div>
      <header className='cabecera'>
        <div className='contenedor-logo'>
          <img src='https://images.vexels.com/media/users/3/153156/isolated/preview/9ce84f06c10bdd87608f48fc2e599661-gaming-computer-icon-by-vexels.png' className='img-cabecera' />
          <h1 className='tipo'>DIGITALERS</h1>

        </div>

        <nav className='contenedorNavegacion'>
          <ul className='navegacion'>
            <li className='lista'><a href='#' className='lista-contenido'>Inicio</a></li>
            <li className='lista'><a href='#' className='lista-contenido'>Nosotros</a></li>
            <li className='lista'><a href='#' className='lista-contenido'>Contacto</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default PrimerComponente;