import React, { useEffect } from "react";
import { Switch } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import DashBoardWrapper from "../components/DashBoard/DashBoardWrapper";
import EmptyPage from "../components/common/EmptyPage";


const ApplicationRoutes = (props) => {
    const url = props.match.url;
    return (
        <Switch>
            <PrivateRoute
                path={`${url}/dashboard`}
                render={(props) => <DashBoardWrapper {...props} />}
            />
            <PrivateRoute
                path={`${url}/order`}
                render={(props) => <EmptyPage {...props} />}
            />
            <PrivateRoute
                path={`${url}/setting`}
                render={(props) => <EmptyPage {...props} />}
            />
            <PrivateRoute
                path={`${url}/account`}
                render={(props) => <EmptyPage {...props} />}
            />
        </Switch>
    );
};

export { ApplicationRoutes };
