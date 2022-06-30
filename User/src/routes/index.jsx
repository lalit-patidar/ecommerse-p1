import { Route, Routes } from "react-router-dom";
import Registration from "../pages/Authentication/Registration";
import SignIn from "../pages/Authentication/SignIn";
import SingleUseCode from "../pages/Authentication/SingleUseCode";
import TextATemporaryPassword from "../pages/Authentication/TextATemporaryPassword";
import VerifyItsYouEmail from "../pages/Authentication/VerifyItsYouEmail";
import VerifyItsYouPhone from "../pages/Authentication/VerifyItsYouPhone";
import HomePage from "../pages/HomePage";
import RecentlyViewedItems from "../pages/HomePage/RecentlyViewedItems";
import TodaysDeals from "../pages/HomePage/TodaysDeals";
import TextATemporaryPasswordMsg from "../pages/Messages/199";

const RootRoute = () => {
    return (
        <>
            <Routes>
                {/* 
                    HomePage > ./
                    HomePage > recently-viewed-items
                    HomePage > todays-deals
                */}
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/recently-viewed-items"
                    element={<RecentlyViewedItems />}
                />
                <Route path="/todays-deals" element={<TodaysDeals />} />
                {/* 
                    Authentication > registration
                    Authentication > signin
                    Authentication > single-use-code
                    Authentication > text-a-temporary-password
                    Messages > text-a-temporary-passwo-msg (199 page)
                    Authentication > verify-its-you-email
                */}
                <Route path="/registration" element={<Registration />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/text-a-temporary-password"
                    element={<TextATemporaryPassword />}
                />
                <Route path="/single-use-code" element={<SingleUseCode />} />
                <Route
                    path="/text-a-temporary-passwo-msg"
                    element={<TextATemporaryPasswordMsg />}
                />
                <Route
                    path="/text-a-temporary-passwo-msg"
                    element={<TextATemporaryPasswordMsg />}
                />
                <Route
                    path="/verify-its-you-email"
                    element={<VerifyItsYouEmail />}
                />
                <Route
                    path="/verify-its-you-phone"
                    element={<VerifyItsYouPhone />}
                />
            </Routes>
        </>
    );
};

export default RootRoute;
