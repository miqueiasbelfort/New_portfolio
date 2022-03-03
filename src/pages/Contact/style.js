import styled from "styled-components";
import {MdOutlineContactMail} from "react-icons/md"

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: #1D1D1D;
    color: #FFFDF7;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form{
        display: flex;
        gap: 20px;
    }
    p{
        margin-top: 10px;
        font-size: 10px;
    }
`

export const Icon = styled(MdOutlineContactMail)`
    font-size: 150px;
    @media (max-width: 768px){
        font-size: 45px;
    }
`
export const Title = styled.div`
    display: flex;
    align-items: end;
    h1{
        margin-bottom: 12px;
    }
    gap: 10px;
    margin-bottom: 20px;
    @media (max-width: 768px){
        h1{
            font-size: 20px;
            margin-bottom: 5px;
        }
    }
`

export const Input = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid #F46197;
    border-radius: 10px;
    background: none;
    outline: none;
    color: #FFFDF7;
    @media (max-width: 768px){
        width: 120px;
        padding: 7px;
    }
`
export const InputMsg = styled.textarea`
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #F46197;
    border-radius: 10px;
    background: none;
    outline: none;
    color: #FFFDF7;
    resize: none;
    @media (max-width: 768px){
        width: 120px;
    }
`

export const ContaineInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
`
export const Button = styled.button`
    padding: 15px;
    border-radius: 10px;
    background: none;
    color: #FFFDF7;
    border: 1px solid #F46197;
    cursor: pointer;
    transition: all .2s;
    font-size: 18px;

    &:hover{
        background: #F46197;
    }
    @media (max-width: 768px){
        width: 120px;
    }
`