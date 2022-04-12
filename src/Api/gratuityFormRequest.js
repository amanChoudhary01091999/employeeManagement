
import axios from "axios";
import { executeAPI } from "./MainAPI";
const path = "/Nomination/create";
const api=executeAPI("POST",path)

const GFFormPostUrl =api
export default  GFFormPostUrl ;

export const GFGetUrl=()=>axios.get("http://10.1.30.18:9032/Nomination/details-employeeId/101")