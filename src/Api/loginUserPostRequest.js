import axios from "axios";
import IPAddress from "../IPAddress";

const path = "/api/auth/user-registration";
const UserLoginRequestURL= (data) => axios.post(IPAddress+path, data);
export default UserLoginRequestURL;