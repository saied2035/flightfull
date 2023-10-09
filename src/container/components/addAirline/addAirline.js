import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BiChevronRightCircle } from 'react-icons/bi';

const AddAirline = () => {
  const [steps, setStep] = useState({ previousStep: 0, currentStep: 1, nextStep: 2 });
  console.log({ steps });
  const { pathname } = useLocation();
  useEffect(() => {
    const stepNumber = Number(pathname.replace(/[^0-9]/g, ''));
    if (stepNumber < 5 && stepNumber > 1) {
      setStep({
        previousStep: stepNumber - 1,
        currentStep: stepNumber,
        nextStep: stepNumber + 1,
      });
    }
  }, []);
  return (
    <section className="relative font-['Repo'] flex-auto flex flex-col items-center bg-[#96bf01] gap-y-3">
      <h2 className="text-2xl text-center mt-5 text-white">Add Airline</h2>
      <hr className="w-56 text-white bg-white" />
      <form className="gap-y-3 w-full flex flex-col items-center justify-center">
        <Outlet />
      </form>
      {steps.nextStep < 5 && (
      <Link
        to={`step${steps.nextStep}`}
        onClick={() => setStep({
          previousStep: steps.previousStep + 1,
          currentStep: steps.currentStep + 1,
          nextStep: steps.nextStep + 1,
        })}
        className={`${steps.currentStep === 4 ? 'pointer-events-none' : 'pointer-events-auto'} flex mt-5 font-medium text-[#97bf0e] bg-white px-3 py-2 rounded-full absolute bottom-4 right-4`}
      >
        Next
        {' '}
        <BiChevronRightCircle size={20} className="self-center fill-[#97bf0e] ml-3 mt-[2px]" />
      </Link>
      )}
      {steps.previousStep > 0 && (
      <Link
        to={`step${steps.previousStep}`}
        onClick={() => setStep({
          previousStep: steps.previousStep - 1,
          currentStep: steps.currentStep - 1,
          nextStep: steps.nextStep - 1,
        })}
        className={`${steps.currentStep === 1 ? 'pointer-events-none' : 'pointer-events-auto'} flex mt-5 font-medium text-[#97bf0e] bg-white px-3 py-2 rounded-full absolute bottom-4 left-4`}
      >
        <BiChevronRightCircle size={20} className="self-center fill-[#97bf0e] mr-3 mt-[2px] rotate-[180deg]" />
        Back
      </Link>
      )}
    </section>
  );
};

export default AddAirline;

{ /* <input
          className="p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
          type="text"
          placeholder="Airline Name"
        />
        <hr className="w-56 text-white bg-white" />
        <fieldset className="flex flex-wrap justify-center items-center gap-3">
          <legend className="text-white text-xl text-center mb-4">Price Details</legend>
          <input
            className="w-[30%] p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
            type="number"
            min={200}
            step={0.01}
            placeholder="Fee"
          />
          <input
            className="w-[30%] p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
            type="number"
            min={200}
            step={0.01}
            placeholder="Option to purchase"
          />
          <input
            className="w-[30%] p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
            type="number"
            min={200}
            step={0.01}
            placeholder="Total amount payable"
          />
        </fieldset>
        <hr className="w-56 text-white bg-white" />
        <fieldset className="flex md:flex-row flex-col flex-wrap justify-center items-center gap-3">
          <legend className="text-white text-xl text-center mb-4">Social Media</legend>
          <input
            className="p-2 pl-7 bg-transparent text-white border border-white
            bg-[url('./container/components/addAirline/facebook-app-symbol.png')] bg-[center_left_5px]
          bg-no-repeat bg-[length:18px_18px] rounded-2xl focus:outline-0"
            type="url"
          />
          <input
            className="p-2 pl-7 bg-transparent text-white border border-white rounded-2xl
            focus:outline-0
          bg-[url('./container/components/addAirline/twitter.png')] bg-[center_left_5px]
          bg-no-repeat bg-[length:18px_18px]"
            type="url"
          />
          <input
            className="p-2 pl-7 bg-transparent text-white border border-white rounded-2xl
           focus:outline-0
          bg-[url('./container/components/addAirline/linkedin.png')] bg-[center_left_5px]
          bg-no-repeat bg-[length:18px_18px]"
            type="url"
          />
        </fieldset>
        <fieldset className="flex-auto relative md:w-[30%] md:my-7 w-full my-2">
          <textarea
            className="md:w-full w-[90%] mx-[5%] md:h-[20vh] h-full bg-transparent border focus:placeholder:text-transparent
          focus:outline-0 placeholder:text-white placeholder:text-sm border-white rounded-2xl
          text-white p-2 resize-none"
            maxLength={150}
            value={textareaValue}
            onChange={(e) => {
              if (/\s\s/.test(e.target.value)) {
                return;
              }
              setTextareaValue(e.target.value);
              setChars(e.target.value.length);
            }}
            placeholder="Write the description here..."
          />
          <span className="absolute md:bottom-[-1.1rem] md:right-0 bottom-auto top-[-1.6rem] right-[5%] text-white">{`${chars}/150`}</span>
        </fieldset> */ }
