import {useRef, useState} from "react";
import {addNew, getAll} from "../../service/studentService.js";

const Add = ({reloading})=>{
    // const [student,setStudent] = useState({});
    const idRef = useRef();
    const nameRef = useRef();
    const handleAdd = ()=>{
        const newStudent = {
            id: idRef.current.value,
            name: nameRef.current.value,
        }
        idRef.current.value ="";
        nameRef.current.value ="";
        addNew(newStudent);
        reloading();
    }
    return (
        <>
            <div className={'w-50'}>
                <h3>Thêm mới</h3>
                <input ref={idRef} placeholder={'Nhập id'}/>
                <input ref={nameRef} placeholder={'Nhập tên'}/>
                <button onClick={handleAdd}>Lưu</button>
            </div>

        </>
    )
}
export default Add;