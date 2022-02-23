import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
  const onClickButton = (msg)=>{
    alert(msg)
  };
  return(
    <button 
      className="CreateTodoButton"
      // así se pone si queremos poner la función en línea
      /* onClick={()=> console.log('Cliquero')}>  */
      onClick={()=>onClickButton('Pipo')}
      >
      Añadir
    </button>
  )
}

export {CreateTodoButton};