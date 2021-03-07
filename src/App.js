import React, { useState} from 'react'

const App = () => {
   const [newTodo, setNewTodo] = useState('');
   const [todos,setTodos] = useState([]);

   const onNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const formSubmitted = (e) => {
     e.preventDefault();
     setTodos([
       ...todos,
       {
         id : todos.length + 1,
         content : newTodo,
         done : false,
       }
     ]);
     setNewTodo('');
  };

  return (
    <div className = "App">
        <form onSubmit = {formSubmitted}>
            <label htmlFor = "newTodo">Enter a Todo:</label>
            <input
              id = "newTodo"
              name = "newTodo" 
              value = {newTodo}
              onChange = {onNewTodoChange}
             />
             <button type = "submit">Add Todo</button>
       </form>
       <ul>
             {todos.map((todo) => (
               <li key = {todo.id}>
                 {todo.content}
               </li>
             ))}
          </ul>
    </div>
  )
}

export default App

