import  { SET_LOGGED_IN } from "../constants/authConstants"

const initialState = {
    loggedIn : false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LOGGED_IN:
            state ={
                ...state,
                loggedIn : true,
            }
            break;
        default:
            return state;
    }
    return state;
};
