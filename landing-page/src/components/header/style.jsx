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
      margin-top: 10px
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
  margin-top:10px
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

  ${media.desktop`
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
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;


  ${media.desktop`
    display: ${({ hideOnLargeScreen }) => (hideOnLargeScreen ? "block" : "none")};
    margin-top: 10px
  `}

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }
`;

export {  MenuStyled, Imagem, MenuIcon, CloseButton };
