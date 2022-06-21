import './styles/Todo.css';
import iconCross from '../icons/icon-cross.svg';

export function Todo(props) {

    return (
        <div className="todo-container">
            <i className="todo-icon">
                <span className="outer-dot">
                    <span className="inner-dot">
                    </span>
                </span>
            </i>
            <li className="todo">
                {props.text}
            </li>
            <i className="todo-icon">
                <input type="image" src={iconCross} alt="" />
            </i>
        </div>
    );
}