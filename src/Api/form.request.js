import { executeAPI } from "./MainAPI";

const BGV_GET_PATH = "/employee-personal-details-form/details-employeeId/";
const COC_GET_PATH = "/ndhgo-code-of-conduct/details-employeeId/";
const COVID_GET_PATH = "/CovidDeclaration/details-employeeId/";
const EPF_GET_PATH = "/pf-form/details-employeeId/";
const GF_GET_PATH = "/Nomination/details-employeeId/";
const RCAF_GET_PATH = "/reference-check/details-employeeId/";

const BGV_POST_PATH = "/employee-personal-details-form/create";
const COC_POST_PATH = "/ndhgo-code-of-conduct/create";
const COVID_POST_PATH = "/CovidDeclaration/create";
const EPF_POST_PATH = "/pf-form/create";
const GF_POST_PATH = "/Nomination/create";
const RCAF_POST_PATH = "/reference-check/create";

export const BGVGetApiRequest = executeAPI("GET_BY_ID", BGV_GET_PATH);
export const COCGetApiRequest = executeAPI("GET_BY_ID", COC_GET_PATH);
export const COVIDGetApiRequest = executeAPI("GET_BY_ID", COVID_GET_PATH);
export const EPFGetApiRequest = executeAPI("GET_BY_ID", EPF_GET_PATH);
export const GFGetApiRequest = executeAPI("GET_BY_ID", GF_GET_PATH);
export const RCAFGetApiRequest = executeAPI("GET_BY_ID", RCAF_GET_PATH);

export const BGVPostApiRequest = executeAPI("POST", BGV_POST_PATH);
export const COCPostApiRequest = executeAPI("POST", COC_POST_PATH);
export const COVIDPostApiRequest = executeAPI("POST", COVID_POST_PATH);
export const EPFPostApiRequest = executeAPI("POST", EPF_POST_PATH);
export const GFPostApiRequest = executeAPI("POST", GF_POST_PATH);
export const RCAFPostApiRequest = executeAPI("POST", RCAF_POST_PATH);
