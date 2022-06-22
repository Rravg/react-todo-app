import './styles/InputForm.css';

export function InputForm(props) {

    const handleTextChange = (e) => {
        const newUserInput = { todoText: e.target.value };
        props.setUserInput(newUserInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemToAdd = { ...props.userInput, status: false };
        if (props.userInput.todoText.length === 0) {
            console.log("empty item");
        } else {
            props.addNewTodo(itemToAdd);
        }
        props.setUserInput({ todoText: '' });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <i className="icon">
                    <div className="outer-dot">
                        <div className="inner-dot">
                        </div>
                    </div>
                </i>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Create a new todo..."
                    onChange={handleTextChange}
                    value={props.userInput.todoText}
                />
            </div>
        </form>
    );
}