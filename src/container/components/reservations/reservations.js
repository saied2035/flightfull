import { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Reservations = () => {
  const [reservantionSlide, setReservationSlide] = useState(0);
  const staticReservations = [
    {
      id: 1,
      airline: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/967px-Emirates_logo.svg.png',
      date: '2023-09-28',
      city: 'paris',
      price: 5000,
    },
    {
      id: 2,
      airline: 'https://logowik.com/content/uploads/images/541_qatarairways.jpg',
      date: '2023-10-30',
      city: 'cairo',
      price: 6000,
    },
  ];
  return (
    <section className="flex justify-center items-center flex-auto relative">
      <h2 className="font-['Repo'] absolute md:top-[10%] top-[4%] md:text-3xl text-2xl font-semibold">Reservations</h2>
      <BsFillArrowLeftCircleFill
        size={25}
        className={`absolute md:left-3 left-1 md:bottom-auto bottom-[9%]
      ${reservantionSlide === 0 ? 'cursor-default pointer-events-none fill-[#efefef]'
          : 'cursor-pointer pointer-events-auto fill-[#96bf01]'}`}
        onClick={() => setReservationSlide(reservantionSlide - 1)}
      />
      <ul className="w-full h-full flex md:flex-col flex-row items-center md:justify-center justify-start">
        <li className="flex md:flex-row flex-col md:w-[90%] w-auto md:h-auto h-[70%] md:mx-auto mx-0 md:border border-none bg-[#96bf01] text-white sm:text-xl text-base font-semibold">
          <span className="md:w-[20%] w-full md:h-auto h-[20%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Airline</span>
          <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">City</span>
          <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Date</span>
          <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Price</span>
          <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Status</span>
          <span className="md:w-[16%] w-full md:h-auto h-[16%] text-center md:border-r border-r-0 border-t flex items-center justify-center">Option</span>
        </li>
        {
      staticReservations.map((resrvation, i) => {
        const reservationDate = new Date(resrvation.date);
        const expiredDate = new Date(reservationDate);
        expiredDate.setDate(expiredDate.getDate() + 1);
        const currentDate = new Date();
        const status = expiredDate.getTime() > currentDate.getTime() ? 'Active' : 'Expired';
        return (
          reservantionSlide === i && status && (
          <li key={resrvation.id} className="animate-fade-in font-['Repo'] flex md:flex-row flex-col md:w-[90%] w-auto md:flex-initial flex-auto md:h-[20%] h-[70%] md:mx-auto mx-0 md:items-center items-start">
            <img
              className="md:w-[20%] w-full md:h-full h-[20%] text-center object-contain object-center md:border md:border-t-0 border-t md:border-r border-r p-2"
              src={resrvation.airline}
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
              {resrvation.price}
            </p>

            <p className="md:w-[16%] w-full md:h-full h-[16%] text-center md:border md:border-l-0 md:border-t-0 border-t md:border-r border-r flex items-center
          justify-center align-baseline"
            >
              {status}
            </p>

            <div className="md:w-[16%] w-full md:h-full h-[16%] flex items-center justify-center md:border-t-0 md:border-r md:border-b border-r border-t border-b">
              <button
                type="button"
                onClick={() => console.log('API Request')}
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
      <BsFillArrowRightCircleFill
        size={25}
        className={`absolute md:right-3 right-1 md:top-auto top-[9%]
      ${reservantionSlide === staticReservations.length - 1
          ? 'cursor-default pointer-events-none fill-[#efefef]'
          : 'cursor-pointer pointer-events-auto fill-[#96bf01]'}`}
        onClick={() => setReservationSlide(reservantionSlide + 1)}
      />
    </section>
  );
};
export default Reservations;
