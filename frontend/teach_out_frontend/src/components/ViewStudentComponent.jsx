import React, { Component } from 'react'
import StudentService from "../services/StudentService";

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div className="p-5">
                <div className = "card col-md-6 offset-md-3 p-5 shadow">
                    <h3 className = "text-center p-4"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className="p-2" style={{fontWeight:'bold'}}> Employee First Name: </label>
                            <div className="p-2 border border-primary border-1"> { this.state.student.name }</div>
                        </div>
                        <div className = "row">
                            <label className="p-2" style={{fontWeight:'bold'}}> Employee Last Name: </label>
                            <div className="p-2 border border-primary border-1"> { this.state.student.address }</div>
                        </div>
                        <div className = "row">
                            <label className="p-2" style={{fontWeight:'bold'}}> Employee Email ID: </label>
                            <div className="p-2 border border-primary border-1"> { this.state.student.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudentComponent