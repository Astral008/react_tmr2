import './App.css';
import React from 'react';
import {TodoCounter} from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { CreateTodoBuuton } from './Componentes/CreateTodoBuuton';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';

const todos=[
  {text:'cortar cebolla', completed:false},
  {text:'comer', completed:false},
  {text:'llorar', completed:false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
    
    <TodoSearch/>
    
    <TodoList>
      {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text} />
      ))}
    
    </TodoList>
    <CreateTodoBuuton/>
    
  
    </React.Fragment>
    );
}

export default App;
