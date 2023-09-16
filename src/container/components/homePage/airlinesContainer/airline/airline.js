import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Airline = ({
  name, description, socialMedia, imgSrc, setIntersectionAirlines, index, slide, id, display, fee,
  optionToPurchase, totalAmountPayable,
}) => {
  const ref = useRef(null);
  const airlineObserver = new IntersectionObserver((entries) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting) {
      setIntersectionAirlines((oldArray) => [...oldArray.slice(0, index),
        entries[0], ...oldArray.slice(index + 1, oldArray.length)]);
    }
  });
  useEffect(() => {
    airlineObserver.observe(ref.current);
    return () => {
      setIntersectionAirlines(new Array(4).fill(null));
      airlineObserver.disconnect();
    };
  }, [slide]);
  return (
    <div
      ref={ref}
      className={`airline ${display} flex-col h-[24rem] overflow-hidden w-[80%] min-[900px]:w-[40%] 
    lg:w-[30%] flex-auto`}
    >

      <Link
        to={`/airlines/${id}`}
        className="h-[85%]"
        state={{
          slide,
          airline: {
            name,
            imgSrc,
            fee,
            optionToPurchase,
            totalAmountPayable,
          },
        }}
      >
        <img className="mx-auto w-40 min-[900px]:w-auto min-[900px]:max-w-[90%] object-contain object-center h-auto min-[900px]:h-[50%]" alt="Airline Pic" src={imgSrc} />
        <h2 className="text-center font-['Repo'] font-bold mt-2">{name}</h2>
        <hr className="border-0 border-b-2 border-dotted w-28 mx-auto mt-4 mb-4" />
        <p className="text-[#a9abaa] text-center font-semibold pb-2 text-sm">{description}</p>
      </Link>
      <ul className="flex gap-x-3 justify-center">
        {
socialMedia.map((link) => (
  <li key={link.name} className="group border p-3 border-[#e7e7e7] rounded-full scale-100 transition-all duration-500 hover:scale-125">
    <a target="_blank" className="w-full" href={link.url} rel="noreferrer">
      <link.image size={15} className="fill-[#d2d0d1] group-hover:fill-slate-500" />
    </a>
  </li>
))
}
      </ul>
    </div>
  );
};

Airline.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  optionToPurchase: PropTypes.number.isRequired,
  totalAmountPayable: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  slide: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
  setIntersectionAirlines: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Airline;
