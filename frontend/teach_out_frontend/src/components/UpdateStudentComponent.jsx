import React, { Component } from 'react'
import StudentService from "../services/StudentService";

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            address: '',
            emailId: ''
        }
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({name: student.name,
                address: student.address,
                emailId : student.emailId
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, address: this.state.address, emailId: this.state.emailId};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/student');
        });
    }

    changeStudentNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    render() {
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
                                               value={this.state.name} onChange={this.changeStudentNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student Address: </label>
                                        <input placeholder="Student Address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
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
}

export default UpdateStudentComponent