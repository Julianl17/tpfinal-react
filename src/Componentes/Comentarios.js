import React from 'react';

function Comentarios ({comentarios})  {
  return (
    <div>
      <h2 className='txtComentario2'>Comentarios</h2>
      <ul className='cajaComentarios'>
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <strong>{comentario.nombre}:</strong> {comentario.comentario}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Comentarios;