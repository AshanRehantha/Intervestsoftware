"use strict";
import { auth } from "../_constants";
import { authConstants } from "../_constants/auth.constants";

export const authLoginRequest = (payload) => {
    return {
        type: authConstants.AUTH_LOGIN_REQUEST,
        payload,
    };
};

export const authLoginComplete = (payload) => {
    return {
        type: authConstants.AUTH_LOGIN_COMPLETE,
        payload,
    };
};
