import { useState } from "react";
import { All, Logo, MenuContent, MenuIcon, MenuStyled, Imagem } from "./style";
import facebookLogo from "../../images/facebook.png";
import instagramLogo from "../../images/instagram.png";
import menu from "../../images/menu.png";
function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <All>
      <Logo>
        <h1>UENP</h1>
      </Logo>
      <MenuContent>
        <MenuIcon onClick={toggleMenu} src={menu} width="24px" />
      </MenuContent>
      <MenuStyled show={show}>
        <li>
          <a href="#us"> A UENP</a>
        </li>
        <li>
          <a href="#cursos"> Cursos</a>
        </li>
        <li>
          <a href="#programas">Programas</a>
        </li>
        <li>
          <a href="#contato"> Contato</a>
        </li>
        <Imagem src={facebookLogo} alt="imagem" />
        <Imagem src={instagramLogo} alt="imagem" />
      </MenuStyled>
    </All>
  );
}

export default (Header);
