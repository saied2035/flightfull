import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Step2 = ({ step }) => {
  useEffect(() => document.activeElement.blur(), [step]);
  return (
    <div className={`${step === 2 ? 'translate-x-0 max-h-none' : 'translate-x-[-100vw] max-h-0'} max-w-full flex flex-auto gap-y-3 w-full flex-col items-center`}>
      <fieldset className="flex flex-col items-center gap-3">
        <legend className="text-white text-xl text-center mb-4">Price Details</legend>
        <input
          className="max-w-full sm:w-auto w-full relative p-2 bg-transparent text-white border border-white
        rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
        placeholder:text-xs focus:placeholder:text-transparent focus:outline-0 sm:text-base 2xl:text-xl
        text-sm"
          type="number"
          name="fee"
          min={200}
          step={0.01}
          required={step === 2}
          placeholder="Fee"
        />
        <input
          className="max-w-full sm:w-auto w-full relative p-2 bg-transparent text-white border
        border-white rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
        placeholder:text-xs focus:placeholder:text-transparent focus:outline-0 sm:text-base 2xl:text-xl
        text-sm"
          type="number"
          min={200}
          step={0.01}
          required={step === 2}
          name="option_to_purchase"
          placeholder="Option to purchase"
        />
        <input
          className="max-w-full sm:w-auto w-full relative p-2 bg-transparent text-white border
        border-white rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
        placeholder:text-xs focus:placeholder:text-transparent focus:outline-0 sm:text-base 2xl:text-xl
        text-sm"
          type="number"
          min={200}
          step={0.01}
          required={step === 2}
          name="total_amount_payable"
          placeholder="Total amount payable"
        />
      </fieldset>
      <hr className="sm:w-56 w-44 text-white bg-white" />
      <fieldset className="max-w-full flex flex-col items-center gap-3">
        <legend className="text-white text-xl text-center mb-4">Social Media</legend>
        <input
          className="sm:w-auto w-[90%] p-2 pl-7 bg-transparent text-white border border-white
          bg-[url('./container/components/addAirline/facebook-app-symbol.png')] bg-[center_left_5px]
          bg-no-repeat bg-[length:18px_18px] rounded-2xl focus:outline-0"
          type="url"
          required={step === 2}
          name="facebook"
        />
        <input
          className="sm:w-auto w-[90%] p-2 pl-7 bg-transparent text-white border border-white rounded-2xl
          bg-[url('./container/components/addAirline/twitter.png')] bg-[center_left_5px]
          bg-no-repeat bg-[length:18px_18px] focus:outline-0"
          type="url"
          required={step === 2}
          name="twitter"
        />
        <input
          className="sm:w-auto w-[90%] p-2 pl-7 bg-transparent text-white border border-white rounded-2xl
          bg-[url('./container/components/addAirline/linkedin.png')] bg-[center_left_5px]
          bg-no-repeat bg-[length:18px_18px] focus:outline-0"
          type="url"
          required={step === 2}
          name="linkedin"
        />
      </fieldset>
      <button
        type="submit"
        className="font-medium text-[#97bf0e] bg-white px-5 rounded-full sm:scale-100
    2xl:scale-125 scale-90"
      >
        Finish
      </button>
    </div>
  );
};

Step2.propTypes = {
  step: PropTypes.number,
};

Step2.defaultProps = {
  step: 1,
};
export default Step2;
