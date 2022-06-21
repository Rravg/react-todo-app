import './styles/TodosList.css';
import { Todo } from "./Todo.js";

export function TodosList(props) {

    return (
        <ul className="todo-list">
            <Todo text="primer todo" />
            <Todo text="segundo todo" />
            <Todo text="tercer todo" />
            <Todo text="cuarto todo" />
            <li className="list-options">
                <div className="items-left">{props.todos.length} items left</div>
                <div className="clear-button">Clear Completed</div>
            </li>
        </ul>
    );
}