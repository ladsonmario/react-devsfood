import styled from 'styled-components';

type SearchAreaType = {
    widthInput: string;
}
export const SearchArea = styled.div<SearchAreaType>`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;  
    align-items: center; 
    
    img {
        height: 70px;
        width: auto;
    }

    input {        
        height: 50px;
        border-radius: 25px;
        border: 0;
        outline: 0;
        background-image: url('/assets/search.png');
        background-repeat: no-repeat;
        background-size: 30px;
        background-position: 10px center;
        padding-left: 50px;
        width: ${props =>  props.widthInput}px;
        cursor: ${props =>  props.widthInput === '0' ? 'pointer' : 'text'}; 
        transition: all ease .3s; 
        font-size: 18px;      
    }

    @media (max-width: 600px) {
        flex-direction: column;

        input {
            margin-top: 20px;
        }
    }
`;