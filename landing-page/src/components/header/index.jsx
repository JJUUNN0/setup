import { useState } from "react";
import { MenuStyled, Imagem, MenuIcon } from "./style";
import facebookLogo from "../../images/facebook.png";
import instagramLogo from "../../images/instagram.png";
import menu from "../../images/menu.png";
function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
   <>
   <div id="fotoecabecalho" style={{display:'flex', alignItems: 'center'}}>

      <div>
        <h1>UENP</h1>
      </div>
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
        {show && (
          <button onClick={closeMenu}>X</button>
        )}
      </MenuStyled>
   </div>
      <div>
        < MenuIcon onClick={toggleMenu} src={menu} width="24px" />
      </div>
   </>



  );
}

export default (Header);
