import Navbar from "../../components/Navbar"
import { Body } from "../Home/styele"
import {Main, Title, Icon, Projec, ListOfProjects} from "./style"
import PlussClass from "../../assents/PlussClass.svg"
import Caramelo from "../../assents/CarameloLogo.svg"

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
                    <ListOfProjects>
                        <Projec>
                            <a href="https://github.com/miqueiasbelfort/Pluss-Create">
                                <img src={PlussClass} alt="Pluss + Class" />
                            </a>
                            <p>Projeto feito em equipe - Onde professores podem criar teste onlines para os alunos</p>
                        </Projec>

                        <Projec>
                            <a href="https://github.com/miqueiasbelfort/Quiz">
                                <h3>QUIZ</h3>
                            </a>
                            <p>Quiz game simples - Esse jogo foi feito com HTML, CSS e JavaScript puro</p>
                        </Projec>

                        <Projec>
                            <a href="https://github.com/miqueiasbelfort/Caramelo">
                                <img src={Caramelo} alt="Caramelo" />
                            </a>
                            <p>Projeto pessoal onde empresas podem criar planos veterinarios para os pets</p>
                        </Projec>
                    </ListOfProjects>
                </div>
            </Main>
        </Body>
    )
}
export default Project