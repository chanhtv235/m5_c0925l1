
import React, {useCallback, useEffect, useState} from "react";
import {getAll} from "../../service/studentService.js";
import Delete from "./Delete.jsx";
import Add from "./Add.jsx";
import {Link} from "react-router-dom";

const List = ()=>{

    const [studentList, setStudentList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({
        id:"",
        name:""
    });
    useEffect(() => {
        console.log("----useEffect---------")
        setStudentList([...getAll()])
    },[]);
    const openModal = useCallback((student)=>{
        setShowModal(true);
        setDeleteStudent(student)
    },[])

    const closeModal = useCallback(()=>{
        setShowModal(false);
    },[])
    const reLoading = useCallback(()=>{
        setStudentList([...getAll()])
    },[])

    return (
        <>
            {console.log("-------list render-------------")}
            <h2>Danh sách sinh viên</h2>
            <Link to={'/dashboard/student/add'}>Add new</Link>
            <table className= {'table table-dark table-striped'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Detail</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    studentList.map((student, i) => (
                        <tr key={student.id}>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <Link to={`/dashboard/student/detail/${student.id}`}>Detail</Link>
                            </td>
                            <td>
                                <button onClick={()=>{
                                    openModal(student)
                                }}
                                        className={'btn btn-sm btn-danger'}> Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Delete student = {deleteStudent}
                         close = {closeModal}
                         show = {showModal}
                         reloading = {reLoading}
            />
        </>);
}
export default List;