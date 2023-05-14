"use strict";
import { createBrowserHistory } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistReducer } from "redux-persist";
import { switchMap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import epics from "../_epics";

import storage from "redux-persist/lib/storage/session";
import { createEpicMiddleware } from 'redux-observable';

import reducers from "../_reducers";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: (inboundState) => {
        return inboundState;
    },
    blacklist: [
        "loading",
    ],
};

const history = createBrowserHistory();

const configureStore = () => {
    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history),
    });

    const reducer = (state, action) => {
        return rootReducer(state, action);
    }

    const epicMiddleware = (store) => {
        const originalEpicMiddleware = createEpicMiddleware({
            dependencies: {
                dispatch: store.dispatch,
            },
        });
        const storeMiddleware = originalEpicMiddleware(store);
        epicMiddleware.run = originalEpicMiddleware.run;
        return storeMiddleware;
    }

    const router = routerMiddleware(history);
    const loggerMiddleware = createLogger();

    const middlewares = [
        epicMiddleware,
        router,
    ];

    const epic$ = new BehaviorSubject(epics);

    const hotReloadingEpic = (...args) =>
    epic$.pipe(switchMap((epic) => epic(...args)));

    let configuredStore = {};

    configuredStore = createStore(
        persistReducer(persistConfig, reducer),
        compose(applyMiddleware(...middlewares, loggerMiddleware)),
    );

    epicMiddleware.run(hotReloadingEpic);

    if (module.hot) {
        module.hot.accept("../_epics", () => {
            const nextRootEpic = require("../_epics").default;
            epic$.next(nextRootEpic);
        });
    }
    return configuredStore;
}


export { history, configureStore }