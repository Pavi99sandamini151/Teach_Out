import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';

const ListStudentComponent = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getStudents().then((res) => {
            setStudents(res.data);
        });
    }, []);

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id).then(() => {
            setStudents(students.filter((student) => student.id !== id));
        });
    };

    const viewStudent = (id) => {
        props.history.push(`/view-student/${id}`);
    };

    const editStudent = (id) => {
        props.history.push(`/add-student/${id}`);
    };

    const addStudent = () => {
        props.history.push('/add-student/_add');
    };

    return (
        <div>
            <h2 className="text-center">Students List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addStudent}>
                    {' '}
                    Add Student
                </button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Address</th>
                        <th>Student Email Id</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>{student.emailId}</td>
                            <td>
                                <button onClick={() => editStudent(student.id)} className="btn btn-info">
                                    Update{' '}
                                </button>
                                <button
                                    style={{ marginLeft: '10px' }}
                                    onClick={() => deleteStudent(student.id)}
                                    className="btn btn-danger"
                                >
                                    Delete{' '}
                                </button>
                                <button
                                    style={{ marginLeft: '10px' }}
                                    onClick={() => viewStudent(student.id)}
                                    className="btn btn-info"
                                >
                                    View{' '}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListStudentComponent;
