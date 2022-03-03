import styled from "styled-components";
import {FaRegUser} from "react-icons/fa" //User, github e instagram

export const Main = styled.div`
    width: 100%;
    display: flex;
    
    background: #1D1D1D;
    color: #FFFDF7;
    padding: 0 20px;

    @media (max-width: 768px){
        flex-direction: column;
        padding: 0;
        justify-content: center;
    }
`

export const AboutMe = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;

    .title{
        display: flex;
        align-items: end;
        gap: 10px;
        
        h1{
            font-size: 64px;
        }
    }
    .apresentation{
        font-size: 30px;
    }

    @media (max-width: 768px){
        width: 100%;
        padding: 7px;

        .title{
            h1{
                font-size: 25px;
            }
        }
        .apresentation{
            margin-top: 5px;
            font-size: 14px;
        }

    }
    @media (max-width: 999px){
        .title{
            h1{
                font-size: 34px;
            }
        }
    }
`

export const Tecnologis = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    align-items: center;

    .boxTec{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 768px){
        width: 100%;
        .boxTec{
            h1{
                font-size: 16px;
            }
            gap: 5px;
        }
    }

`
export const TecIcons = styled.div`
    font-size: 50px;
    display: flex;
    gap: 10px;

    @media (max-width: 999px){
        font-size: 20px;
    }
`

export const UserIcon = styled(FaRegUser)`
    font-size: 150px;
    @media (max-width: 768px){
        font-size: 60px;
    }
`