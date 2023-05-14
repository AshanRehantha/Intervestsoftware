"use strict";

import { from, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";

import {
    mergeMap,
    switchMap,
    catchError,
    map,
    concatMap,
} from "rxjs/operators";
import { chartConstants } from "../_constants";
import { lineChartComplete } from "../_actions";

export const lineChartEpic = (actions$) =>
    actions$.pipe(
        ofType(chartConstants.LINE_CHART_REQUEST),
        mergeMap((action) => {
            return ajax
                .get(
                    "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-03-09?adjusted=true&sort=asc&limit=120&apiKey=y9Ok1zT2HsrR3iBizpIm5Pt98UAzI8ap",
                )
                .pipe(
                    map((ajaxResponse) =>
                    lineChartComplete(ajaxResponse.response),
                    ),
                    // catchError((error) =>
                    //     of(recentBillerListsError(error), ajaxError(error)),
                    // ),
                );
        }),
    );