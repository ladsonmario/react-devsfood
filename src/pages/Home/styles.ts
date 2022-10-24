import styled from 'styled-components';

export const HomeArea = styled.div`
    width: 100%;    

    .categories {
        margin-top: 20px;
        
        span {
            color: #fff;
            font-size 18px;             
        }

        .list {
            display: flex;
            gap: 15px;
            margin-top: 10px; 
            flex-wrap: wrap;                       
        }
    }

    .products {
        margin-top: 20px;

        .list {
            display: grid;  
            gap: 15px;                                  
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .no--product {
        margin-top: 20px;
        font-size: 20px;
        color: #fff;
    }

    .pagination {
        margin-top: 30px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        .page--item {
            background-color: #fff;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 3px 6px rgba(0, 0, 0, .6);  
            border-radius: 5px;
        }

        .active {
            background-color: #aaa;
        }
    }

    @media (max-width: 1050px) {
        .products {
            .list {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    @media (max-width: 700px) {
        .categories {
            .list {
                justify-content: center;
            }
        }

        .products {
            .list {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
`;