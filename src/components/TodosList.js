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


    const handleFilterClick = (filter) => {
        props.setSelectedFilter(filter);
    }

    return (
        <ul className="todo-list">
            {todos}
            <li className="list-options">
                <div className="items-left">{props.todos.length} items left</div>

                <div className='filter-container' id='filter-desktop'>
                    <div className={props.selectedFilter === 'all' ? 'filter active' : 'filter'} onClick={(e) => handleFilterClick('all')}>All</div>
                    <div className={props.selectedFilter === 'active' ? 'filter active' : 'filter'} onClick={(e) => handleFilterClick('active')}>Active</div>
                    <div className={props.selectedFilter === 'completed' ? 'filter active' : 'filter'} onClick={(e) => handleFilterClick('completed')}>Completed</div>
                </div>

                <div className="clear-button" onClick={handleClick}>Clear Completed</div>
            </li>
        </ul>
    );
}