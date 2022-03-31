
import { executeAPI } from "./MainAPI";
const path = "/Nomination/create";
const api=executeAPI("POST",path)

const GFFormPostUrl =api
export default  GFFormPostUrl ;