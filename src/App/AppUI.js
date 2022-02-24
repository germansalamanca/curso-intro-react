import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // Acá también debemos traer las propiedades de nuestro contexto relacionadas con el Modal
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton 
        /* Pasamos la propiedad setopenModal para que la ejecute en el componente como toggleModal */
        toggleModal={setOpenModal}
        modalAbierto={openModal}
      />

      {!!openModal && /*comprobar que exista openModal (&&) y sea true (!!) */ (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };
