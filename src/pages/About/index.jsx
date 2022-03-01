import Navbar from "../../components/Navbar"
import { Body } from "../Home/styele"
import {Main, AboutMe, Tecnologis, UserIcon, TecIcons} from "./style"

//icons
import {IoLogoJavascript, IoLogoHtml5, IoLogoCss3} from "react-icons/io"
import {GrReactjs, GrNode} from "react-icons/gr"
import {DiMongodb, DiGithubBadge} from "react-icons/di"
import {SiTypescript, SiJava, SiPython} from "react-icons/si"

function About(){
    return (
        <Body>
            <Navbar />
            <Main>
                <AboutMe>
                    <div className="title">
                        <UserIcon/>
                        <h1>Sobre mim!</h1>
                    </div>
                    <p className="apresentation">
                        Conheci o mundo dev no começo de 2021, e no primeiro contato
                        com a programação eu me apaixonei por essas tecnologias e pela sua liberdade e capacidade que ela proporciona para fazer 
                        coisas incriveis.
                    </p>
                </AboutMe>
                <Tecnologis>
                   <div className="boxTec">
                        <h1>Tecnologias que uso:</h1>
                        <TecIcons>
                            <IoLogoJavascript/>
                            <IoLogoHtml5/>
                            <IoLogoCss3/>
                            <GrReactjs/>
                            <GrNode/>
                            <DiMongodb/>
                            <DiGithubBadge/>
                        </TecIcons>
                   </div>
                   <div className="boxTec">
                        <h1>Tecnologias que Estudo:</h1>
                        <TecIcons>
                            <IoLogoJavascript/>
                            <GrReactjs/>
                            <GrNode/>
                            <DiMongodb/>
                            <SiTypescript/>
                        </TecIcons>
                   </div>
                   <div className="boxTec">
                        <h1>Tecnologias que tenho enteresse:</h1>
                        <TecIcons>
                            <SiJava/>
                            <SiPython/>
                        </TecIcons>
                   </div>
                </Tecnologis>
            </Main>
        </Body>
    )
}
export default About