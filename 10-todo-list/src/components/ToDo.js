import React, {useState} from 'react';
import './ToDo.css';

function App() {
    const [task, setTask] = useState('');
    const [isValid, setIsValid] = useState(true);

    const formSubmitHandler = event => {
        event.preventDefault();
        if (task.trim().length === 0) {
            setIsValid(false);
            alert('You have not entered anything');
            return;
        }
        alert(task);
    };

    const taskInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setTask(event.target.value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>TODO</h1>
                    <ul>
                        <li>Task 1</li>
                        <li>Task 1</li>
                        <li>Task 1</li>
                    </ul>
                    <form onSubmit={formSubmitHandler}>
                        <label htmlFor="name">What needs to be done:</label>
                        {/* prettier-ignore */}
                        <input type="text" className="form-control" value={task} id="name" name="name" onChange={taskInputChangeHandler}  />

                        {/* prettier-ignore */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
