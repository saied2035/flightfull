import { useState } from 'react';
import { SlClose } from 'react-icons/sl';

const Step1 = () => {
  const [chars, setChars] = useState(0);
  const [textareaValue, setTextareaValue] = useState('');
  const [imageName, setImageName] = useState('Select image');
  const [image, setImage] = useState('');
  console.log({ image });
  const imageToBase64 = (img, type) => {
    if (img === undefined) return;
    if (type === 'device') {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = () => setImage(reader.result);
    } else {
      setImage(img);
    }
  };
  return (
    <>
      <h2 className="text-white text-xl text-center mb-4">General Details</h2>
      <input
        className="p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
        type="text"
        placeholder="Airline Name"
      />
      <fieldset className="flex justify-center items-center gap-3">
        <input
          id="select-image-url"
          className="relative p-2 bg-transparent text-white border border-white rounded-2xl
            placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
          type="url"
          placeholder="Image url"
          onKeyUp={(e) => {
            let timer = null;
            clearTimeout(timer);
            timer = setTimeout(() => {
              imageToBase64(e.target.value, '');
              setImageName('Select image');
              document.querySelector('#select-image').value = null;
            }, 1500);
          }}
        />
        <span className="text-xl text-white">or</span>
        <input
          id="select-image"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImageName(e.target.value.substring(12) || 'Select image');
            imageToBase64(e.target.files[0], 'device');
          }}
        />
        <button
          type="button"
          className="relative py-3 px-6 text-[#97bf0e] bg-white rounded-xl max-w-[200px] max-h-14
          overflow-hidden tracking-wider leading-9"
          onClick={() => {
            setImageName('Select image');
            setImage('');
            document.querySelector('#select-image-url').value = null;
            document.querySelector('#select-image').click();
          }}
        >
          <SlClose
            size={18}
            className={`absolute top-1 right-1 ${imageName === 'Select image' ? 'pointer-events-none' : 'pointer-events-auto'}`}
            onClick={(e) => {
              setImageName('Select image');
              setImage('');
              document.querySelector('#select-image').value = null;
              e.stopPropagation();
            }}
          />
          {imageName}
        </button>
      </fieldset>
      <fieldset className="flex-auto relative md:w-[40%] w-full my-2">
        <textarea
          className="md:w-full md:h-[80%] h-full bg-transparent border focus:placeholder:text-transparent
          focus:outline-0 placeholder:text-white placeholder:text-sm border-white rounded-2xl
          text-white p-2 resize-none tracking-widest"
          maxLength={150}
          value={textareaValue}
          onChange={(e) => {
            if (/(\s\s|^\s$)/.test(e.target.value)) {
              return;
            }
            if (/^[^]{149}\s$/.test(e.target.value)) {
              setTextareaValue(e.target.value.trim());
            } else {
              setTextareaValue(e.target.value);
            }
            setChars(e.target.value.length);
          }}
          placeholder="Write the description here..."
        />
        <span className="absolute bottom-[12%] right-0 text-white">{`${chars}/150`}</span>
      </fieldset>
    </>
  );
};

export default Step1;
