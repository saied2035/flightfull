import { useLocation, Link } from 'react-router-dom';
import { BiChevronRightCircle } from 'react-icons/bi';

const AirlineDetails = () => {
  const { airline, airlineId } = useLocation().state;
  const {
    name, imgSrc, fee, optionToPurchase, totalAmountPayable,
  } = airline;
  return (
    <section className="relative flex flex-auto flex-col sm:flex-row items-center justify-center sm:justify-start gap-3">
      <img className="flex-initial sm:flex-auto pl-0 mx-auto sm:mx-0 sm:pl-10 h-auto max-h-[40vh] sm:max-h-fit sm:h-[70%] w-auto sm:w-[55%] md:w-[60%] min-[900px]:w-[60%] lg:w-[65%] xl:w-[75%] object-contain object-center sm:object-[50%_30%]" src={imgSrc} alt="airline pic" />
      <aside className="flex flex-col min-h-fit sm:min-h-[70%] mx-0 sm:mx-auto pl-0 pr-0 min-[250px]:pr-3 min-[250px]:pl-3 sm:pl-0 w-full sm:w-[45%] md:w-[40%] min-[900px]:w-[40%] lg:w-[35%] xl:w-[25%]">
        <p className="font-['Repo'] text-base font-bold sm:text-xl mb-5 text-right">{name}</p>
        <ul className="w-full">
          <li className="bg-[#e2e3e5] py-2 px-2 sm:px-5 w-full">
            <p className="flex justify-between font-[400] w-full text-xs min-[250px]:text-sm sm:text-base">
              <span className="flex-auto">
                Finance fee
              </span>
              <span>
                $
                {fee}
              </span>
            </p>
          </li>
          <li className="py-2 px-2 sm:px-5 w-full">
            <p className="flex justify-between font-[400] w-full text-xs min-[250px]:text-sm sm:text-base">
              <span className="flex-auto">
                Option to purchase fee
              </span>
              <span>
                $
                {optionToPurchase}
              </span>
            </p>
          </li>
          <li className="bg-[#e2e3e5] py-2 px-2 sm:px-5 w-full text-xs min-[250px]:text-sm sm:text-base">
            <p className="flex justify-between font-[400] w-full">
              <span className="flex-auto">
                Total amount payable
              </span>
              <span>
                $
                {totalAmountPayable}
              </span>
            </p>
          </li>
        </ul>
        <Link to="/reservations/new" state={{ airlineId }} className="flex mt-5 sm:mt-auto ml-auto font-medium text-white bg-[#97bf0e] px-3 py-2 rounded-full">
          Reserve
          {' '}
          <BiChevronRightCircle size={20} className="self-center fill-white ml-3 mt-[2px]" />
        </Link>
      </aside>
      <Link to="/airlines">
        <svg
          className="absolute bottom-5 left-0 pointer-events-auto border border-[#97bf0f] bg-[#97bf0f] stroke-white
        fill-white cursor-pointer rounded-full rounded-l w-[60px] sm:w-[75px]"
          height="50"
          viewBox="0 0 50 50"
        >
          <path
            className="translate-x-[50%] translate-y-[25%]"
            d="M12.9268 18.8389C13.7351 19.5461 15 18.9721 15
      17.8982L15 6.10192C15 5.02797 13.7351 4.454 12.9268 5.1612L6.61617 10.683C5.81935 11.3802 5.81935 12.6198
      6.61617 13.317L12.9268 18.8389ZM13.5 17.3472L7.60393 12.1882C7.4901 12.0886 7.4901 11.9115 7.60393 11.8119L13.5
      6.65286L13.5 17.3472Z"
          />
        </svg>
      </Link>
    </section>
  );
};

export default AirlineDetails;
