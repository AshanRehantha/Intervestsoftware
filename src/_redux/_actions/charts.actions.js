"use strict";

import { chartConstants } from "../_constants";

export const lineChartRequest = (payload) => {
    return {
        type: chartConstants.LINE_CHART_REQUEST,
        payload,
    };
};

export const lineChartComplete = (payload) => {
    return {
        type: chartConstants.LINE_CHART_COMPLETE,
        payload,
    };
};
