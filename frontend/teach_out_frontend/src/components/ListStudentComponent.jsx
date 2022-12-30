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
        <div className="pt-4">
            <h2 className="text-center pt-3 pb-5">Students List</h2>
            <div className="row">
                <table className="table table-striped table-bordered p-3">
                    <thead>
                    <tr>
                        <th className="text-center p-4">Student Name</th>
                        <th className="text-center p-4">Student Address</th>
                        <th className="text-center p-4">Student Email Id</th>
                        <th className="text-center p-4">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td className="text-center p-2">{student.name}</td>
                            <td className="text-center p-2">{student.address}</td>
                            <td className="text-center p-2">{student.emailId}</td>
                            <td className="text-center p-2">
                                <button
                                    onClick={() => editStudent(student.id)}
                                    className="btn btn-warning"
                                >
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
            <div className="row">
                <button className="btn btn-success mb-5" style={{fontWeight:'bold',width:"10%"}} onClick={addStudent}>
                    {' '}
                    Add Student
                </button>
            </div>
        </div>
    );
};

export default ListStudentComponent;
