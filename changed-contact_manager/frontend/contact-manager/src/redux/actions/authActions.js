import { SET_LOGGED_IN } from "../constants/authConstants"

export const setLoggedIn = (value) => {
    return {
        type: SET_LOGGED_IN,
        payload : value
    };
};