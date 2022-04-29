import { executeAPI } from "./MainAPI";

const path = "/api/auth/signin";

export const adminLoginApiRequest = executeAPI("POST", path);
