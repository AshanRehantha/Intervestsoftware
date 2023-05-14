"use strict";

import { chartConstants } from "../_constants";



const INITIAL_CHART_STATE = {
    lineChart: null,

};

export function chartReducer(state = INITIAL_CHART_STATE,action) {
    switch (action.type) {
        case chartConstants.LINE_CHART_REQUEST:
            return{
                ...state,
                lineChart:null,
            }
        case chartConstants.LINE_CHART_COMPLETE:
            return{
                ...state,
                lineChart:action.payload,
            }    
    }

    return state;

}