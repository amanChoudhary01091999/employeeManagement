import axios from "axios";
import { executeAPI } from "./MainAPI";
const path = "/reference-check/create";
const api = executeAPI("POST", path);

const RCAFPostUrl = api;
export default RCAFPostUrl;

export const RCAFGetUrl = () =>
    axios.get("http://10.1.30.18:9032/reference-check/details-employeeId/101");
