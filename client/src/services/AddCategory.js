import axios from "axios";
const apiUri ='http://localhost:8080/api/admin/'

export const addCategory = async (CategoryBeingAdded) => {
    return await axios.post(apiUri, CategoryBeingAdded)
}