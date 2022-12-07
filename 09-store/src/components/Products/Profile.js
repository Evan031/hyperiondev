import React, {useState} from 'react';

const Profile = props => {
    const [name, setName] = useState('Evan');
    const [isValid, setIsValid] = useState(true);

    const formSubmitHandler = event => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setIsValid(false);
            return;
        }
        alert(`You have changed the name to ${name}`);
    };

    const nameInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setName(event.target.value);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>{name}</h1>
                    {/* prettier-ignore */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Open modal
                    </button>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="close" data-dismiss="modal">
                                        &times;
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="form-group">
                                        <form onSubmit={formSubmitHandler}>
                                            <label htmlFor="name">Name:</label>
                                            {/* prettier-ignore */}
                                            <input type="text" className="form-control" id="name" value={name} name="name" onChange={nameInputChangeHandler}  />

                                            {/* prettier-ignore */}
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                        <div className="modal-footer">
                                            {/* prettier-ignore */}
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
