import { useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import staticAirlineList from '../staticAirlineList';
import airplane from '../airplane.png';
import cities from './cities';

const ReserveAirline = () => {
  const location = useLocation();
  const [airlineId, setAirlineId] = useState(location.state ? location.state.airlineId : undefined);
  const ref = useRef(null);
  const [form, setForm] = useState({ airlineId: null, city: null, date: null });
  useEffect(() => {
    setForm({ ...form, airlineId });
    return () => window.history.replaceState({}, document.title);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
    console.log('submit reservation');
    setForm({ airline: null, city: null, date: null });
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
          setForm({ ...form, [key]: value });
        }}
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
          value={form.airlineId || undefined}
          disabled={(airlineId === undefined) === false}
          required
          name="airlineId"
          className="cursor-pointer focus:cursor-default
        bg-[url('./container/components/reserveAirline/down-arrow.png')] bg-[center_right_2px] bg-no-repeat
        appearance-none outline-0 p-3 rounded-2xl bg-transparent text-white border border-white
        disabled:bg-none disabled:cursor-default disabled:text-white"
        >
          <option className="bg-none bg-[#96bf01]" value="" hidden>Select a flight</option>
          {
        staticAirlineList.map((airline) => (
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
      </form>
    </section>
  );
};

export default ReserveAirline;
