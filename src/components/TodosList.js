import './styles/TodosList.css';
import { Todo } from "./Todo.js";

export function TodosList(props) {

    const todos = props.todos.map((todo, index) => {
        return (
            <Todo
                todoText={todo.todoText}
                status={todo.status}
                setStatus={props.setStatus}
                removeTodo={props.removeTodo}
                id={index}
                key={index}
            />
        );
    });

    const handleClick = () => {
        const uncompleteTodos = props.allTodos.filter(todo => {
            return !todo.status
        })
        props.setTodos(uncompleteTodos);
    }

    return (
        <ul className="todo-list">
            {todos}
            <li className="list-options">
                <div className="items-left">{props.todos.length} items left</div>
                <div className="clear-button" onClick={handleClick}>Clear Completed</div>
            </li>
        </ul>
    );
}