import React, {useState} from 'react';
import './ToDo.css';

function ToDo() {
    const [tasks, setTasks] = useState([{text: 'Sample Todo', id: 'g1'}]);
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const taskInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            alert('You have not entered anything');
            return;
        }
        addTaskHandler(enteredValue);
    };

    const addTaskHandler = enteredText => {
        setTasks(prevTasks => {
            const updatedGoals = [...prevTasks];
            updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
            return updatedGoals;
        });
    };


    const deleteItemHandler = goalId => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.filter(goal => goal.id !== goalId);
            return updatedTasks;
        });
    };

    const TaskGroup = props => {
        return (
            <ul className="list-group">
                {props.task.map(item => (
                    <TaskItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        onDelete={props.onDeleteItem}
                    />
                ))}
            </ul>
        );
    };

    const TaskItem = props => {
        const deleteHandler = () => {
            // setDeleteText('(Deleted!)');
            props.onDelete(props.id);
        };
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {props.text}
                <button type="button" className="close" onClick={deleteHandler}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </li>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>TODO</h1>
                    <form onSubmit={formSubmitHandler} className="mb-5">
                        <label htmlFor="name">What needs to be done:</label>
                        {/* prettier-ignore */}
                        <input type="text" className="form-control mb-2" id="name" name="name" onChange={taskInputChangeHandler}  />

                        {/* prettier-ignore */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <TaskGroup onDeleteItem={deleteItemHandler} task={tasks} />
                </div>
            </div>
        </div>
    );
}

export default ToDo;
