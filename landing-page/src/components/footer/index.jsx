import PropTypes from 'prop-types';
import S from "./style";

const Footer = ({ title }) => {
  return (
    <>
      <S>
        <h1>{title}</h1>
      </S>
    </>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired
};

export default Footer;
