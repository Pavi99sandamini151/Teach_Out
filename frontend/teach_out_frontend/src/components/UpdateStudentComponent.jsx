import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';

const UpdateStudentComponent = (props) => {
    const [student, setStudent] = useState({
        name: '',
        address: '',
        emailId: '',
    });
    const id = props.match.params.id;

    useEffect(() => {
        StudentService.getStudentById(id).then((res) => {
            setStudent(res.data);
        });
    }, [id]);

    const updateStudent = (event) => {
        event.preventDefault();
        const studentData = {
            name: student.name,
            address: student.address,
            emailId: student.emailId,
        };
        StudentService.updateStudent(studentData, id).then(() => {
            props.history.push('/students');
        });
    };

    const changeNameHandler = (event) => {
        setStudent({ ...student, name: event.target.value });
    };

    const changeAddressHandler = (event) => {
        setStudent({ ...student, address: event.target.value });
    };

    const changeEmailHandler = (event) => {
        setStudent({ ...student, emailId: event.target.value });
    };

    const cancel = () => {
        props.history.push('/students');
    };

        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Student</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Student Name: </label>
                                        <input placeholder="Student Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student Address: </label>
                                        <input placeholder="Student address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Student Email Address" name="emailId" className="form-control"
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default UpdateStudentComponent