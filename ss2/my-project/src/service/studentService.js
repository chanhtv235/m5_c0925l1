import axios from "axios";

const URL = import.meta.env.VITE_API_URL;
export const getAll = async ()=>{
    //call api
    try{
        const res = await axios.get(`${URL}/students`);

        return res.data;
    }catch (e){
        console.log(e);
    }
    return [];
}
export const addNew=  async (student)=>{
    try{
        const res = await axios.post(`${URL}/students`,student);
        return res.status=="201";
    }catch (e){
        console.log(e);
    }
    return false;
}
export const deleteById = async (id) =>{
    try{
        const res = await axios.delete(`${URL}/students/${id}`);
        console.log("------------------------------------------------------------------")
        console.log(res);
        return res.status=="200";
    }catch (e){
        console.log(e);
    }
    return false;
}
export const findById = async (id) =>{
    try{
        const res = await axios.get(`${URL}/students/${id}`);
        return res.data;
    }catch (e){
        console.log(e);
    }
    return null;
}