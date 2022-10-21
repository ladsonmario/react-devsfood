import styled from 'styled-components';

type ModalAreaType = {
    status: boolean;
}
export const ModalArea = styled.div<ModalAreaType>`
    display: ${props => props.status ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;    

    .modal--body {        
        background-color: #fff;   
        border-radius: 20px;
        box-shadow: 0 0 50px #000;  
        max-height: 90vh;
        max-width: 100vw;
        overflow: auto;
        padding: 20px;
    }
`;