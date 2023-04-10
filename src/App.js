import './App.css';
import React from 'react';

const todos=[
  {text:'cortar cebolla', completed:false},
  {text:'comer', completed:false},
  {text:'llorar', completed:false}
]

function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter/> */}
    <h2>Has completado 2 de 3 TODOs</h2>
    {/* <TodoSearch/> */}
    <input placeholder="Cebolla"/>
    {/* <TodoList>
      {todos.map(todo=>(
        <TodoItem/>
      ))} */}
    
    {/* </TodoList>
    <CreateTodoBuuton/>
    <Button/> */}
  
    </React.Fragment>
    );
}

export default App;
