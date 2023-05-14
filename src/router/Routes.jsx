"use strict";

import React, { Fragment, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { isUserLoggin, validateUUID } from "../_helper/auth.helper";
import Login from "../components/Login/Login";
import { PrivateRoute } from "./PrivateRoute";
import RootPage from "../components/RootPage";

{/** Router Page Checking is User Already Login or Not If user not login So in hear Page regirect to Login Page or redirect to Dashboard Page */}

const Routes = (props) => {
    return (
        <Fragment>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        return (
                            <Fragment>
                                {!isUserLoggin() ? (
                                    <Login {...props} />
                                ) : (
                                    <Redirect
                                        to={{
                                            pathname: "/app/dashboard",
                                            state: { from: props.location },
                                        }}
                                    />
                                )}
                            </Fragment>
                        );
                    }}
                />

            <PrivateRoute
                    path="/app"
                    render={(props) => <RootPage {...props} />}
                />
            </Switch>
        </Fragment>
    );
};

export default Routes;
