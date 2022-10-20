import * as C from './styles';
import { CategoriesType } from '../../types/types';

type Props = {
    title: string;
    data: CategoriesType;
    active: number;
    onclick: (id: number) => void;
}
export const GategoryItem = ({ data, active, title, onclick }: Props) => {
    const isActive = data.id === active;

    const handleClick = () => {
        onclick(data.id);
    }
    
    return (
        <C.Container activeItem={isActive} onClick={handleClick} data-tip={data.name} data-for="tip-top">
            <img src={data.image} alt="" title={title} />
        </C.Container>
    );
}