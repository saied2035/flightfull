import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Airline from '../airline/airline';

const UserAirlines = ({
  displayArr, slide, setIntersectionAirlines, setSlide, FaFacebookF, FaLinkedinIn, FaTwitter,
}) => {
  const userAirlines = useSelector((state) => state.airlineReducer.user_airlines);
  const { length } = userAirlines;
  return (
    userAirlines.slice(slide, length).map((airline, index) => {
      const socialMedia = [
        { url: airline.facebook, image: FaFacebookF, name: 'facebook' },
        { url: airline.twitter, image: FaTwitter, name: 'twitter' },
        { url: airline.linkedin, image: FaLinkedinIn, name: 'linkedin' },
      ];
      return (
        <Airline
          key={airline.id}
          id={airline.id}
          slide={slide}
          setSlide={setSlide}
          ownerId={airline.user_id}
          index={index}
          setIntersectionAirlines={setIntersectionAirlines}
          name={airline.name}
          description={airline.description}
          display={index <= 3 ? displayArr[index] : 'hidden'}
          imgSrc={airline.img_src}
          fee={airline.fee}
          optionToPurchase={airline.option_to_purchase}
          totalAmountPayable={airline.total_amount_payable}
          socialMedia={socialMedia}
        />
      );
    })
  );
};

UserAirlines.propTypes = {
  displayArr: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  slide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired,
  setIntersectionAirlines: PropTypes.func.isRequired,
  FaFacebookF: PropTypes.func.isRequired,
  FaLinkedinIn: PropTypes.func.isRequired,
  FaTwitter: PropTypes.func.isRequired,
};

export default UserAirlines;
