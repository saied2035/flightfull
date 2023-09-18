import airplane from '../airplane.png';
import cities from './cities';

const ReserveAirline = () => (
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
  </section>
);

export default ReserveAirline;
