import { Dispatch, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as C from './styles';
import { ProductsType } from '../../types/types';

type Props = {
    data: ProductsType;
    setStatus: Dispatch<boolean>;
}

export const ModalProduct = ({ data, setStatus }: Props) => { 
    const dispatch = useDispatch();

    const [qt, setQt] = useState<number>(1);

    useEffect(() => {
        setQt(1);
    }, [data]);
    
    const handleCloseModal = () => {
        setStatus(false);
    }

    const handleMinusQt = () => {
        if(qt > 1) {
            setQt(qt - 1);
        }
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }

    const handleAddToCart = () => {
        // juntar as informações
        // mandar para reducer
        // fechar o modal

        setStatus(false);
    }

    return (
        <C.Container>
            {data !== undefined &&
                <>
                    <div className="product--area">
                        <img src={data.image} alt="" />
                        <div className="product--info">
                            <div className="product--details">
                                <div className="product--name">{data.name}</div>
                                <div className="product--ingredients">{data.ingredients}</div>
                            </div>
                            <div className="product--price--quantity">
                                <div className="product--quantity">
                                    <img src="/assets/minus.png" alt="" onClick={handleMinusQt} />
                                    <span>{qt}</span>
                                    <img src="/assets/plus.png" alt="" onClick={handlePlusQt} />
                                </div>
                                <div className="product--price">R$ {(data.price * qt).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="product--button">
                        <button className="button--cancel" onClick={handleCloseModal}>Cancelar</button>
                        <button className="button--add--cart" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
                    </div>
                </>
            }    
            {data === undefined &&
                <div className="">Ocorreu algum erro, tente novamente mais tarde!</div>
            }        
        </C.Container>
    );
}