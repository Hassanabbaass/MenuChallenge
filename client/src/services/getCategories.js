import axios from 'axios';
const apiUri="http://localhost:8080/api/admin/findallcat";

export function getAllCategories(){
    return axios.get(apiUri)
}