import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    justify-content: space-between;  
    border-radius: 5px;  
    box-shadow: 0 3px 6px rgba(0, 0, 0, .6);  
    cursor: pointer;  

    .img--product {
        border-radius: 10px;
        width: 100px;
        height: auto;
    }

    .info {
        display: flex;
        flex: 1;      
        flex-direction: column; 
        margin: 0 10px;  
        color: #136713;

        .info--name {
            font-size: 20px;
            font-weight: bold;
        }
        .info--price {
            font-size: 14px;
        }
        .info--ingredients {
            font-size: 11px;
        }
    }

    .next {
        height: 20px;
        width: auto;
    }

    @media (max-width: 600px) {
        padding: 10px;
    }
`;