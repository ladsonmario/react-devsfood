import styled from "styled-components";

type ContainerType = {
    activeItem: boolean;
}
export const Container = styled.div<ContainerType>`
    width: 80px;
    height: 80px;
    background-color: ${props => props.activeItem ? '#fff' : '#aae09a'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    transition: all ease .3s;

    img {
        width: 55px;
        height: auto;
    }
`;