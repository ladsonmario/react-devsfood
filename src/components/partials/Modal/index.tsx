import { Dispatch } from 'react';
import * as C from './styles';

type Props = {
    children: JSX.Element;
    status: boolean;
    setStatus: Dispatch<boolean>;
}
export const Modal = ({ children, status, setStatus }: Props) => {
    const handleCloseModal = (e: React.BaseSyntheticEvent) => {
        if(e.target.classList.contains('modal--bg')) {
            setStatus(false);
        }                
    }

    return (
        <C.ModalArea status={status} onClick={handleCloseModal} className="modal--bg">
            <div className="modal--body">{children}</div>
        </C.ModalArea>
    );
}