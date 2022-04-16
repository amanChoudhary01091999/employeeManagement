import axios from "axios";
const IPAddress = `${process.env.REACT_APP_API_URL}`;
const path = "/api/auth/signin";
const loginRequest = (data) => axios.post(path, data);
export default loginRequest;
