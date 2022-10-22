import styled from 'styled-components';

type CartAreaType = {
    show: boolean;
}

export const CartArea = styled.div<CartAreaType>`
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
        justify-content: space-between;     
        height: 50px;   
        cursor: pointer;
        padding: 0 10px; 
        
        .cart--area {
            display: flex;

            img {
                width: 23px;
                height: 23px;
                margin-right: 10px;
            }
    
            .cart--text {                
                font-size: 17px;
            }
        }

        .img--down {
            width: 23px;
            height: 23px;
            display: ${props => props.show ? 'block' : 'none'};
        }
    }

    .cart--body {
        display: ${props => props.show ? 'block' : 'none'};
        
        .cart--list--items {
            margin-top: 10px;

            .cart--item {
                margin: 15px;
                display: flex;
                align-items: center;
                gap: 5px;

                .item--img {
                    width: 60px;
                    height: auto;
                    border-radius: 5px;
                }

                .item--name--price {
                    display: flex;
                    flex-direction: column;
                    flex: 1;                    

                    .item--name {
                        font-size: 14px;
                        font-weight: bold;
                    }

                    .item--price {
                        font-size: 13px;
                    }
                }

                .item--qt {
                    display: flex; 
                    align-items: center;                   

                    img {
                        width: 10px;
                        height: auto;
                        cursor: pointer;
                    }

                    span {
                        font-weight: bold;
                        margin: 0 5px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;