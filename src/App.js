import './App.css'
import { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { TodosList } from './components/TodosList';


function App() {
  const [userInput, setUserInput] = useState({ todoText: "" });
  const [todos, setTodos] = useState([]);

  const addNewTodo = (itemToAdd) => {
    if (todos === undefined) {
      setTodos([itemToAdd]);
    } else {
      setTodos([...todos, itemToAdd]);
    }
  }

  return (
    <>
      <Header />
      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        addNewTodo={addNewTodo}
      />
      <TodosList 
        todos={todos}
      />
    </>
  );
}

export default App;