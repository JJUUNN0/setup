import PropTypes from 'prop-types';
import {Style, Title } from "./style";

const Body = ({ title }) => {
  return (
    <>
      <Style>
        <Title>{title}</Title>
      </Style>
    </>
  );
}

// Define o tipo da propriedade title como uma string
Body.propTypes = {
  title: PropTypes.string.isRequired
};

export default Body;
