import {Button, Modal} from "react-bootstrap";
import {deleteById, findById, getAll} from "../../service/studentService.js";
import React from "react";
import {toast} from "react-toastify";
const Delete =({show,student,reloading,close})=>{
   const handleClose =()=>{
        close();
    }
    const handleDelete =()=>{
        const fetData =  async ()=>{
            const isSuccess = await deleteById(student.id);
            if (isSuccess){
                reloading();
                toast.success("Xoá thành công");
            }else {
                toast.error("Xoá không thành công");
            }
            close();
        }
        fetData();

    }
    return (
        <>
            {console.log("----------delete render-------------")}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {student?.name} không?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default React.memo(Delete);