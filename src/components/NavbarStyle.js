import styled from "styled-components";


export const ContainerNavBar = styled.div`
    width: 90px;
    height: 100vh;
    background: #181818;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    .BoxNavbar{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-around;

        .logo{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

        img{
            width: 80%;
            border-radius: 50%;
        };
    }
    }
`

export const Icons = styled.div`
    font-size: 40px;
    color: #FFFDF7;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const RedesIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 18px;
`