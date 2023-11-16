import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import airplane from '../airplane.png';
import cities from './cities';
import { createReservation } from '../../../redux/reservationSlice/reservationSlice';

const handleDate = (date, setForm, form) => {
  const reservationDate = new Date(date).toISOString().split('T')[0];
  const expiredDate = new Date(reservationDate);
  expiredDate.setDate(expiredDate.getDate() + 1);
  setForm({ ...form, date: reservationDate, expiration_date: expiredDate.toISOString().split('T')[0] });
};
const ReserveAirline = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const airlines = useSelector((state) => state.airlineReducer.airlines);
  const location = useLocation();
  const [airlineId, setAirlineId] = useState(location.state ? location.state.airlineId
    : undefined);
  const ref = useRef(null);
  const [form, setForm] = useState({
    airline_id: null, city: null, date: null, expiration_date: null,
  });
  const [error, setError] = useState('');
  useEffect(() => {
    setForm({ ...form, airline_id: airlineId });
    window.history.replaceState({}, document.title);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation({ form, navigate, setError }));
    setForm({
      airline_id: null, city: null, date: null, expiration_date: null,
    });
    setAirlineId(undefined);
    ref.current.reset();
  };
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const allowedDate = tomorrow.toISOString().split('T')[0];
  return (
    <section className="max-w-full font-['Repo'] relative flex-auto flex flex-col items-center justify-center
    bg-[#96bf01]"
    >
      <img
        src={airplane}
        alt="airplane"
        className="absolute left-[10%] right-[10%] w-[80%] h-[70%] top-[15%] bottom-[15%] opacity-[0.15]
      object-contain object-center z-0"
      />
      <h2 className="text-xl min-[230px]:text-2xl text-white z-10">Book your flight</h2>
      <hr className="w-[85%] min-[250px]:w-52 h-[1px] bg-white z-10 my-3" />
      <p className="mb-5 text-center leading-7 text-white z-10 text-xs min-[445px]:text-base">
        <span className="block">You can reserve to more than 4000 cities around the world.</span>
        <span className="block">There are lot of flights. Pick your seat now!</span>
      </p>
      <form
        onChange={(e) => {
          const key = e.target.name;
          const { value } = e.target;
          if (key === 'date') {
            handleDate(value, setForm, form);
            return;
          }
          setForm({ ...form, [key]: value });
        }}
        onFocus={() => setError('')}
        ref={ref}
        className="px-[2.5%] sm:px-0 z-10 flex flex-col gap-y-3 max-w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <select
          required
          name="city"
          className="cursor-pointer focus:cursor-default
        bg-[url('./container/components/reserveAirline/down-arrow.png')]
        bg-[center_right_2px] bg-no-repeat appearance-none outline-0 p-3 rounded-2xl bg-transparent text-white
        border border-white"
        >
          <option className="bg-none bg-[#96bf01]" value="" hidden>Select a city</option>
          {
        cities.map((city) => (
          <option className="bg-none bg-[#96bf01]" key={city.id} value={city.name}>
            {city.name}
          </option>
        ))
      }
        </select>
        <input
          required
          name="date"
          className="p-3 outline-0 rounded-2xl bg-transparent text-white border border-white"
          type="date"
          min={allowedDate}
        />
        <select
          value={form.airline_id || undefined}
          disabled={(airlineId === undefined) === false}
          required
          name="airline_id"
          className="cursor-pointer focus:cursor-default
        bg-[url('./container/components/reserveAirline/down-arrow.png')] bg-[center_right_2px] bg-no-repeat
        appearance-none outline-0 p-3 rounded-2xl bg-transparent text-white border border-white
        disabled:bg-none disabled:cursor-default disabled:text-white"
        >
          <option className="bg-none bg-[#96bf01]" value="" hidden>Select a flight</option>
          {
        airlines.map((airline) => (
          <option className="bg-none bg-[#96bf01]" key={airline.id} value={airline.id}>
            {
             airlineId ? `${airline.name} - selected` : `${airline.name}`
            }
          </option>
        ))
      }
        </select>
        <button type="submit" className="w-fit ml-auto py-3 px-9 mt-2 text-[#96bf01] bg-white rounded-3xl">
          Book now
        </button>
        { error && error.length > 0 && (
        <p className="absolute bottom-10 text-[#ff0000] font-semibold text-center
        max-[400px]:text-xs text-base"
        >
          { typeof error === 'string' ? error : error[0] }
        </p>
        ) }
      </form>
    </section>
  );
};

export default ReserveAirline;
