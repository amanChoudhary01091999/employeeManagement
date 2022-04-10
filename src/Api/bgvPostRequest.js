
import axios from "axios";
import { executeAPI } from "./MainAPI";
const path = "/employee-personal-details-form/create";
const api=executeAPI("POST",path)

const BGVPostUrl =api
export default  BGVPostUrl ;

export const BGVGetUrl=()=>axios.get("http://10.1.30.18:9032/employee-personal-details-form/details-employeeId/101")