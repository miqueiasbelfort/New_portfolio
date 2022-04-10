import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: hidden;
`

export const Main = styled.div`
    width: 100%;
    display: flex;
    background: #1D1D1D;
    color: #FFFDF7;

    .boxImage{
        height: 100vh;
    }

    @media (max-width: 999px){
        .boxImage{
            display: none;
        }
    }
`

export const Apresenatation = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    justify-content: center;
    padding: 10px 25px;
`

export const Image = styled.img`
    height: 100%;
`

export const Title = styled.h1`
    font-size: 64px;
    span{
        color: #F46197;
    }
    @media (max-width: 767px){
        font-size: 34px;
    }
`
export const Button = styled.button`
    margin-top: 10px;
    width: 220px;
    height: 55px;
    background: none;
    border: 2px solid #F46197;
    border-radius: 10px;
    color: #FFFDF7;
    cursor: pointer;
    font-size: 18px;
    transition: ease .2s;
    
    &:hover{
        width: 230px;
        background: #F46197;
    }
`