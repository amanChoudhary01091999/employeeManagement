import axios from "axios";
import IPAddress from "../IPAddress";

const userGetPath = "/api/auth/getalluser/user";
const userPostPath = "/api/auth/signup";
const userDeletePath = "/api/auth/delete/";
const userUpdatePath = "/api/auth/signin";
const passwordPath = "/api/auth/password-generator";
const b = "https://api.github.com/users";

export const userGetData = () => axios.get(IPAddress + userGetPath);

export const userPostData = (object) =>
    axios.post(IPAddress + userPostPath, object);

export const userDeleteData = (id) =>
    axios.delete(IPAddress + userDeletePath + id);

export const userUpdateData = (object) => axios.put(b, object);

export const passwordGenerator = () => axios.get(IPAddress + passwordPath);
