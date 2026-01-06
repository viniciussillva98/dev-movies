
import styled from "styled-components";

export const ContainerHeader = styled.div`
z-index: 999;
position: fixed;
width: 100%;
top: 0;
display: flex;
padding: 20px 50px;
justify-content: space-between;
align-items: center;
background-color: ${props => props.$functionmudarbackground ? "black" : "transparent"};
transition: background-color 0.5s ease-in-out;

`
export const Ulmenu = styled.ul`
display: flex;
list-style: none;
gap: 50px;
`
export const Li = styled.li`
font-size: 20px;
font-weight: 500;
cursor: pointer;
position: relative;

a{
    text-decoration: none;
    color: aliceblue;
}

&::after{
    content:"";
    position: absolute;
    height: 3px;
    width: ${ props=>props.$isActive ? "100%" : 0 };
    background-color: #0ebdd8ff;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
}

&:hover::after{
    width: 100%;
}
`
