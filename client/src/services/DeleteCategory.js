import axios from "axios";

export function deleteCategory(_id){ 
    const apiUri=`http://localhost:8080/api/admin/deleteCategory/${_id}`;

    axios.delete(apiUri).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}