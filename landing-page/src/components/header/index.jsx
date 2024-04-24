import { useState } from "react";
import { MenuStyled, Imagem, MenuIcon, CloseButton } from "./style";
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
          <a href="https://uenp.edu.br/institucional" target="_blank"> A UENP</a>
        </li>
        <li>
          <a href="https://uenp.edu.br/sobre-graduacao/prograd-cursos-grad" target="_blank"> Cursos</a>
        </li>
        <li>
          <a href="https://uenp.edu.br/publicacoes-oficiais-uenp" target="_blank">Publicações</a>
        </li>
        <li>
          <a href="https://uenp.edu.br/contato" target="_blank"> Contato</a>
        </li>
        <a href="https://www.facebook.com/UENP.Oficial/" target="_blank">
          <Imagem src={facebookLogo} alt="imagem" />
        </a>
        <a href="https://www.instagram.com/uenp_oficial/" target="_blank">
          <Imagem src={instagramLogo} alt="imagem" />
        </a>
        {show && (
  <CloseButton
    id="x"
    hideOnLargeScreen
    onClick={closeMenu}
  >
    X
  </CloseButton>
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
