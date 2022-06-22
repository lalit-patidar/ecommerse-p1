import "font-awesome/css/font-awesome.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./component/Admin-signin/signin";
import Temporary from "./component/Admin-signin/temporary";
import Administrator from "./component/Admin-Administrator/administrator";
import Category from "./component/Admin-category/category";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport";
import CustomerNote from "./pages/CustomerNote/CustomerNote";
import AgentInfo from "./pages/AgentInfo/AgentInfo";
import AgentReport from "./pages/AgentReport/AgentReport";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/temporary-password" element={<Temporary />} />
                <Route path="/administrator" element={<Administrator />} />
                <Route path="/category" element={<Category />} />
                <Route path="/customer-support" element={<CustomerSupport />} />
                <Route
                    path="/customer-support-note"
                    element={<CustomerNote />}
                />
                <Route
                    path="/customer-support-agent-info"
                    element={<AgentInfo />}
                />
                <Route
                    path="/customer-support-agent-report"
                    element={<AgentReport />}
                />
            </Routes>
        </>
    );
};

export default App;
