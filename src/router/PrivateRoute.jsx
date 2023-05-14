import React from "react";
import { Route, Redirect, withRouter } from "react-router";
import { isUserLoggin, validateUUID } from "../_helper/auth.helper";

export const PrivateRoute = withRouter(({ render: render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return isUserLoggin() ? (
                    render(props)
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                );
            }}
        />
    );
});
