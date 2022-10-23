import styled from 'styled-components';

export const LoginArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .login--container {
        max-width: 400px;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
        color: #136713;
        font-weight: bold;

        .title--area {

            .title--name {
                font-size: 22px;
                margin-bottom: 10px;
            }

            .title--bar {
                height: 4px;
                width: 100px;
                background-color: #136713;
            }
        }

        form {
            margin-top: 30px;

            .input--area {
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;
                
                input {                    
                    border: 1px solid #080;
                    border-radius: 5px;
                    outline: 0;
                    font-size: 16px;
                    height: 40px;
                    padding: 0 5px;                    
                }
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
        }

        .register--area {
            border-top: 1px solid #ddd;
            margin-top: 20px;
            padding-top: 20px;

            a {
                display: block;                          
                font-weight: normal;
                font-size: 18px;
                text-align: center; 
                text-decoration: none; 
                color: #1877f2;
                
                &:hover {
                    color: #073c07;
                    text-decoration: underline; 
                }

                &:visited {

                }
            }
        }        
    }
`;