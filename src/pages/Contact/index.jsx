import Navbar from "../../components/Navbar"
import { Body } from "../Home/styele"
import {Main, Icon, Title, Input, InputMsg, ContaineInputs, Button} from "./style"

function Contact(){
    return (
        <Body>
            <Navbar />
            <Main>
                <Title>
                    <Icon/>
                    <h1>Entrar em contato!</h1>
                </Title>
                <form>
                    <ContaineInputs>
                        <label htmlFor="name">Nome:</label>
                        <Input type="text" className="name" id="name" placeholder="Ex: Lucas Silva"/>
                        <label htmlFor="reason">Motivo do contato:</label>
                        <Input type="text" className="reason" id="reason" placeholder="Ex: site para empresa"/>
                        <Button>Enviar</Button>
                    </ContaineInputs>
                    <ContaineInputs>
                        <label htmlFor="email">Email:</label>
                        <Input type="text" className="email" id="email" placeholder="Ex: lucas123@email.com"/>
                        <label htmlFor="mensage">Mensagem:</label>
                        <InputMsg type="text" className="mensage" id="mensage" placeholder="Ex: Quero criar um site para a empresa X"/>
                    </ContaineInputs>
                </form>
                <p>*Para agilizar, favor entrar em contato pelas redes social!</p>
            </Main>
        </Body>
    )
}
export default Contact