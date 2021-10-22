import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: [],
            demoData: ''
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);

    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({ students: this.state.students.filter(student => student.id !== id) });
        });
    }
    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`);
    }
    editStudent(id) {
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data });
        });
        StudentService.getDemoData().then((res) => {
            console.log(res.data);
            this.setState({ demoData: res.data });
        });
    }

    addStudent() {
        this.props.history.push('/add-student/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Student Name</th>
                                <th> Student Age</th>
                                <th> Student Class</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td> {student.id} </td>
                                            <td> {student.name} </td>
                                            <td> {student.age}</td>
                                            <td> {student.class}</td>
                                            <td>
                                                <button onClick={() => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewStudent(student.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
                <h4>{this.state.demoData}</h4>
            </div>
        )
    }
}

export default ListStudentComponent
