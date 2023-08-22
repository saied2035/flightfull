import PropTypes from 'prop-types';

const PreviousArrow = ({ slide, setSlide }) => (
  <svg
    className={`${slide === 0 ? `pointer-events-none bg-transparent stroke-[#efefef] fill-[#efefef] border-none 
    min-[450px]:border min-[450px]:border-[#efefef] min-[450px]:bg-[#efefef] min-[450px]:stroke-white 
    min-[450px]:fill-white cursor-default` : `pointer-events-auto bg-transparent stroke-[#97bf0f] fill-[#97bf0f] 
    border-none min-[450px]:border min-[450px]:border-[#97bf0f] min-[450px]:bg-[#97bf0f] min-[450px]:stroke-white 
    min-[450px]:fill-white cursor-pointer`} max-[250px]:absolute left-0 top-[10%] max-[250px]:w-[48px] static 
    my-[10%] w-auto min-[450px]:w-[70px] min-[450px]:rounded-full min-[450px]:rounded-l`}
    height="64px"
    viewBox="0 0 50 50"
    onClick={() => setSlide(slide - 1)}
  >
    <path
      className="min-[450px]:translate-x-[50%] translate-x-0 translate-y-[25%]"
      d="M12.9268 18.8389C13.7351 19.5461 15 18.9721 15
      17.8982L15 6.10192C15 5.02797 13.7351 4.454 12.9268 5.1612L6.61617 10.683C5.81935 11.3802 5.81935 12.6198
      6.61617 13.317L12.9268 18.8389ZM13.5 17.3472L7.60393 12.1882C7.4901 12.0886 7.4901 11.9115 7.60393 11.8119L13.5
      6.65286L13.5 17.3472Z"
    />
  </svg>
);

PreviousArrow.propTypes = {
  slide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired,
};
export default PreviousArrow;
