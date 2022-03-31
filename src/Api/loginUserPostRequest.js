import { executeAPI } from "./MainAPI";
const path = "/api/auth/user-registration";
const api=executeAPI("POST",path)

const UserLoginRequestURL =api
export default  UserLoginRequestURL ;