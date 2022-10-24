import { ChangeEvent, SyntheticEvent, useState } from 'react';
import * as C from './styles';
import { ProductsType, AddressType } from '../../../types/types';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setQtProduct, setAddress } from '../../../redux/reducers/cartReducer';
import { Modal } from '../Modal';

export const Cart = () => {
    const dispatch = useDispatch();
    const products: ProductsType[] = useAppSelector(state => state.cart.products);
    const address: AddressType = useAppSelector(state => state.cart.address);

    const [showBody, setShowBody] = useState<boolean>(false);
    const [modalStatus, setModalStatus] = useState<boolean>(false);
    const [workAndHouse, setWorkAndHouse] = useState<string>(address.workAndHouse);
    const [streetAndNumber, setStreetAndNumber] = useState<string>(address.streetAndNumber);
    const [cityStateZipcode, setCityStateZipcode] = useState<string>(address.cityStateZipcode);

    const handleWorkAndHouse = (value: string) => {
        setWorkAndHouse( value );
    }
    const handleStreetAndNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setStreetAndNumber( e.target.value );
    }
    const handleCityStateZipcode = (e: ChangeEvent<HTMLInputElement>) => {
        setCityStateZipcode( e.target.value );
    }

    const handleCartClick = () => {
        setShowBody(!showBody);
    }

    const handleQt = (id: number, typeQt: string) => {
        dispatch( setQtProduct({ id, typeQt }) );
    }  

    const handleEditAddress = () => {
        setModalStatus(true);
    }

    const handleCloseModal = () => {
        setModalStatus(false);
    }

    const handleGetAddress = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch( setAddress({ workAndHouse, streetAndNumber, cityStateZipcode }) );
        setModalStatus(false);
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
                {products.length > 0 &&
                    <div className="cart--list--items">
                        {products.map((item, index) => (
                            <div className="cart--item" key={index}>
                                <img src={item.image} className="item--img" alt="" />
                                <div className="item--name--price">
                                    <span className="item--name">{item.name}</span>
                                    <span className="item--price">R$ {(item.price * (item.qt as number)).toFixed(2)}</span>
                                </div>
                                <div className="item--qt">
                                    <img src="/assets/minus.png" onClick={() => handleQt(item.id, '-')} alt="" />
                                    <span>{item.qt}</span>
                                    <img src="/assets/plus.png" onClick={() => handleQt(item.id, '+')} alt="" />
                                </div>
                            </div> 
                        ))}       
                    </div>
                }  
                <div className="address--area">
                    <div className="address--title">Entrega</div> 
                        <div className="address--container">
                            {address.cityStateZipcode === undefined  &&
                                <div className="not--address">Você precisa inserir seu endereço, clique ao lado para editar!</div>
                            }
                            {address !== null &&
                                <div className="address">
                                    <div className="work--or--house">{address.workAndHouse}</div>
                                    <div className="street--and--number">{address.streetAndNumber}</div>
                                    <div className="city--state--zipcode">{address.cityStateZipcode}</div>
                                </div>
                            }
                            <img src="/assets/edit.png" className="edit--address" alt="" onClick={handleEditAddress}  />
                        </div>                                        
                </div>
            </div>
            <Modal status={modalStatus} setStatus={setModalStatus}>
                <form className="modal--cart" onSubmit={handleGetAddress}>
                    <div className="add--address">Adicionar/Editar Endereço</div>
                    <div className="input--conteiner">
                        <div className="input--name">Casa ou Trabalho?</div>
                        <input type="radio" name="work--or--house" id="house" onClick={() => handleWorkAndHouse("Minha Casa")} required />
                        <label htmlFor="house">Minha Casa</label>
                        <input type="radio" name="work--or--house" id="work" onClick={() => handleWorkAndHouse("Meu Trabalho")} required />
                        <label htmlFor="work">Meu Trabalho</label>
                    </div>
                    <div className="input--conteiner">
                        <div className="input--name">Rua e Número</div>
                        <input type="text" value={streetAndNumber} onChange={handleStreetAndNumber} required />                        
                    </div>
                    <div className="input--conteiner">
                        <div className="input--name">Cidade, Estado, CEP</div>
                        <input type="text" value={cityStateZipcode} onChange={handleCityStateZipcode} required />  
                    </div>
                    <button>Atualizar</button>
                    <button type="button" className="cancel" onClick={handleCloseModal}>Cancelar</button>
                </form>
            </Modal>
        </C.CartArea>
    );
}