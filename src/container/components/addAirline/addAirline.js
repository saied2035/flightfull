import { useState } from 'react';
import { BiChevronRightCircle } from 'react-icons/bi';
import Step1 from './step1/step1';
import Step2 from './step2/step2';

const AddAirline = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: null,
    image: null,
    description: null,
    fee: null,
    optionToPurchase: null,
    totalAmountPayable: null,
    facebook: null,
    twitter: null,
    linkedin: null,
  });
  return (
    <section className="max-w-full relative font-['Repo'] flex-auto flex flex-col items-center
    bg-[#96bf01] gap-y-3"
    >
      <h2 className="text-2xl 2xl:text-3xl text-center mt-5 text-white">Add Airline</h2>
      <hr className="sm:w-56 w-44 text-white bg-white" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step === 1) {
            setStep(2);
            return;
          }
          console.log('sending form', { form });
        }}
        onChange={(e) => {
          const key = e.target.name;
          const value = e.target.files && e.target.files[0] ? e.target.files[0] : e.target.value;
          setForm({ ...form, [key]: value });
        }}
        className="max-w-full flex-auto gap-y-3 w-full flex flex-col items-center overflow-hidden"
      >
        <Step1 step={step} />
        <Step2 step={step} />
        { step === 1 && (
        <button
          type="submit"
          className="flex mt-5 font-medium text-[#97bf0e] bg-white px-3 py-2 rounded-full absolute
        sm:bottom-4 sm:right-4 bottom-[-4px] right-[-1rem] sm:scale-100 2xl:scale-125 scale-[0.6]"
        >
          Next
          {' '}
          <BiChevronRightCircle size={20} className="self-center fill-[#97bf0e] ml-3 mt-[2px]" />
        </button>
        )}
        { step === 2 && (
        <button
          type="button"
          onClick={() => setStep(1)}
          className="flex mt-5 font-medium text-[#97bf0e] bg-white px-3 py-2 rounded-full absolute
          sm:bottom-4 sm:left-4 bottom-[-4px] left-[-1.2rem] sm:scale-100 2xl:scale-125 scale-[0.6]"
        >
          <BiChevronRightCircle
            size={20}
            className="self-center fill-[#97bf0e] mr-3 mt-[2px]
        rotate-[180deg]"
          />
          Back
        </button>
        )}
      </form>
    </section>
  );
};

export default AddAirline;
