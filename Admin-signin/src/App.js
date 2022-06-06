
import './App.css';
import { BrowserRouter as Router, Route, Navigate, useRoutes } from 'react-router-dom';
import SignIn from './component/Admin-signin/signin';
import Temporary from './component/Admin-signin/temporary';
import Administrator from './component/Admin-Administrator/administrator';
function App() {

  let routes = useRoutes([
    { path: "/", element: <Navigate to="/signin" replace /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/temporary', element: < Temporary/> },
    { path : '/administrator', element: <Administrator/>}
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}
export default AppWrapper;
