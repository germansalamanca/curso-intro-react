import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
  // Creamos un nuevo estado local chiquito. No en el provider porque solo lo necesitamos aquí.
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo, // Importamos esta función de nuestro contexto
    setOpenModal // Y esta jiji
  } = React.useContext(TodoContext);

  const onWrite = (event)=>{
    setNewTodoValue(event.target.value);
  }
  const onCancel = ()=>{
    setOpenModal(false);
  };
  const onAdd = (e)=>{
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return(
    <form onSubmit={onAdd} className="form">
      <label>Escribe tu Tarea</label>
      <input
        /*onChange={()=> setNewTodoValue(this.value)} */
        type="text"
        className="text"
        onChange={onWrite}
        value={newTodoValue}
        placeholder="Picar cilantro para el jugo."
        />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          >Añadir</button>
      </div>
    </form>
  );
}

export {TodoForm};