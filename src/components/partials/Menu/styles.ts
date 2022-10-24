import styled from 'styled-components';

export const MenuArea = styled.div`
    width: 80px;
    background-color: #136713;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 10px;
        width: 60px;
        height: 60px;

        img {
            width: 34px;
            height: auto;
        }
    }

    .active {
        background-color: #0b4d0b;
    }

    @media (max-width: 600px) {
        width: 60px;

        a {
            width: 40px;
            height: 40px;

            img {
                width: 24px;
            }
        }        
    }

`;