import { executeAPI } from "./MainAPI";

const USER_GET_PATH = "/api/auth/getalluser/user";
const USER_POST_PATH = "/api/auth/signup";
const USER_DELETE_PATH = "/api/auth/delete/";
const USER_UPDATE_PATH = "/api/auth/signin";
const PASSWORD_PATH = "/api/auth/password-generator";
const b = "https://api.github.com/users";

export const userGetData = executeAPI("GET", USER_GET_PATH);
export const userPostData = executeAPI("POST", USER_POST_PATH);
export const userDeleteData = executeAPI("DELETE", USER_DELETE_PATH);
export const userUpdateData = executeAPI("PUT", USER_UPDATE_PATH);
export const passwordGenerator = executeAPI("GET", PASSWORD_PATH);
