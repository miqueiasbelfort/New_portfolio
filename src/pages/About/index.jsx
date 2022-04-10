import Navbar from "../../components/Navbar"
import { Body } from "../Home/styele"
import {Main, AboutMe, Tecnologis, UserIcon, TecIcons} from "./style"

//icons
import {IoLogoJavascript, IoLogoHtml5, IoLogoCss3} from "react-icons/io"
import {GrReactjs, GrNode} from "react-icons/gr"
import {DiMongodb, DiGithubBadge} from "react-icons/di"
import {SiTypescript, SiJava, SiPython, SiPhp} from "react-icons/si"

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
                    Comecei a desenvolver como hobby em março de 2021, mas fui me apaixonando cada vez mais pela tecnologia, comecei com a linguagem Python, porém me foquei em desenvolvimento web com JS, HTML, CSS, React JS, Node JS, Axios entre outras. Hoje busco formas de trabalhar com aquilo que amo fazer.
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
                        <h1>Tecnologias que estudo:</h1>
                        <TecIcons>
                            <IoLogoJavascript/>
                            <GrReactjs/>
                            <GrNode/>
                            <DiMongodb/>
                            <SiTypescript/>
                        </TecIcons>
                   </div>
                   <div className="boxTec">
                        <h1>Tecnologias que tenho interesse:</h1>
                        <TecIcons>
                            <SiJava/>
                            <SiPython/>
                            <SiPhp/>
                        </TecIcons>
                   </div>
                </Tecnologis>
            </Main>
        </Body>
    )
}
export default About