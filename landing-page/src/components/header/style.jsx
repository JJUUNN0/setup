import styled from "styled-components";
import { media } from "../../components/styles/media.js";

const All = styled.header`
  border-bottom: 1px solid #fff;
  background-color: ${({ theme }) => theme.second};
  width: 100%;
  position: fixed;
  z-index: 9999;

  ${media.desktop`
    width: 100%;
  `}

  ${media.mobile`
    width: 100vw;
  `}
`;

const Logo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding-right: 80%;
`;

const MenuStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 10%;
  overflow: hidden;
  font-size: 2.6rem;
  display: flex;
  justify-content: space-between;

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

const MenuContent = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.second};
  overflow: hidden;
  display: none;
  height: 40vh;

  ${media.desktop`
    display: flex;
    align-items: center;
    position: fixed;
  `}

  ${media.mobile`
    display: flex; /* Mostra o MenuContent apenas em telas de celular */
    align-items: center;
  `}
`;

const MenuIcon = styled.img`
  cursor: pointer;

  ${media.desktop`
    display: none; /* Esconde o MenuIcon em telas de desktop */
  `}

  ${media.mobile`
    display: block; /* Mostra o MenuIcon apenas em telas de celular */
    position: absolute; /* Define a posição absoluta */
    top: 25px; /* Alinha o ícone ao topo */
    right: 30px; /* Alinha o ícone à direita */
  `}
`;

export { Logo, All, MenuStyled, Imagem, MenuContent, MenuIcon };
