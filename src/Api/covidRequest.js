
import { executeAPI } from "./MainAPI";
const path = "/CovidDeclaration/create";
const api=executeAPI("POST",path)

const CovidPostUrl = api;
export default  CovidPostUrl ;