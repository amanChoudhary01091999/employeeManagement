import { executeAPI } from "./MainAPI";
import axios from "axios";
const path = "/CovidDeclaration/create";
const api = executeAPI("POST", path);
const userGetPath = "CovidDeclaration/details-employeeId/100";

const CovidPostUrl = api;
export default CovidPostUrl;

export const covidGetData = () =>
    axios.get("http://10.1.30.18:9032/" + userGetPath);
