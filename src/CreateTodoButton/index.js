import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
  // const onClickButton = (msg)=>{
  //   alert(msg);
  // };
  // lamamos a nuestra función con el evento onClick y definimos la función abrirModal (que es como yo nombré el attr en apUI)
  const toggleMyModal = ()=>{
    // ¡¡Funciona de las dos maneras!! pero en la primera tuve que pasar la propiedad como modalAbierto en appUI.js
    //props.toggleModal(!props.modalAbierto);
    props.toggleModal(prevState => !prevState);
  }
  return(
    <button 
      className="CreateTodoButton"
      // así se pone si queremos poner la función en línea
      /* onClick={()=> console.log('Cliquero')}>  */
      /*onClick={()=>onClickButton('Pipo')}*/
      onClick={toggleMyModal}
      >
      +
    </button>
  )
}

export {CreateTodoButton};