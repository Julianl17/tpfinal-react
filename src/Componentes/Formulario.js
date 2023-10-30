import React from 'react'
import { useState } from 'react';

function Formulario ({onComentarioSubmit}) {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre && comentario){
      onComentarioSubmit({nombre,comentario});
      setNombre('');
      setComentario('');
    }
   
  };
  return (
    
      <form onSubmit={handleSubmit} className='formulario'>
        <label>
          Nombre:
          <input type='text' name='nombre' required value={nombre} onChange={handleNombreChange} className='campoNombre'/>
        </label>
       
        <label>Comentario:
        <textarea typeof='' name='txtarea' value={comentario} onChange={handleComentarioChange} className='campoComentario'></textarea>
        </label>
        <br/>
        <button type="submit">Enviar Comentario</button>
      </form>
    
  );
}
export default Formulario;





