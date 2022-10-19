import styled from 'styled-components';

export const CartArea = styled.div`
    position: fixed;
    bottom: 0;
    right: 30px;
    width: 290px;
    background-color: #136713;
    border-radius: 10px 10px 0 0;
    color: #fff;

    .cart--header {
        display: flex; 
        align-items: center;       
        height: 50px;   
        cursor: pointer;
        padding: 0 10px;     

        img {
            width: 23px;
            height: 23px;
            margin-right: 10px;
        }

        .cart--text {
            font-size: 17px;
        }
    }
`;