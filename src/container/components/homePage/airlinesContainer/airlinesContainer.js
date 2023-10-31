import { useContext } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import AllAirlines from './allAirlines/allAirlines';
import airlineSlideContext from '../../contexts';
import UserAirlines from './userAirlines/userAirlines';

const AirlinesContainer = () => {
  const displayArr = ['flex', 'min-[900px]:flex hidden', 'min-[1140px]:flex hidden', '2xl:flex hidden'];
  const {
    allTab, slide, setIntersectionAirlines, setSlide,
  } = useContext(airlineSlideContext);
  return (
    <>
      { allTab && (
      <AllAirlines
        displayArr={displayArr}
        slide={slide}
        setIntersectionAirlines={setIntersectionAirlines}
        setSlide={setSlide}
        FaFacebookF={FaFacebookF}
        FaLinkedinIn={FaLinkedinIn}
        FaTwitter={FaTwitter}
      />
      ) }
      {allTab === false && (
      <UserAirlines
        displayArr={displayArr}
        slide={slide}
        setIntersectionAirlines={setIntersectionAirlines}
        setSlide={setSlide}
        FaFacebookF={FaFacebookF}
        FaLinkedinIn={FaLinkedinIn}
        FaTwitter={FaTwitter}
      />
      )}
    </>
  );
};

export default AirlinesContainer;
