import * as C from './styles';
import { Link, Location, useLocation } from 'react-router-dom';

export const Menu = () => {
    const location: Location = useLocation();
    let pathLocation = location.pathname;    

    return (
        <C.MenuArea>
            <Link to="/" className={pathLocation === '/' ? 'active' : ''} data-tip="Loja" data-for="tip-right">
                <img src="/assets/store.png" alt="" />
            </Link>
            <Link to="/orders" className={pathLocation === '/orders' ? 'active' : ''} data-tip="Pedidos" data-for="tip-right">
            <img src="/assets/order.png" alt="" />
            </Link>
            <Link to="/profile" className={pathLocation === '/profile' ? 'active' : ''} data-tip="Meu Perfil" data-for="tip-right">
                <img src="/assets/profile.png" alt="" />
            </Link>
        </C.MenuArea>
    );
}