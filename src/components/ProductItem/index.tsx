import * as C from './styles';
import { ProductsType } from '../../types/types';

type Props = {
    data: ProductsType;
}

export const ProductItem = ({ data }: Props) => {    
    return (
        <C.Container>
            <img className="img--product" src={data.image} alt="" />
            <div className="info">
                <div className="info--name">{data.name}</div>
                <div className="info--price">R$ {data.price}</div>
                <div className="info--ingredients">{data.ingredients}</div>
            </div>
            <img className="next" src="/assets/next.png" alt="" />
        </C.Container>
    );
}