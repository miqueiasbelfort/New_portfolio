import Navbar from "../../components/Navbar"
import { Body } from "../Home/styele"
import {Main, Title, Icon, Projec} from "./style"
import PlussClass from "../../assents/PlussClass.svg"

function Project(){
    return (
        <Body>
            <Navbar/>
            <Main>
                <Title>
                    <Icon/>
                    <h1>Meus Projetos</h1>
                </Title>
                <div>
                    <h2>Principais:</h2>
                    <ul>
                        <Projec>
                            <a href="https://github.com/miqueiasbelfort/Pluss-Create">
                                <img src={PlussClass} alt="Pluss + Class" />
                            </a>
                            <p>*projeto ainda em desenvolvimento</p>
                        </Projec>
                    </ul>
                </div>
            </Main>
        </Body>
    )
}
export default Project