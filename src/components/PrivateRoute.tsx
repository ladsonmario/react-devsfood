import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/useAppSelector';

type Props = {
    children: JSX.Element;
}
export const PrivateRoute = ({ children }: Props) => {
    const token = useAppSelector(state => state.user.token);

    return (!token || token === '') ? <Navigate to="/login" /> : children;
}