import {
    CoC_REQUEST,
    CoC_SUCCESS, 
    CoC_FAIL,
    COC_GET_REQUEST,
    COC_GET_SUCCESS,
    COC_GET_FAIL

} from "../constants/codeOfConductConstants"; 



export const CoCReducer = (state = {}, action) => {
    switch (action.type) {
        case CoC_REQUEST:
            return { loading: true };
        case CoC_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case CoC_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


const initialState={
    loadingCOC:false,
    userInfoCOC:{},
    errorCOC:null


}

export const cocGetReducer = (stateCOC = initialState, action) => {
    switch (action.type) {
        case COC_GET_REQUEST:
            return { ...initialState, loadingCOC: true };
        case COC_GET_SUCCESS:
            return { ...initialState, loadingCOC: false, userInfoCOC: action.payload };
        case COC_GET_FAIL:
            return { ...initialState, loadingCOC: false, errorCOC: action.payload };
        default:
            return stateCOC;
    }
};