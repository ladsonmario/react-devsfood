import { useRoutes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';
import { Profile } from '../pages/Profile';

export const Routes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/orders', element: <PrivateRoute><Orders /></PrivateRoute>},
        {path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute>}
    ]);
}