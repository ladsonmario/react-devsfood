import { useState } from 'react';
import * as C from './styles';
import { ProductsType } from '../../../types/types';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setMinusQtProduct, setPlusQtProduct } from '../../../redux/reducers/cartReducer';

export const Cart = () => {
    const dispatch = useDispatch();
    const products: ProductsType[] = useAppSelector(state => state.cart.products);

    const [showBody, setShowBody] = useState<boolean>(false);

    const handleCartClick = () => {
        setShowBody(!showBody);
    }

    const handleMinusQt = (id: number) => {
        dispatch( setMinusQtProduct(id) );
    }

    const handlePlusQt = (id: number) => {
        dispatch( setPlusQtProduct(id) );
    }

    return (
        <C.CartArea show={showBody}>
            <div className="cart--header" onClick={handleCartClick}>
                <div className="cart--area">
                    <img src="/assets/cart.png" alt="" />
                    <div className="cart--text">Meu Carrinho ({products.length})</div>
                </div>     
                <img className="img--down" src="/assets/down.png" alt="" />           
            </div>
            <div className="cart--body">
            {products.length > 0 && products.map((item, index) => (
                <div className="cart--list--items">
                    <div className="cart--item"  key={index}>
                        <img src={item.image} className="item--img" alt="" />
                        <div className="item--name--price">
                            <span className="item--name">{item.name}</span>
                            <span className="item--price">R$ {(item.price * (item.qt as number)).toFixed(2)}</span>
                        </div>
                        <div className="item--qt">
                            <img src="/assets/minus.png" onClick={() => handleMinusQt(item.id)} alt="" />
                            <span>{item.qt}</span>
                            <img src="/assets/plus.png" onClick={() => handlePlusQt(item.id)} alt="" />
                        </div>
                    </div>        
                </div>
            ))}  
            </div>
        </C.CartArea>
    );
}