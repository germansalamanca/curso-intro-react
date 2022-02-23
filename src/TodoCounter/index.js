import React from 'react';
import reactDom from 'react-dom';
import './TodoCounter.css';

// const estilos = {
//   color: 'red',
//   backgroundColor: 'yellow'
// };
function TodoCounter({total, completed}){
  return(
    <h2 className="TodoCounter">Has completado {completed} de {total} tareas</h2>
  );
}

// Se puede exportar con export default TodoContent, peero, al importarlo en App.js l podríamos llamar como se nos diera la puta gana. Por eso es mejor no mandarlo default, si no en llaves 
export { TodoCounter };