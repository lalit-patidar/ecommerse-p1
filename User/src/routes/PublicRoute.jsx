import { checkLocalstore } from "../helper/localstore/localstore";

import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    return !checkLocalstore("_userLogin") ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
