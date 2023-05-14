"use strict";

import { chartConstants } from "../_constants";
import { authConstants } from "../_constants/auth.constants";



const INITIAL_AUTH_USER_STATE = {
    authUser: null,

};

export function authReducer(state = INITIAL_AUTH_USER_STATE,action) {
    switch (action.type) {
        case authConstants.AUTH_LOGIN_REQUEST:
            return{
                ...state,
                authUser:null,
            }
        case chartConstants.LINE_CHART_COMPLETE:
            return{
                ...state,
                authUser:action.payload,
            }    
    }

    return state;

}