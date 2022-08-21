import "font-awesome/css/font-awesome.css";
import { Route, Routes } from "react-router-dom";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport";
// import CustomerNote from "./pages/CustomerNote/CustomerNote";
// import AgentInfo from "./pages/AgentInfo/AgentInfo";
// import AgentReport from "./pages/AgentReport/AgentReport";
import Administrator from "./pages/Administrator";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";
import TemporaryPassword from "./pages/SignIn/TemporaryPassword";
import CustomerNote from "./pages/CustomerSupport/CustomerNote/CustomerNote";
import AgentInfo from "./pages/CustomerSupport/AgentInfo/AgentInfo";
import AgentReport from "./pages/CustomerSupport/AgentReport/AgentReport";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Content from "./pages/Content";
import ContentDisplay from "./pages/Content/Pages/ContentDisplay";
import ContentEdit from "./pages/Content/Pages/ContentDisplay/components/ContentEdit";
import NewsView from "./pages/NewsView";
import CareerAddCat from "./pages/CareerAddCat";
import JobCategory from "./pages/Content/Pages/JobCategory";

const App = () => {
    return (
        <>
            <Routes>
                {/* private route */}
                <Route element={<PrivateRoute />}></Route>
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
                <Route path="/content" element={<Content />} />
                <Route path="/content/display" element={<ContentDisplay />} />
                <Route path="/content/edit" element={<ContentEdit />} />
                <Route path="/content/news/:id" element={<NewsView />} />
                <Route path="content/category/add" element={<CareerAddCat />} />
                <Route path="content/job" element={<JobCategory />} />
                {/* public route */}
                <Route element={<PublicRoute />}></Route>
                <Route path="/" element={<SignIn />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                    path="/temporary-password"
                    element={<TemporaryPassword />}
                />
            </Routes>
        </>
    );
};

export default App;
