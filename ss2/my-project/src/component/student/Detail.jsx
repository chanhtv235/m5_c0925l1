import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../../service/studentService.js";

function Detail(){
   const {id} = useParams();
   const [student,setStudent] = useState({id:0,name:""});
    useEffect(() => {
       setStudent(findById(id));
    }, []);
    return(
        <>
            <h2>Detail</h2>
            <p>ID: {student.id}</p>
            <p>ID: {student.name}</p>
        </>
    )
}
export default Detail;