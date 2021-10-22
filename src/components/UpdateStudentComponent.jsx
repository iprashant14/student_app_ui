import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            age: '',
            class: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeClassHandler = this.changeClassHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({name: student.name,
                age: student.age,
                class : student.class
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {name: this.state.name, age: this.state.age, class: this.state.class};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/students');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeClassHandler= (event) => {
        this.setState({class: event.target.value});
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
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Class: </label>
                                            <input placeholder="Class" name="class" className="form-control" 
                                                value={this.state.class} onChange={this.changeClassHandler}/>
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
