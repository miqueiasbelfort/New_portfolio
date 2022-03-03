import Navbar from "../../components/Navbar"
import {Body, Main, Apresenatation,Image, Title, Button} from "./styele"
import ImgHome from "../../assents/webdevSite.svg"
import { Link } from "react-router-dom"

function Home(){
    return (
        <Body>
            <Navbar />
            <Main>
                <Apresenatation>
                    <Title>
                        Hey, <br />
                        Meu nome é, <br />
                        <span>Miqueias Belfort,</span> <br />
                        Web Developer.
                    </Title>
                    <span>
                        Front End Developer |   
                        <a className="freelas" href="https://www.99freelas.com.br/user/Belfort-17"
                        > Freelancer </a>
                    </span>
                    <Link to="/contact"><Button>Fale Comigo!</Button></Link>
                </Apresenatation>
                <div className="boxImage">
                    <Image src={ImgHome} alt="WEB DEV"/>
                </div>
            </Main>
        </Body>
    )
}
export default Home