import styled from "styled-components";
import {FaRegUser} from "react-icons/fa" //User, github e instagram

export const Main = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    background: #1D1D1D;
    color: #FFFDF7;
    gap: 10px;
    @media (max-width: 768px){
        flex-direction: column;
        padding: 20px;
    }
`

export const AboutMe = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
   .title{
       display: flex;
       align-items: flex-end;
       gap: 10px;
   }
   .apresentation{
       font-size: 20px;
   }
   @media (max-width: 768px){
        width: 100%;
        margin-top: 20px;
        .apresentation{
             font-size: 16px;
        }
    }
`

export const Tecnologis = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    .boxTec{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-align: center;
    }
    @media (max-width: 768px){
        width: 100%;
        height: 250px;
        justify-content: center;
        padding: 20px 0;
        .boxTec{
            h1{
                font-size: 20px;
            }
        }
    }

`
export const TecIcons = styled.div`
    font-size: 20px;
    display: flex;
    gap: 10px;
`

export const UserIcon = styled(FaRegUser)`
    font-size: 70px;
    @media (max-width: 768px){
        font-size: 45px;
    }
`