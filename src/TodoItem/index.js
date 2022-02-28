import React from 'react';
import './TodoItem.css';
//import {TodoIcon} from '../TodoIcon'; // Si llamaramos al icono directamente desde TodoIcon, sería así: <TodoIcon type="delete" color="red"/>
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';

function TodoItem(props){
  return(
    <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <span className="text">Listo</span>
        <CompleteIcon color="green"/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
      <DeleteIcon
        color="red"
        onDelete={props.onDelete}
      />
    </li>
  )
};

export {TodoItem};