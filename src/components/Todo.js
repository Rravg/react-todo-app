import './styles/Todo.css';
import iconCross from '../icons/icon-cross.svg';
import { Icon } from './Icon.js';

export function Todo(props) {

    const text = crossText(props.status);

    const handleTodoClick = (e) => {
        props.setStatus(!props.status, props.id);
    }

    const handleCrossClick = (e) => {
        props.removeTodo(props.id);
    }

    function crossText(status) {
        if (!status) {
            return (
                <div style={{ width: '100%', pointerEvents: 'none' }} >
                    {props.todoText}
                </div>
            );
        } else {
            return (
                <div style={{ width: '100%', pointerEvents: 'none' }} className='checked'>
                    {props.todoText}
                </div>
            );
        }
    }

    return (
        <li className='todo'>
            <div className='todo-container' >
                <div style={{ display: 'flex', width: '100%' }} onClick={handleTodoClick}>
                    <i className="todo-icon" style={{ pointerEvents: 'none' }}>
                        <Icon complete={props.status} />
                    </i>
                    {text}
                </div>
                <i className="cross-icon" onClick={handleCrossClick}>
                    <input type="image" src={iconCross} alt="" />
                </i>
            </div>
        </li>
    );
}