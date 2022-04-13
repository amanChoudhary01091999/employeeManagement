import { executeAPI } from "./MainAPI";

const BGV_GET_PATH = "/employee-personal-details-form/details-employeeId/101";
const COC_GET_PATH = "/ndhgo-code-of-conduct/details-employeeId/101";
const COVID_GET_PATH = "/CovidDeclaration/details-employeeId/100";
const EPF_GET_PATH = "/pf-form/details-employeeId/100";
const GF_GET_PATH = "/Nomination/details-employeeId/101";
const RCAF_GET_PATH = "/reference-check/details-employeeId/101";

const BGV_POST_PATH = "/employee-personal-details-form/create";
const COC_POST_PATH = "/ndhgo-code-of-conduct/create";
const COVID_POST_PATH = "/CovidDeclaration/create";
const EPF_POST_PATH = "/pf-form/create";
const GF_POST_PATH = "/Nomination/create";
const RCAF_POST_PATH = "/reference-check/create";

export const BGVGetApiRequest = () => executeAPI("GET", BGV_GET_PATH);
export const COCGetApiRequest = () => executeAPI("GET", COC_GET_PATH);
export const COVIDGetApiRequest = () => executeAPI("GET", COVID_GET_PATH);
export const EPFGetApiRequest = () => executeAPI("GET", EPF_GET_PATH);
export const GFGetApiRequest = () => executeAPI("GET", GF_GET_PATH);
export const RCAFGetApiRequest = () => executeAPI("GET", RCAF_GET_PATH);

export const BGVPostApiRequest = () => executeAPI("POST", BGV_POST_PATH);
export const COCPostApiRequest = () => executeAPI("POST", COC_POST_PATH);
export const COVIDPostApiRequest = () => executeAPI("POST", COVID_POST_PATH);
export const EPFPostApiRequest = () => executeAPI("POST", EPF_POST_PATH);
export const GFPostApiRequest = () => executeAPI("POST", GF_POST_PATH);
export const RCAFPostApiRequest = () => executeAPI("POST", RCAF_POST_PATH);
