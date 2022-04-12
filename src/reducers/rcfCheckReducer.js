import {
    RCAF_REQUEST,
    RCAF_SUCCESS, 
    RCAF_FAIL,
    RCAF_GET_ERROR,
    RCAF_GET_REQUEST,
    RCAF_GET_SUCCESS
} from "../constants/refCheckConstants"; 

export const RCAFReducer = (state = {}, action) => {
    switch (action.type) {
        case RCAF_REQUEST:
            return { loading: true };
        case RCAF_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case RCAF_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};



const initialState={
    loadingRCAF:false,
    userInfoRCAF:{},
    errorRCAF:null
}


export const RCAFGetReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case RCAF_GET_REQUEST:
           return{ ...initialState,loadingRCAF:true}
        case RCAF_GET_SUCCESS:
            return{...initialState,loadingRCAF:false,userInfoRCAF:action.payload}
        case RCAF_GET_ERROR:
            return{...initialState,errorRCAF:action.payload,loadingRCAF:false}
        default:
            return state
    }

}

