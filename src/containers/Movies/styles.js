import styled, { keyframes } from "styled-components";


const scale =keyframes`
from{
    transform: scale(0);
}
to{
    transform: scale(1);
    
}`

export const Backgroudd = styled.div`
background-image: url(${props =>props.img});
height: 100vh;
width: 100%;
background-size: cover;
position: relative;
background-position: center;
display: flex;
align-items: center;
justify-content: center;

&::before{
content: "";
position:absolute;
top: 0;
left: 0;
width: 100vw;
height:100vh;
background-color: rgba(0, 0, 0, 0.7);
}
&::after{
content: "";
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 60px;
background: linear-gradient(0deg,rgba(0,0,0, 1) 0%, rgba(237, 221, 83, 0) 100%);}
`
export const Containermovies = styled.div`

color: #ffffff;
display: flex;
align-items: center;
justify-content: space-around;
height: 100vh;
width: 1480px;
`
export const Info = styled.div`
z-index: 2;
display: flex;
gap: 15px;
flex-direction: column;
width: 700px;
h1{
font-weight: 700;
font-size: 3rem;
color: #ffffff;
}
p{
font-weight: 400;
font-size: 20px;
color: #ffffff;
margin-top:10px;
margin-bottom: 20px;

}
`
export const Poster = styled.div`
z-index: 1;
img{
width: 250px;
border-radius: 30px;
animation: ${scale} 1s linear;
}
`

export const Buttons = styled.div`
z-index: 2;
display: flex;
gap: 15px;
`