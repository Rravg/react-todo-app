import './App.css'
import { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { TodosList } from './components/TodosList';
import { FilterSelect } from './components/FilterSelect';


function App() {
  const [userInput, setUserInput] = useState({ todoText: "" });
  const [todos, setTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredList = filterList(todos, selectedFilter);

  const addNewTodo = (itemToAdd) => {
    if (todos === undefined) {
      setTodos([itemToAdd]);
    } else {
      setTodos([...todos, itemToAdd]);
    }
  }

  const setStatus = (status, index) => {
    const updatedTodos =
      [
        ...todos.slice(0, index),
        { ...todos[index], status },
        ...todos.slice(index + 1)
      ];
    setTodos(updatedTodos);
  }

  const removeTodo = (index) => {
    const updatedTodos =
      [
        ...todos.slice(0, index),
        ...todos.slice(index + 1)
      ];
    setTodos(updatedTodos);
  }

  function filterList(todos, selectedFilter) {
    if (selectedFilter === 'all') {
      return todos;
    } else if (selectedFilter === 'active') {
      const filteredList = todos.filter(todo => {
        return !todo.status;
      })
      return filteredList;
    } else if (selectedFilter === 'completed') {
      const filteredList = todos.filter(todo => {
        return todo.status;
      })
      return filteredList;
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
        todos={filteredList}
        allTodos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        removeTodo={removeTodo}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <FilterSelect setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
    </>
  );
}

export default App;