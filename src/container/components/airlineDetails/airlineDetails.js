import { useLocation } from 'react-router-dom';

const AirlineDetails = () => {
  const { airline } = useLocation().state;
  const {
    name, imgSrc, fee, optionToPurchase, totalAmountPayable,
  } = airline;
  return (
    <section className="flex flex-auto items-center">
      <img className="flex-auto pl-8 h-[60%] object-contain object-left" src={imgSrc} alt="airline pic" />
      <aside className="min-h-[60%] pr-8">
        <p>{name}</p>
        <ul>
          <li>
            Finance fee $
            {fee}
          </li>
          <li>
            Option to purchase fee $
            {optionToPurchase}
          </li>
          <li>
            Total amount payable $
            {totalAmountPayable}
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default AirlineDetails;
