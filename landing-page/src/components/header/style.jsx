import styled from "styled-components";
import { media } from "../../components/styles/media.js";


const MenuStyled = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-around;

  li {
    margin-right: 16%;
  }

  li:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
  }

  ${media.desktop`
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    z-index: 4;
    background: ${({ theme }) => theme.second};
    top: 40px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;

    li {
      width: 100%;
    }

    li:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.primary};
    }
  `}
`;

const Imagem = styled.img`
  height: 40px;
  margin-right: 30px;
`;



const MenuIcon = styled.img`
  cursor: pointer;
  display: none; /* Oculta o menu hamburger em dispositivos que não são móveis */

  ${media.mobile`
    display: block; /* Exibe o menu hamburger apenas em dispositivos móveis */
    position: absolute;
    top: 25px;
    right: 20px;
    width: 24px;
    height: auto;
  `}

  ${media.tablet`
    display: block; /* Exibe o menu hamburger apenas em dispositivos móveis */
    position: absolute;
    top: 25px;
    right: 20px;
    width: 24px;
    height: auto;
  `}
`;

export {  MenuStyled, Imagem, MenuIcon };
