import React, {useState} from 'react'

import './App.css';

function App() {

   const [title,SetTitle] = useState('Hello World!!');
   
   const formSubmitted = (e) => {
     e.preventDefault();     
     console.log('hey');
   } 

  return (
    <div className="App">
        <h1>{title}</h1>
        <form onSubmit = {formSubmitted}>
             <label htmlFor = "newTodo">NewTodo</label>
             <input id = "newTodo" name = "newTodo"/>
             <button type = "submit">
                Add Todo
             </button>
        </form>
    </div>
  );
}

export default App;
