import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({children}){
  // Aquí no retornamos etiquetas, como en otros componentes, si no que directamente createPortal
  // .createPortal Funciona casi igual al .render pero dentro de otro componente sin estar dentro jeje
  // Cuando enviemos el modal, vamos a pasarle un hijo (donde va a ir el contenido)
  return ReactDOM.createPortal(
    // aquí le pasamos el contenido con la prop children. El contenido es el primer arg de la función createPortal
    <div className="ModalBackground">
      {children}
    </div>,
    // El segundo arg es el elemento al que se le pasa el contenido. Está en public/index.html
    document.getElementById('modal')
  );
}

export {Modal};



