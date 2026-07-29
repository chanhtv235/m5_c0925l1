const studentList = [
    {
        id: 1,
        name: "chánh1",
    },
    {
        id: 2,
        name: "chánh2",
    },
    {
        id: 3,
        name: "chánh3",
    }
]
export const getAll = ()=>{
    //call api
    return [...studentList];
}
export const addNew= (student)=>{
    studentList.push(student)
}
export const deleteById = (id) =>{
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id == id){
            studentList.splice(i,1);
            break;
        }
    }
}