import styled from "styled-components";
import {VscTools} from "react-icons/vsc"

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: #1D1D1D;
    color: #FFFDF7;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`
export const Icon = styled(VscTools)`
    font-size: 150px;
    @media (max-width: 768px){
        font-size: 45px;
    }
`
export const Title = styled.div`
    display: flex;
    align-items: end;
    gap: 20px;
    margin-bottom: 20px;
`

export const Projec = styled.li`
    width: 300px;
    font-size: 30px;
    img{
        width: 100%;
        margin-top: 10px;
    }
    @media (max-width: 768px){
        width: 200px;
    }
    p{
        font-size: 10px;
    }
`