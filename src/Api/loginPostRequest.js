import axios from "axios";
const IPAddress = `${process.env.REACT_APP_API_URL}`;
const path = "/api/auth/signin";
const b = "https://reqres.in/ap/users";
const loginRequest = (data) => axios.post(b, data);
export default loginRequest;
