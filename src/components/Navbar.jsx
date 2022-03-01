import Logo from "../assents/logotipo.png"
import {ContainerNavBar, Icons, RedesIcons} from "./NavbarStyle"
import { Link } from "react-router-dom"

//Icons
import {FaRegUser, FaGithub, FaInstagram} from "react-icons/fa" //User, github e instagram
import {RiHome2Line, RiLinkedinFill} from "react-icons/ri" //Home and Linkedin
import {VscTools} from "react-icons/vsc" //Ferramentas
import {MdOutlineContactMail} from "react-icons/md" //Contato


function Navbar(){
    return (
        <ContainerNavBar>
            <div className="BoxNavbar">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <Icons>
                    <Link to="/"><RiHome2Line /></Link>
                    <Link to="/about"><FaRegUser /></Link>
                    <Link to="/projects"><VscTools/></Link>
                    <Link to="/contact"><MdOutlineContactMail /></Link>
                </Icons>
                <RedesIcons>
                    <a href="https://github.com/miqueiasbelfort"><FaGithub/></a>
                    <a href="https://www.instagram.com/miqueiasbelfort/"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/miqueias-belfort-6209ba209/"><RiLinkedinFill/></a>
                </RedesIcons>
            </div>
        </ContainerNavBar>
    )
}
export default Navbar