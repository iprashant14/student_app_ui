import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/students";
const DEMO_API_BASE_URL = "http://localhost:8082/demo/api/v1/";

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

    getDemoData(){
       return axios.get(DEMO_API_BASE_URL+"demoData");
    }
}

export default new StudentService()