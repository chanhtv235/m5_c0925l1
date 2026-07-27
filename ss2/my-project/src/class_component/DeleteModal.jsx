import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../service/studentServicec.js";

class DeleteModal extends Component {
    handleClose =()=>{
     this.props.close();
    }
    handleDelete =()=>{
     // gọi service xoá
        deleteById(this.props.student.id);
        this.props.reloading();
        this.props.close();
    }
    render() {
        return (
        <>
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {this.props.student?.name} không?</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
    }
}
export default DeleteModal;