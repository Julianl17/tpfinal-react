
import './App.css';
import './SegundoComponente.css';
import './PiePagina.css';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';
import  Formulario  from './Componentes/Formulario';
import { useState } from 'react';
import Comentarios from './Componentes/Comentarios';
import './Formulario.css';
import './Componentes/SobreNosotros';
import { SobreNosotros } from './Componentes/SobreNosotros';
import { PiePagina } from './Componentes/PiePagina';


function App() {
  const [comentarios, setComentarios] = useState([]);

  const handleComentarioSubmit = (nuevoComentario) => {
    setComentarios([...comentarios, nuevoComentario]);
  };

  return (
    <div>
      <PrimerComponente />
      <SobreNosotros/>
      <SegundoComponente />
      
      <h3 className='txtComentario'>Formulario de Comentarios</h3>
      <Formulario onComentarioSubmit={handleComentarioSubmit} />
      <Comentarios comentarios={comentarios} />
      <PiePagina/>
   

    </div>

  );
}

export default App;
