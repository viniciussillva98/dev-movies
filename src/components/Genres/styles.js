
import styled from "styled-components";

export const Container=styled.div`
display: flex;
gap: 10px;
margin-top: 30px;

span{

    color: #ffffff;
    background-color: #0f0f0f;
    border-radius: 30px;
    border: solid 2px #ffffff;
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;

 &:hover{
    background-color: #eeeeee;
    color: #0f0f0f;
 }
}

`
 