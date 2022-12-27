import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';

const ViewStudentComponent = (props) => {
    const [student, setStudent] = useState({});
    const id = props.match.params.id;

    useEffect(() => {
        StudentService.getStudentById(id).then((res) => {
            setStudent(res.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Student Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Student Name: </label>
                        <div>{student.name}</div>
                    </div>
                    <div className="row">
                        <label>Student Address: </label>
                        <div>{student.address}</div>
                    </div>
                    <div className="row">
                        <label>Student Email ID: </label>
                        <div>{student.emailId}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewStudentComponent;