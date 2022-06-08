import { useDispatch } from 'react-redux';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import { BrowserRouter as Router, Navigate, useRoutes } from 'react-router-dom';
import SignIn from './component/Admin-signin/signin';
import Temporary from './component/Admin-signin/temporary';
import Administrator from './component/Admin-Administrator/administrator';
import Category from './component/Admin-category/category';

function App() {

  let routes = useRoutes([
    { path: "/", element: <Navigate to="/signin" replace /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/temporary', element: < Temporary/> },
    { path : '/administrator', element: <Administrator/>},
    { path : '/category', element : <Category /> }
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
