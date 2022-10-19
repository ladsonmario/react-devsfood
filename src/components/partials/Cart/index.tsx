import * as C from './styles';

export const Cart = () => {    

    return (
        <C.CartArea>
            <div className="cart--header">
                <img src="/assets/cart.png" alt="" />
                <div className="cart--text">Meu Carrinho (x)</div>
            </div>
            <div className="cart--body"></div>
        </C.CartArea>
    );
}