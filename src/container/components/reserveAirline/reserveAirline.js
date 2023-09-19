import { useState } from 'react';
import staticAirlineList from '../staticAirlineList';
import airplane from '../airplane.png';
import cities from './cities';

const ReserveAirline = () => {
  const [form, setForm] = useState({ airline: null, city: null, date: null });
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const allowedDate = tomorrow.toISOString().split('T')[0];
  return (
    <section className="font-['Repo'] relative flex-auto flex flex-col items-center justify-center bg-[#96bf01]">
      <img
        src={airplane}
        alt="airplane"
        className="absolute left-[10%] right-[10%] w-[80%] h-[70%] top-[15%] bottom-[15%] opacity-[0.15]
      object-contain object-center z-0"
      />
      <h2 className="text-2xl text-white z-10">Book your flight</h2>
      <hr className="w-52 h-[1px] bg-white z-10 my-3" />
      <p className="text-center leading-7 text-white z-10">
        <span className="block">You can reserve to more than 4000 cities around the world.</span>
        <span className="block">There are lot of flights. Pick your seat now!</span>
      </p>
      <form className="z-10 flex flex-col gap-y-1">
        <select className="cursor-pointer focus:cursor-default bg-[url('./container/components/reserveAirline/down-arrow.png')] bg-[center_right_2px] bg-no-repeat appearance-none outline-0 p-3 rounded-2xl bg-transparent text-white border border-white" onChange={(e) => setForm({ ...form, city: e.target.value })}>
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
          className="p-3 outline-0 rounded-2xl bg-transparent text-white border border-white"
          type="date"
          min={allowedDate}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <select className="cursor-pointer focus:cursor-default bg-[url('./container/components/reserveAirline/down-arrow.png')] bg-[center_right_2px] bg-no-repeat appearance-none outline-0 p-3 rounded-2xl bg-transparent text-white border border-white" onChange={(e) => setForm({ ...form, airline: e.target.value })}>
          <option className="bg-none bg-[#96bf01]" value="" hidden>Select a flight</option>
          {
        staticAirlineList.map((airline) => (
          <option className="bg-none bg-[#96bf01]" key={airline.id} value={airline.id}>
            {airline.name}
          </option>
        ))
      }
        </select>
      </form>
    </section>
  );
};

export default ReserveAirline;
