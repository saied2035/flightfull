import PropTypes from 'prop-types';
import Airline from './airline/airline';

const AirlinesContainer = ({ slide, length, staticAirlineList }) => {
  const displayArr = ['flex', 'min-[900px]:flex hidden', 'lg:flex hidden', '2xl:flex hidden'];
  return (
    staticAirlineList.slice(slide, length).map((airline, index) => (
      <Airline
        display={index <= 3 ? displayArr[index] : 'hidden'}
        key={airline.name}
        name={airline.name}
        description={airline.description}
        imgSrc={airline.imgSrc}
        socialMedia={airline.socialMedia}
      />
    ))
  );
};
AirlinesContainer.propTypes = {
  slide: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  staticAirlineList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    socialMedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      image: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired).isRequired,
};
export default AirlinesContainer;
