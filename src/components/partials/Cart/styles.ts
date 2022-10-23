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
                    width: 64px;
                    height: auto;
                    border-radius: 10px;
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
                        width: 12px;
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

        .address--area {
            margin: 15px;

            .address--title {
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 15px;
            }

            .address--container {
                display: flex;
                align-items: center;
                gap: 5px;

                .not--address {
                    font-size: 13px;
                }

                .address {
                    flex: 1;                    
                    font-size: 13px;

                   .work--or--house {
                       font-style: italic;                       
                   }
                }

                .edit--address {
                    width: 15px;
                    cursor: pointer;
                }
            }
        }
    }

    .modal--cart {
        color: #136713;

        .add--address {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        .input--conteiner {
            margin-bottom: 15px;            
        }

        .input--name {
            margin-bottom: 5px;
        }

        label {
            margin-right: 20px;
            font-size: 13px;
        }

        input[type="text"] {
            padding: 5px;
            border: 1px solid #080;
            border-radius: 5px;
            outline: 0;
            font-size: 16px;
        }

        button {
            border: 0;
            outline: 0;
            color: #fff;
            background-color: #073c07;
            box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
            cursor: pointer;
            border-radius: 5px;
            font-size: 20px;
            padding: 10px 20px;
            margin-top: 10px;
        }
        
        .cancel {
            font-size: 13px;
            padding: 8px 4px;
            margin-left: 15px;
        }
    }
`;