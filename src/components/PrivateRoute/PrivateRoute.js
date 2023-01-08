import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/auth_selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const redirect = !isLoggedIn && !isRefreshing;
  return redirect ? <Navigate to={redirectTo} /> : <Component />;
};
