import axios from "axios";
const apiUri ='http://localhost:8080/api/admin/login'

export const LoginAdmin = async (AdminInfo) => {
    return await axios.post(apiUri, AdminInfo)
}