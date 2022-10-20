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

    .pagination {
        margin-top: 20px;
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
`;