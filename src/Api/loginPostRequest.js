import axios from "axios";

const path = "/api/auth/signin";
const b = "https://reqres.in/api/users";
const loginRequest = (data) => axios.post(b, data);
export default loginRequest;
