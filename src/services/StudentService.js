import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {

    getStudents(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createStudent(student){
        return axios.post(EMPLOYEE_API_BASE_URL, student);
    }

    getStudentById(studentId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + studentId);
    }
}

export default new StudentService()