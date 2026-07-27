import React, {Component} from "react";
import {getAll} from "../service/studentServicec.js";
import {Modal} from "react-bootstrap";
import DeleteModal from "./DeleteModal.jsx";

class ListComponent extends Component {
    constructor(props) {
        console.log("-----------constructor run---------")
        super(props);
        this.state = {
            studentList : [],
            showModal: false,
            deleteStudent: {},
            reloading : false
        }
    }
    componentDidMount() {
        console.log("-----run after list render-------")
        this.setState({
            studentList : [...getAll()]
        })
    }
    openModal = (student)=>{
       this.setState({
           deleteStudent: student,
           showModal : true
       })
    }
    closeModal = ()=>{
        this.setState({
            showModal : false,
        })
    }
    reLoading = ()=>{
        this.setState({
            // studentList : [...getAll()],
            reloading : true,
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.reloading !== this.state.reloading){
    //         this.setState({
    //             studentList : [...getAll()],
    //             reloading : false,
    //         })
    //     }
    // }


    render() {
        return (
            <>
                {console.log("-------list render-------------")}
                <h2>Danh sách sinh viên</h2>
                <table className= {'table table-dark table-striped'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((student, i) => (
                            <tr key={student.id}>
                                <td>{i + 1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                 <button onClick={()=>{
                                     this.openModal(student)
                                 }}
                                         className={'btn btn-sm btn-danger'}> Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteModal student = {this.state.deleteStudent}
                             close = {this.closeModal}
                             show = {this.state.showModal}
                             reloading = {this.reLoading}
                />
            </>);
    }
}
export default ListComponent;