import { useRoutes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Orders } from '../pages/Orders';
import { Profile } from '../pages/Profile';
import { Register } from '../pages/Register';

export const Routes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/login', element: <Login />},
        {path: '/register', element: <Register />},
        {path: '/orders', element: <PrivateRoute><Orders /></PrivateRoute>},
        {path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute>}
    ]);
}