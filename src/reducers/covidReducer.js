import {
    COVID_REQUEST,
    COVID_SUCCESS, 
    COVID_FAIL,
    COVID_GET_REQUEST,
    COVID_GET_SUCCESS,
    COVID_GET_ERROR,
} from "../constants/covidConstants"; 

export const COVIDReducer = (state = {}, action) => {
    switch (action.type) {
        case COVID_REQUEST:
            return { loading: true };
        case COVID_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case COVID_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


const initialState={
    loadingCOVID:false,
    userInfoCOVID:{},
    errorCOVID:null
}
export const COVIDGetReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case COVID_GET_REQUEST:
           return{ ...initialState,loadingCOVID:true}
        case COVID_GET_SUCCESS:
            return{...initialState,loadingCOVID:false,userInfoCOVID:action.payload}
        case COVID_GET_ERROR:
            return{...initialState,errorCOVID:action.payload,loadingCOVID:false}
        default:
            return state
    }

}
