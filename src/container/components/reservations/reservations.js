const Reservations = () => {
  const staticReservations = [
    {
      id: 1,
      airline: 'https://logos-download.com/wp-content/uploads/2016/03/Korean_Air_website_logotype.png',
      date: '2023-09-28',
      city: 'paris',
      price: 5000,
    },
  ];
  return (
    <ul className="flex-auto flex flex-col mt-2 items-center justify-center">
      <li className="flex w-[95%] mx-auto border bg-[#96bf01] text-white text-xl font-semibold">
        <span className="w-[20%] text-center border-r">Airline</span>
        <span className="w-[20%] text-center border-r">City</span>
        <span className="w-[20%] text-center border-r">Date</span>
        <span className="w-[20%] text-center border-r">Price</span>
        <span className="w-[20%] text-center">Option</span>
      </li>
      {
      staticReservations.map((resrvation) => (
        <li key={resrvation.id} className="font-['Repo'] flex w-[95%] h-[20%] mx-auto items-center">
          <img
            className="w-[20%] h-full text-center object-contain object-center border border-t-0 p-2"
            src={resrvation.airline}
            alt="Airline pic"
          />

          <p className="w-[20%] h-full border border-l-0 border-t-0 flex items-center justify-center
          align-baseline"
          >
            {resrvation.city}
          </p>

          <p className="w-[20%] h-full text-center border border-l-0 border-t-0 flex items-center
          justify-center align-baseline"
          >
            {resrvation.date}
          </p>

          <p className="w-[20%] h-full text-center border border-l-0 border-t-0 flex items-center
          justify-center align-baseline"
          >
            $
            {resrvation.price}
          </p>

          <div className="w-[20%] h-full flex items-center justify-center border-r border-b">
            <button
              type="button"
              className="text-center align-baseline border bg-[#96bf01] text-white
            px-5 py-2 rounded-xl hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
          </div>
        </li>
      ))
      }
    </ul>
  );
};
export default Reservations;
