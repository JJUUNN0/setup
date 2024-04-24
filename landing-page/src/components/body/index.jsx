import PropTypes from 'prop-types';
import styled from "styled-components";

const Body = ({ title }) => {
  const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-image: url("https://media.gazetadopovo.com.br/2022/01/23113837/gazeta-do-povo-blog-concurseiros-uenp-pr-960x540.jpg");
  opacity: 0.8;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 40px;
  white-space: pre-line;
  background-color:  #f0ffff;
`;

  return (
    <>
      <Style>
        <Title>{title}</Title>
      </Style>
    </>
  );
}

Body.propTypes = {
  title: PropTypes.string.isRequired
};

export default Body;
