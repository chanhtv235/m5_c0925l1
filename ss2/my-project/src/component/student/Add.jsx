import React, {useRef, useState} from "react";
import {addNew} from "../../service/studentService.js";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
const Add = ()=>{
    const navigate = useNavigate();
    const handleAdd = (value)=>{
        const fetData = async ()=>{
           let isSuccess =await addNew(value);
           if (isSuccess){
               toast.success("Them moi thanh cong",{
                   position: "top-left"
               });
           }else {
               toast.error("Them moi thất bại",{
                   position: "top-left"
               });
           }
            navigate("/dashboard/student");
        }
        fetData();
    }
    const validation = Yup.object({
        // id: Yup.number().required("Yêu cầu nhập").min(1,"Id phải dương"),
        name: Yup.string().required("Yêu cầu nhập tên").matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên không đúng định dạng")
    })
    return (
        <>
            <Formik initialValues={{
                id:"",
                name:""
            }} onSubmit={handleAdd} validationSchema={validation}>
                <Form>
                    <h3>Add new student</h3>
                    {/*<div>*/}
                    {/*    <label>ID</label>*/}
                    {/*    <Field name = {'id'}/>*/}
                    {/*    <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Name</label>
                        <Field name = {'name'}/>
                        <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <Button type={'submit'}>Save</Button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}
export default Add;