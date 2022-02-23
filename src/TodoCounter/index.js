import React from 'react';
import reactDom from 'react-dom';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
  // Aquí solo obtenemos los 2 datos que necesitamos
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return(
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
  );
}

export { TodoCounter };