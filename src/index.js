import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//localStorage.setItem('TODOS_V1', '[{"text":"hacer algo","completed":false},{"text":"hacer nada","completed":false},{"text":"Jugar con majandis","completed":false},{"text":"Pasear a pipo","completed":false},{"text":"tomar tinto","completed":false}]')