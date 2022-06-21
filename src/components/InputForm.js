

export function InputForm(props) {
    return (
        <form>
            <div className="input-container">
                <i className="icon">
                    <div className="outer-dot">
                        <div className="inner-dot">
                        </div>
                    </div>
                </i>
                <input className="input-field" type="text" placeholder="Create a new todo..." />
            </div>
        </form>
    );
}