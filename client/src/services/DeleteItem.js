import axios from "axios";

export function deleteItem(CategoryID,ItemID){ 
    const apiUri=`http://localhost:8080/api/admin/deleteItem/${CategoryID}/${ItemID}`;

    axios.put(apiUri).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}