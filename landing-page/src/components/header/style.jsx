import styled from "styled-components";
import { media } from "../../components/styles/media.js";


const MenuStyled = styled.ul`
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 20;
  overflow: hidden;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-around;

  li {
    margin-right: 6%;
  }

  li:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
  }

  ${media.desktop`

    display: ${({ show }) => (show ? "block" : "none")};
    position: absolute;
    z-index: 4;
    background: ${({ theme }) => theme.second};
    top: 25px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding: 0;
    left: 45%;



    li {
      width: 100%;
    }

    li:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.primary};
    }


   `}
/* @media (max-width: 1460px) and (min-width: 993px) {
  font-size: 1.5;
} */

`;


const Imagem = styled.img`
  height: 40px;
  margin-right: 30px;
`;



const MenuIcon = styled.img`
  cursor: pointer;
  display: none;

  ${media.mobile`
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
    width: 24px;
    height: auto;
  `}

  ${media.tablet`
    display: block;
    position: absolute;
    top: 25px;
    right: 20px;
    width: 24px;
    height: auto;
  `}
`;

const CloseButton = styled.button`
display: none;

${media.desktop`
  display: ${({ hideOnLargeScreen }) => (hideOnLargeScreen ? "block" : "none")};
`}
`;

export {  MenuStyled, Imagem, MenuIcon, CloseButton };
