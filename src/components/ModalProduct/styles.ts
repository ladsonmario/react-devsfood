import styled from "styled-components";

export const Container = styled.div`    
    width: 650px;
    
    .product--area {
        display: flex;

        img {
            width: 310px;
            height: auto;
            border-radius: 10px;
        }

        .product--info {            
            flex: 1;            
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #136713;
            margin-left: 15px; 

            .product--details {
                                           
                .product--name {
                    font-size: 20px;
                    font-weight: bold;
                }

                .product--ingredients {
                    font-size: 14px;
                }
            }
            .product--price--quantity {
                display: flex;
                justify-content: space-between;
                
                .product--quantity {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    background-color: #073c07;
                    border-radius: 5px;
                    padding: 5px;

                    span {
                        font-size: 24px;
                        font-weight: bold;
                        color: #fff;
                    }

                    img {
                        width: 25px;
                        height: auto;
                        cursor: pointer;
                    }
                }

                .product--price {
                    font-size: 30px;
                    font-weight: bold;
                }
            }
        }
    }

    .product--button {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 20px;
        margin-top: 20px;

        button {
            border: 0;
            outline: 0;
            color: #fff;
            background-color: #073c07;
            box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
            cursor: pointer;
            border-radius: 5px;
        }

        .button--cancel {
            font-size: 13px;
            padding: 5px 10px;
        }

        .button--add--cart {
            font-weight: bold;
            font-size: 22px;
            padding: 10px 20px;
        }
    }
`;