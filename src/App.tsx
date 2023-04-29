import React from 'react';
import Todo from './components/Todo';
import NewToDo from './components/NewToDo';
import TodoProvider from './store/todoContext';
function App() {
 
  return (
    <div className="App">

    <TodoProvider><NewToDo />
    <Todo /></TodoProvider>
      
    </div>
  );
}

export default App;
