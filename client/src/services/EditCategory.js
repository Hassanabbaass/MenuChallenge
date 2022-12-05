import axios from "axios";

export function editCategory(_id,name){ 
    const apiUri=`http://localhost:8080/api/admin/updateCategory/${_id}`;

    axios.put(apiUri, name).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}