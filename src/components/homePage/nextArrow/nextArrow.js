import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NextArrow = ({ slide, setSlide }) => {
  const [disabledNextArrow, setDisabledNextArrow] = useState(false);
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setDisabledNextArrow(true);
    } else {
      setDisabledNextArrow(false);
    }
  });
  useEffect(() => {
    const airlines = document.querySelectorAll('.airline');
    const lastAirline = airlines[airlines.length - 1];
    observer.observe(lastAirline);
  }, []);
  return (
    <svg
      className={`${disabledNextArrow ? `pointer-events-none bg-transparent stroke-[#efefef] fill-[#efefef] border-none 
    min-[450px]:border min-[450px]:border-[#efefef] min-[450px]:bg-[#efefef] min-[450px]:stroke-white 
    min-[450px]:fill-white cursor-default` : `pointer-events-auto bg-transparent stroke-[#97bf0f] fill-[#97bf0f] 
    border-none min-[450px]:border min-[450px]:border-[#97bf0f] min-[450px]:bg-[#97bf0f] min-[450px]:stroke-white 
    min-[450px]:fill-white cursor-pointer`} max-[250px]:absolute right-0 top-[10%] 
    max-[250px]:w-[48px] static my-[10%] w-auto min-[450px]:w-[70px] min-[450px]:rounded-full min-[450px]:rounded-r`}
      height="64px"
      viewBox="0 0 50 50"
      onClick={() => setSlide(slide + 1)}
    >
      <path
        className="min-[450px]:translate-x-[10%] translate-x-[50%] translate-y-[25%]"
        d="M11.0731 18.8389C10.2649 19.5461 9 18.9721 9 17.8982L9
      6.10192C9 5.02797 10.2649 4.454 11.0731 5.1612L17.3838 10.683C18.1806 11.3802 18.1806 12.6198 17.3838
      13.317L11.0731 18.8389ZM10.5 17.3472L16.396 12.1882C16.5099 12.0886 16.5099 11.9115 16.396 11.8119L10.5
      6.65286L10.5 17.3472Z"
      />
    </svg>
  );
};
NextArrow.propTypes = {
  slide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired,
};
export default NextArrow;
