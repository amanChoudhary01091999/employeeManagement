import { executeAPI } from "./MainAPI";
const path = "/pf-form/create";
const api = executeAPI("POST", path);

const EPFPostURL = api;
export default EPFPostURL;
