import { ApiTwoTone } from "@mui/icons-material";
import axios from "axios";
import axiosConfig from "../axiosConfig";
import { executeAPI } from "./MainAPI";
const path = "/ndhgo-code-of-conduct/create";
const api = executeAPI("POST", path);

const CoCPostUrl = api;
export default CoCPostUrl;
