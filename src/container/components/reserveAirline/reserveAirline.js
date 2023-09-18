import airplane from '../airplane.png';

const ReserveAirline = () => (
  <section className="relative flex-auto bg-[#96bf01]">
    <img
      src={airplane}
      alt="airplane"
      className="absolute left-[10%] right-[10%] w-[80%] h-[70%] top-[15%] bottom-[15%] opacity-[0.15]
    object-contain object-center"
    />
  </section>
);

export default ReserveAirline;
