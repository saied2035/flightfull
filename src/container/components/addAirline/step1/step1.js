import PropTypes from 'prop-types';
import { useState } from 'react';
import { SlClose } from 'react-icons/sl';

const Step1 = ({ step }) => {
  const [chars, setChars] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [imageName, setImageName] = useState('Select image');
  return (
    <div className={`${step === 1 ? 'translate-x-0 max-h-none' : 'translate-x-[-100vw] max-h-0'} flex max-w-full flex-auto gap-y-3 w-full flex-col items-center`}>
      <h2 className="text-white sm:text-xl 2xl:text-2xl text-base text-center mb-4">General Details</h2>
      <input
        className="max-w-[95%] p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base placeholder:text-xs focus:placeholder:text-transparent focus:outline-0
          sm:text-base 2xl:text-xl text-sm"
        type="text"
        name="name"
        placeholder="Airline Name"
        required={step === 1}
      />
      <fieldset className="max-w-[95%] flex justify-center items-center flex-col sm:flex-row gap-3">
        <input
          id="select-image-url"
          className="max-w-full sm:w-auto w-full relative p-2 bg-transparent text-white border border-white rounded-2xl
            placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base placeholder:text-xs focus:placeholder:text-transparent focus:outline-0
            sm:text-base 2xl:text-xl text-sm"
          type="url"
          name="image"
          placeholder="Image url"
          required={imageName === 'Select image' && step === 1}
          onChange={() => {
            setImageName('Select image');
            document.querySelector('#select-image').value = null;
          }}
        />
        <span className="sm:text-xl 2xl:text-2xl text-base text-white">or</span>
        <input
          id="select-image"
          className="hidden"
          type="file"
          accept="image/*"
          name="image"
          required={((imageName === 'Select image') === false) && step === 1}
          onChange={(e) => setImageName(e.target.value.substring(12) || 'Select image')}
        />
        <button
          type="button"
          className="relative py-3 px-6 text-[#97bf0e] bg-white rounded-xl
          overflow-hidden tracking-wider sm:text-base 2xl:text-xl text-xs"
          onClick={() => {
            setImageName('Select image');
            document.querySelector('#select-image-url').value = null;
            document.querySelector('#select-image').click();
          }}
        >
          <SlClose
            size={18}
            className={`absolute top-1 right-1 ${imageName === 'Select image' ? 'pointer-events-none' : 'pointer-events-auto'}`}
            onClick={(e) => {
              setImageName('Select image');
              const imageFile = document.querySelector('#select-image');
              imageFile.value = null;
              imageFile.dispatchEvent(new Event('change', { bubbles: true }));
              e.stopPropagation();
            }}
          />
          {imageName}
        </button>
      </fieldset>
      <fieldset
        className="flex-auto flex relative sm:w-[70%] w-full"
        required
      >
        <textarea
          className="sm:w-full w-[95%] sm:mx-0 mx-auto h-[60%] bg-transparent border focus:placeholder:text-transparent
          focus:outline-0 placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base min-[300px]:placeholder:text-xs
          placeholder:text-[9px] border-white rounded-2xl text-white p-2 resize-none tracking-widest
          sm:text-base 2xl:text-xl min-[300px]:text-xs text-[9px]"
          maxLength={150}
          value={textareaValue}
          name="description"
          required={step === 1}
          onChange={(e) => {
            if (/(\s\s|^\s$|\n)/.test(e.target.value)) {
              return;
            }
            if (/^[^]{149}\s$/.test(e.target.value)) {
              setTextareaValue(e.target.value.trim());
              setChars(e.target.value.trim().length);
            } else {
              setTextareaValue(e.target.value);
              setChars(e.target.value.length);
            }
          }}
          placeholder="Write the description here..."
        />
        <span className="absolute sm:bottom-[30%] bottom-[25%] sm:right-0 right-[2.5%] text-white sm:scale-100 2xl:scale-125 scale-75">{`${chars}/150`}</span>
      </fieldset>
    </div>
  );
};

Step1.propTypes = {
  step: PropTypes.number,
};

Step1.defaultProps = {
  step: 1,
};

export default Step1;
