import axios from 'axios';
const apiUri="http://localhost:8080/api/admin/findallcatwithitems";

export function getAllCategoriesWithItems(){
    return axios.get(apiUri)
}