import { useRef, useState } from 'react';
import { BiChevronRightCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import { createAirline } from '../../../redux/airlineSlice/airlineSlice';

const imageToBase64 = (img, setForm) => {
  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.onloadend = () => setForm((form) => ({ ...form, img_src: reader.result }));
};

const AddAirline = () => {
  const ref = useRef(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: null,
    img_src: null,
    description: null,
    fee: null,
    option_to_purchase: null,
    total_amount_payable: null,
    facebook: null,
    twitter: null,
    linkedin: null,
  });
  const [error, setError] = useState('');
  const [chars, setChars] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [imageName, setImageName] = useState('Select image');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="max-w-full relative font-['Repo'] flex-auto flex flex-col items-center
    bg-[#96bf01]"
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
          dispatch(createAirline({ form, navigate, setError }));
          ref.current.reset();
          setForm({
            name: null,
            img_src: null,
            description: null,
            fee: null,
            option_to_purchase: null,
            total_amount_payable: null,
            facebook: null,
            twitter: null,
            linkedin: null,
          });
          setTextareaValue('');
          setImageName('Select image');
          setChars(0);
        }}
        onInput={(e) => {
          const key = e.target.name;
          const value = e.target.files && e.target.files[0] ? e.target.files[0] : e.target.value;
          if (key === 'img_src' && typeof value === 'object') {
            imageToBase64(value, setForm);
            return;
          }
          setForm({ ...form, [key]: value });
        }}
        onFocus={() => setError('')}
        className="max-w-full flex-auto gap-y-3 w-full flex flex-col items-center overflow-hidden"
        ref={ref}
      >
        <Step1
          step={step}
          chars={chars}
          setChars={setChars}
          textareaValue={textareaValue}
          setTextareaValue={setTextareaValue}
          imageName={imageName}
          setImageName={setImageName}
        />
        <Step2 step={step} />
        { error.length > 0 && (
        <p className="absolute bottom-10 text-[#ff0000] font-semibold text-center
        max-[400px]:text-xs text-base"
        >
          { typeof error === 'string' ? error : error[0] }
        </p>
        ) }
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
