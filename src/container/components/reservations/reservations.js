import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { BiChevronRightCircle } from 'react-icons/bi';
import { deleteReservation } from '../../../redux/reservationSlice/reservationSlice';

const Reservations = () => {
  const [reservantionSlide, setReservationSlide] = useState(0);
  const reservations = useSelector((state) => state.reservationReducer.reservations);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { length } = reservations;
  if (length === 0) {
    return (
      <section className="flex flex-col justify-center items-center flex-auto">
        <p className="text-center sm:text-2xl min-[240px]:text-base text-sm font-semibold">
          Rserve an airline to any place in the world
        </p>
        <Link
          to="/reservations/new"
          className="flex mt-5 font-medium text-white bg-[#97bf0e] px-3 py-2
        rounded-full"
        >
          Reserve
          {' '}
          <BiChevronRightCircle size={20} className="self-center fill-white ml-3 mt-[2px]" />
        </Link>
      </section>
    );
  }
  return (
    <section className="flex justify-center items-center flex-auto relative">
      <h2 className="font-['Repo'] absolute md:top-[10%] top-[4%] md:text-3xl text-2xl font-semibold">Reservations</h2>
      {
        length > 0 && (
        <>
          {length > 1 && (
          <BsFillArrowLeftCircleFill
            size={25}
            className={`absolute md:left-3 left-1 md:bottom-auto bottom-[9%]
      ${reservantionSlide === 0 ? 'cursor-default pointer-events-none fill-[#efefef]'
              : 'cursor-pointer pointer-events-auto fill-[#96bf01]'}`}
            onClick={() => setReservationSlide(reservantionSlide - 1)}
          />
          )}
          <ul
            className="w-full h-full flex md:flex-col flex-row items-center md:justify-center justify-start"
            onMouseOver={() => setError('')}
            onFocus={() => setError('')}
          >
            <li className="flex md:flex-row flex-col md:w-[90%] w-auto md:h-auto h-[70%] md:mx-auto mx-0 md:border border-none bg-[#96bf01] text-white sm:text-xl text-base font-semibold">
              <span className="md:w-[20%] w-full md:h-auto h-[20%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Airline</span>
              <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">City</span>
              <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Date</span>
              <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Price</span>
              <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Status</span>
              <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Option</span>
            </li>
            {
      reservations.map((resrvation, i) => {
        const expiredDate = new Date(resrvation.expiration_date);
        const currentDate = new Date();
        const status = expiredDate.getTime() > currentDate.getTime() ? 'Active' : 'Expired';
        return (
          reservantionSlide === i && (
          <li key={resrvation.id} className="animate-fade-in font-['Repo'] flex md:flex-row flex-col md:w-[90%] w-auto md:flex-initial flex-auto md:h-[20%] h-[70%] md:mx-auto mx-0 md:items-center items-start">
            <img
              className="md:w-[20%] w-full md:h-full h-[20%] text-center object-contain object-center md:border md:border-t-0 border-t md:border-r border-r p-2"
              src={resrvation.img_src}
              alt="Airline pic"
            />

            <p className="md:w-[16%] w-full md:h-full h-[16%] md:border md:border-l-0 md:border-t-0 border-t md:border-r border-r flex items-center justify-center
          align-baseline"
            >
              {resrvation.city[0].toUpperCase() + resrvation.city.slice(1)}
            </p>

            <p className="md:w-[16%] w-full md:h-full h-[16%] text-center md:border md:border-l-0 md:border-t-0 border-t md:border-r border-r flex items-center
          justify-center align-baseline"
            >
              {resrvation.date}
            </p>

            <p className="md:w-[16%] w-full md:h-full h-[16%] text-center md:border md:border-l-0 md:border-t-0 border-t md:border-r border-r flex items-center
          justify-center align-baseline"
            >
              $
              {resrvation.total_amount_payable}
            </p>

            <p className="md:w-[16%] w-full md:h-full h-[16%] text-center md:border md:border-l-0 md:border-t-0 border-t md:border-r border-r flex items-center
          justify-center align-baseline"
            >
              {status}
            </p>

            <div className="md:w-[16%] w-full md:h-full h-[16%] flex items-center justify-center md:border-t-0 md:border-r md:border-b border-r border-t border-b">
              <button
                type="button"
                onClick={() => dispatch(deleteReservation({
                  id: resrvation.id,
                  reservantionSlide,
                  setReservationSlide,
                  setError,
                }))}
                className="text-center align-baseline bg-[#96bf01] text-white
            px-5 py-2 rounded-xl hover:scale-105 active:scale-95"
              >
                {status === 'Active' ? 'Cancel' : 'Delete'}
              </button>
            </div>
          </li>
          )
        );
      })
      }
          </ul>
          { length > 1 && (
          <BsFillArrowRightCircleFill
            size={25}
            className={`absolute md:right-3 right-1 md:top-auto top-[9%]
      ${reservantionSlide === reservations.length - 1
              ? 'cursor-default pointer-events-none fill-[#efefef]'
              : 'cursor-pointer pointer-events-auto fill-[#96bf01]'}`}
            onClick={() => setReservationSlide(reservantionSlide + 1)}
          />
          )}
        </>
        )
      }
      { error.length > 0 && (
        <p className="absolute bottom-10 text-[#ff0000] font-semibold text-center
        max-[400px]:text-xs text-base"
        >
          { typeof error === 'string' ? error : error[0] }
        </p>
      ) }
    </section>
  );
};
export default Reservations;
