import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";
const Delete =({show,student,reloading,close})=>{
   const handleClose =()=>{
        close();
    }
    const handleDelete =()=>{
        deleteById(student.id);
        reloading();
        close();
    }
    return (
        <>
            {console.log("----------delete run-------------")}
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
export default Delete;