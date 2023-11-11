import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BiChevronRightCircle } from 'react-icons/bi';
import Airline from '../airline/airline';

const UserAirlines = ({
  displayArr, slide, setIntersectionAirlines, setSlide, FaFacebookF, FaLinkedinIn, FaTwitter,
}) => {
  const userAirlines = useSelector((state) => state.airlineReducer.user_airlines);
  const { length } = userAirlines;
  if (length === 0) {
    return (
      <section className="flex flex-col justify-center items-center flex-auto">
        <p className="text-center sm:text-2xl min-[240px]:text-base text-sm font-semibold">
          Please add an airline you like
        </p>
        <Link
          to="/airlines/new"
          className="flex mt-5 font-medium text-white bg-[#97bf0e] px-3 py-2
        rounded-full"
        >
          Add airline
          {' '}
          <BiChevronRightCircle size={20} className="self-center fill-white ml-3 mt-[2px]" />
        </Link>
      </section>
    );
  }
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
