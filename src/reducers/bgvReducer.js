import {
    BGV_REQUEST,
    BGV_SUCCESS, 
    BGV_FAIL,BGV_GET_ERROR,BGV_GET_SUCCESS,BGV_GET_REQUEST
} from "../constants/bgvConstants"; 

export const BGVReducer = (state = {},action) => 
{
    switch (action.type) 
    {
        case BGV_REQUEST:
            return { loading: true };
        case BGV_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case BGV_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

const initialState={
    loadingBGV:false,
    userInfoBGV:{},
    errorBGV:null
}


export const BGVGetReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case BGV_GET_REQUEST:
           return{ ...initialState,loadingBGV:true}
        case BGV_GET_SUCCESS:
            return{...initialState,loadingBGV:false,userInfoBGV:action.payload}
        case BGV_GET_ERROR:
            return{...initialState,errorBGV:action.payload,loadingBGV:false}
        default:
            return state
    }

}
