import React, {useState} from 'react';

import './App.css';

function App() {

   const [title,SetTitle] = useState('Hello World!!');
   const [newTodo,setNewTodo] = useState('');
   const [todos, setTodos] = useState([{
     title : 'Learn React',
     done : false
   }]);
   

   const formSubmitted = (e) => {
     e.preventDefault();  
     setTodos({
       todos : [
         ...todos,
         {
           title : newTodo,
           done : false
         }
       ]
      });
   } 

   const handleChanged = (e) => {
      setNewTodo({
        newTodo : e.target.value
      })
   }

  return (
    <div className="App">
        <h1>{title}</h1>
        <form onSubmit = {formSubmitted}>
             <label htmlFor = "newTodo">NewTodo</label>
             <input onChange = {handleChanged} id = "newTodo" name = "newTodo"/>
             <button type = "submit">
                Add Todo
             </button>
        </form>
        <ul>
          {todos.map((todo) => {
            return <li>
               {todo.title}
            </li>
          })}
        </ul>
    </div>
  );
}

export default App;
