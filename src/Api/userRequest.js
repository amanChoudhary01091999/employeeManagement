import axios from "axios";
import IPAddress from "../IPAddress";

const userGetPath = "/api/auth/signin";
const userPostPath = "/api/auth/signin";
const userDeletePath = "/api/auth/signin";
const userUpdatePath = "/api/auth/signin";
const b = "https://reqres.in/api/users";

export const userGetData = () => axios.get(b);

export const userPostData = (object) => axios.post(b, object);

export const userDeleteData = (data) => axios.delete(b, data);

export const userUpdateData = (object) => axios.put(b, object);
