import axios from "axios";
import IPAddress from "../IPAddress";

const path = "/api/auth/signin";
const b = "https://reqres.in/api/users";
const loginRequest = (data) => axios.post(b, data);
export default loginRequest;
