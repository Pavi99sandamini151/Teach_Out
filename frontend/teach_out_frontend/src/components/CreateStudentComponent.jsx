import React, { Component } from 'react'
import StudentService from "../services/StudentService";

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            address: '',
            emailId: ''
        }
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({name: student.name,
                    address: student.address,
                    emailId : student.emailId
                });
            });
        }
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, address: this.state.address, emailId: this.state.emailId};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3 pt-5 shadow">
                            <div className="pb-4">
                                {
                                    this.getTitle()
                                }
                            </div>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group p-3">
                                        <label> Student Name: </label>
                                        <input placeholder="Student Name" name="name" className="form-control"
                                               value={this.state.name} onChange={this.changeStudentNameHandler}/>
                                    </div>
                                    <div className = "form-group p-3">
                                        <label> Student Address: </label>
                                        <input placeholder="Last Name" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className = "form-group p-3">
                                        <label> Email Id: </label>
                                        <input placeholder="Student Email Address" name="emailId" className="form-control"
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group p-3 flex-box justify-content-between">
                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}
                                         style={{fontWeight:'bold'}}>
                                            Save Student
                                        </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                         style={{marginLeft: "10px", fontWeight:'bold'}}>
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateStudentComponent