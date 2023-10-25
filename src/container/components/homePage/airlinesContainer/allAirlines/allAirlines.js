import { useSelector } from 'react-redux';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useContext } from 'react';
import Airline from '../airline/airline';
import airlineSlideContext from '../../../contexts';

const AllAirlines = () => {
  const displayArr = ['flex', 'min-[900px]:flex hidden', 'min-[1140px]:flex hidden', '2xl:flex hidden'];
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const { length } = airlines;
  const { slide, setIntersectionAirlines } = useContext(airlineSlideContext);
  return (
    airlines.slice(slide, length).map((airline, index) => {
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

export default AllAirlines;
