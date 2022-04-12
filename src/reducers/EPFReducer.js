import { EPF_REQUEST, EPF_SUCESS, EPF_FAIL ,EPF_GET_ERROR,EPF_GET_SUCCESS,EPF_GET_REQUEST} from "../constants/EPFConstant";

export const reducerEPF = (state = {}, action) => {
    switch (action.type) {
        case EPF_REQUEST:
            return { loading: true };
        case EPF_SUCESS:
            return { loading: false, userInfo: action.payload };
        case EPF_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


const initialState={
    loadingEPF:false,
    userInfoEPF:{},
    errorEPF:null
}


export const EPFGetReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case EPF_GET_REQUEST:
           return{ ...initialState,loadingEPF:true}
        case EPF_GET_SUCCESS:
            return{...initialState,loadingEPF:false,userInfoEPF:action.payload}
        case EPF_GET_ERROR:
            return{...initialState,errorEPF:action.payload,loadingEPF:false}
        default:
            return state
    }

}
