
import styled,{keyframes}from "styled-components";

const scale = keyframes`
from{
    transform: scale(0)
}
to{
    transform: scale(1)
}
`

export const BackGround = styled.div`
background-image: url(${props=>props.image});
height: 50vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;

&::before{
    content: "";
    top: 0;
    left: 0;
    position:absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
}

&::after{

content: "";
position: absolute;
left: 0;
bottom: 0;
width: 100%;
height: 60px;
background: linear-gradient(0deg,rgba(0,0,0, 1) 0%, rgba(237, 221, 83, 0) 100%);
}
`
 export const Comtainer = styled.div`
display: flex;
gap: 50px;
justify-content:center;
align-items: flex-start;
height: 100%;
max-width: 1500px;
margin-top: -100px;
`


export const CoverPoster = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;
img{
    width: 250px;
    border-radius: 30px;
    animation: ${scale} 1s linear;
}
`
export const Info = styled.div`
padding: 20px;
width: 50%;
z-index: 99;
display:flex;
align-items: flex-start;
flex-direction: column;

h2{
    font-size: 50px;
    font-weight: 700;
    color: #ffffff;
}

p{
    font-weight: 600;
    color: #ffffff;
    margin: 20px 0 30px;
}
`
export const BackGroundMovies = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 20px;

h4{
color: #ffffff;
font-size: 20px;
font-weight: 600;
margin-bottom: 10px;
}

div{
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 20px 0;
max-width: 700px;
width: 100%;
height: 100%;
}

iframe{
    border: none;
}
`
