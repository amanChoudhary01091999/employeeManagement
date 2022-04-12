import {
    GFForm_REQUEST,
    GFForm_SUCCESS, 
    GFForm_FAIL,
    GF_GET_REQUEST,
    GF_GET_SUCCESS,
    GF_GET_ERROR
} from "../constants/GFFormConstants"; 

export const GFFormReducer = (state = {}, action) => {
    switch (action.type) {
        case GFForm_REQUEST:
            return { loading: true };
        case GFForm_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case GFForm_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


const initialState={
    loadingGF:false,
    userInfoGF:{},
    errorGF:null
}


export const GFGetReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case GF_GET_REQUEST:
           return{ ...initialState,loadingGF:true}
        case GF_GET_SUCCESS:
            return{...initialState,loadingGF:false,userInfoGF:action.payload}
        case GF_GET_ERROR:
            return{...initialState,errorGF:action.payload,loadingGF:false}
        default:
            return state
    }

}
