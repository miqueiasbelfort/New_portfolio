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
                        <Input type="text" className="name" id="name"/>
                        <label htmlFor="reason">Motivo do contato:</label>
                        <Input type="text" className="reason" id="reason"/>
                        <Button>Enviar</Button>
                    </ContaineInputs>
                    <ContaineInputs>
                        <label htmlFor="email">Email:</label>
                        <Input type="text" className="email" id="email"/>
                        <label htmlFor="mensage">Mensagem:</label>
                        <InputMsg type="text" className="mensage" id="mensage"/>
                    </ContaineInputs>
                </form>
            </Main>
        </Body>
    )
}
export default Contact