import { useState } from 'react';
import { SlClose } from 'react-icons/sl';

const Step1 = () => {
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
          className="relative p-2 bg-transparent text-white border border-white rounded-2xl
            placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
          type="url"
          placeholder="Image url"
          onKeyUp={(e) => {
            let timer = null;
            clearTimeout(timer);
            timer = setTimeout(() => {
              imageToBase64(e.target.value, '');
            }, 1000);
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
            document.querySelector('#select-image').click();
          }}
        >
          <SlClose
            size={18}
            className="absolute top-1 right-1"
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
      { image && <img src={image} alt="preview" /> }
    </>
  );
};

export default Step1;
