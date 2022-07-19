import { checkLocalstore } from "../helper/localstore/localstore";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    return checkLocalstore("_userLogin") ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" />
    );
};

export default PrivateRoute;
