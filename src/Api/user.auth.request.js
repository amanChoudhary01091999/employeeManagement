import { executeAPI } from "./MainAPI";

const path = "/api/auth/user-registration";
export const userAuthApiRequest = executeAPI("POST", path);
