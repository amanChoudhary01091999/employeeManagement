import { ApiTwoTone } from "@mui/icons-material";
import axios from "axios";
import axiosConfig from "../axiosConfig";
import { executeAPI } from "./MainAPI";
const path = "/ndhgo-code-of-conduct/create";
const api = executeAPI("POST", path);
const userGetPath = "ndhgo-code-of-conduct/details-employeeId/101"


const CoCPostUrl = api;
export default CoCPostUrl;








export const cocGetData = () => axios.get("http://10.1.30.18:9032/" + userGetPath);
