import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAirline } from '../../../../../redux/airlineSlice/airlineSlice';

const Airline = ({
  name, description, socialMedia, imgSrc, setIntersectionAirlines, index,
  slide, id, setSlide, ownerId, display, fee, optionToPurchase, totalAmountPayable,
}) => {
  const { pathname: previousPath } = useLocation();
  const userId = useSelector((state) => state.authReducer.user_id);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const airlineObserver = new IntersectionObserver((entries, observer) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting) {
      setIntersectionAirlines((oldArray) => [...oldArray.slice(0, index),
        entries[0], ...oldArray.slice(index + 1, oldArray.length)]);
    }
    observer.unobserve(entries[0].target);
  });
  useEffect(() => {
    airlineObserver.observe(ref.current);
  }, [index, window.innerWidth]);
  return (
    <div
      ref={ref}
      className={`airline ${display} flex-col overflow-hidden w-[80%] min-[900px]:w-[40%] 
    min-[1140px]:w-[30%] flex-auto`}
    >
      <Link
        to={`/airlines/${id}`}
        className="min-[900px]:h-[70%] h-auto"
        state={{
          previousPath,
          startSlide: slide,
          airlineId: id,
          airline: {
            name,
            imgSrc,
            fee,
            optionToPurchase,
            totalAmountPayable,
          },
        }}
      >
        <img className="mx-auto w-40 min-[900px]:w-auto min-[900px]:max-w-[90%] object-contain object-center h-auto min-[900px]:h-[40%]" alt="Airline Pic" src={imgSrc} />
        <h2 className="text-center font-['Repo'] font-bold mt-2">{name}</h2>
        <hr className="border-0 border-b-2 border-dotted w-28 mx-auto mt-4 mb-4" />
        <p className="text-[#a9abaa] text-center font-semibold text-sm">{description}</p>
      </Link>
      {userId === ownerId && (
      <aside className="flex flex-wrap gap-4 my-2 w-full items-center sm:text-base text-sm">
        <span className="text-center mx-auto">Created by you</span>
        <button
          type="button"
          className=" text-white bg-[#97bf0e] px-3 py-2 rounded-full mx-auto"
          onClick={() => dispatch(deleteAirline({ id, setSlide, slide }))}
        >
          Delete
        </button>
      </aside>
      )}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  optionToPurchase: PropTypes.number.isRequired,
  totalAmountPayable: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  slide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
  setIntersectionAirlines: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  ownerId: PropTypes.string,
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

Airline.defaultProps = {
  ownerId: undefined,
};
export default Airline;
