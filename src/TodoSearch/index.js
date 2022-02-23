import React from 'react';
import './TodoSearch.css';

// El componente que llame a TodoSearch debe enviar dos props: 'searchValue, setSearchValue', porque el estado va a estar en el componente papi
function TodoSearch({searchValue, setSearchValue}){

  const onSearchValueChange = (evento)=>{
    // La prop evento nos devuelve un objeto con muchas cosas, entre ellas el value
    //console.log(evento.target.value)
    setSearchValue(evento.target.value);
  };
  return(
    <input
      className="TodoSearch"
      placeholder="Salchicha"
      value={searchValue}
      onChange={onSearchValueChange}
    />
    );
}

export { TodoSearch };