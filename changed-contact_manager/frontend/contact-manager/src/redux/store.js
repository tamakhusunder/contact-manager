import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { authReducer } from "./reducers/authReducer";

const initialState = {
    auth: {
        loggedIn : false
    }
};
const rootReducer = combineReducers({
    auth : authReducer
});

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger())
    );

export { store };