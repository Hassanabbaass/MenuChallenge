import axios from "axios";

export const addItem = async (CatID, ItemBeingAdded) => {
    const apiUri=`http://localhost:8080/api/admin/additem/${CatID}`;
    return await axios.put(apiUri, ItemBeingAdded)
}