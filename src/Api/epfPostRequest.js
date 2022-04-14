import axios from "axios";
import { executeAPI } from "./MainAPI";
const path = "/pf-form/create";
const api = executeAPI("POST", path);

const EPFPostURL = api;
export default EPFPostURL;
export const EPFGetUrl = () =>
    axios.get("http://10.1.30.18:9032/pf-form/details-employeeId/102");
