import styled from "styled-components";
import { media } from "../../components/styles/media.js";

const All = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  width: 150px;
  padding-left: 30px;
`;

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

const MenuContent = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.second};
  overflow: hidden;
  display: none;
  height: 1vh;

  ${media.desktop`
    display: flex;
    align-items: center;
    position: fixed;
    justify-content: space-around;
  `}

  ${media.tablet`

  `}

  ${media.mobile`
    display: flex;
    align-items: end;
  `}
`;

const MenuIcon = styled.img`
  cursor: pointer;

  ${media.desktop`
  `}

  ${media.mobile`
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
    width: 24px;
    height: auto;
  `}
`;

export { Logo, All, MenuStyled, Imagem, MenuContent, MenuIcon };
