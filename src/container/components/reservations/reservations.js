import { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Reservations = () => {
  const [reservantionSlide, setReservationSlide] = useState(0);
  const staticReservations = [
    {
      id: 1,
      airline: 'https://logos-download.com/wp-content/uploads/2016/03/Korean_Air_website_logotype.png',
      date: '2023-09-28',
      city: 'paris',
      price: 5000,
    },
    {
      id: 2,
      airline: 'https://logowik.com/content/uploads/images/541_qatarairways.jpg',
      date: '2023-09-31',
      city: 'cairo',
      price: 6000,
    },
  ];
  return (
    <section className="flex justify-center items-center flex-auto relative">
      <BsFillArrowLeftCircleFill
        size={25}
        className={`absolute left-3 hidden
      ${reservantionSlide === 0 ? 'cursor-default pointer-events-none fill-[#efefef]'
          : 'cursor-pointer pointer-events-auto fill-[#96bf01]'}`}
        onClick={() => setReservationSlide(reservantionSlide - 1)}
      />
      <ul className="w-full h-full flex md:flex-col flex-row items-center md:justify-center justify-start">
        <li className="flex md:flex-row flex-col md:w-[90%] w-auto md:h-auto h-[70%] md:mx-auto mx-0 md:border border-none bg-[#96bf01] text-white text-xl font-semibold">
          <span className="md:w-[35%] w-full md:h-auto h-[35%] md:mt-0  text-center md:border-r border-r-0 border-t flex items-center justify-center">Airline</span>
          <span className="md:w-[16.25%] w-full md:h-auto h-[16.25%] text-center md:border-r border-r-0 border-t flex items-center justify-center">City</span>
          <span className="md:w-[16.25%] w-full md:h-auto h-[16.25%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Date</span>
          <span className="md:w-[16.25%] w-full md:h-auto h-[16.25%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Price</span>
          <span className="md:w-[16.25%] w-full md:h-auto h-[16.25%] text-center flex items-center justify-center border-t border-b">Option</span>
        </li>
        {
      staticReservations.map((resrvation, i) => (
        reservantionSlide === i && (
        <li key={resrvation.id} className="animate-fade-in font-['Repo'] flex md:flex-row flex-col md:w-[90%] w-auto md:flex-initial flex-auto md:h-[20%] h-[70%] md:mx-auto mx-0 md:items-center items-start">
          <img
            className="md:w-[35%] w-full md:h-full h-[35%] text-center object-contain object-center md:border md:border-t-0 border-t p-2"
            src={resrvation.airline}
            alt="Airline pic"
          />

          <p className="md:w-[16.25%] w-full md:h-full h-[16.25%] md:border md:border-l-0 md:border-t-0 border-t flex items-center justify-center
          align-baseline"
          >
            {resrvation.city}
          </p>

          <p className="md:w-[16.25%] w-full md:h-full h-[16.25%] text-center md:border md:border-l-0 md:border-t-0 border-t flex items-center
          justify-center align-baseline"
          >
            {resrvation.date}
          </p>

          <p className="md:w-[16.25%] w-full md:h-full h-[16.25%] text-center md:border md:border-l-0 md:border-t-0 border-t flex items-center
          justify-center align-baseline"
          >
            $
            {resrvation.price}
          </p>

          <div className="md:w-[16.25%] w-full md:h-full h-[16.25%] flex items-center justify-center md:border-r md:border-b border-r-0 border-t border-b">
            <button
              type="button"
              className="text-center align-baseline bg-[#96bf01] text-white
            px-5 py-2 rounded-xl hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </li>
        )
      ))
      }
      </ul>
      <BsFillArrowRightCircleFill
        size={25}
        className={`absolute right-3 hidden
      ${reservantionSlide === staticReservations.length - 1
          ? 'cursor-default pointer-events-none fill-[#efefef]'
          : 'cursor-pointer pointer-events-auto fill-[#96bf01]'}`}
        onClick={() => setReservationSlide(reservantionSlide + 1)}
      />
    </section>
  );
};
export default Reservations;
