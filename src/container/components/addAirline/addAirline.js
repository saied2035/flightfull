import { useState } from 'react';

const AddAirline = () => {
  const [chars, setChars] = useState(0);
  console.log(chars);
  return (
    <section className="font-['Repo'] flex-auto flex flex-col items-center bg-[#96bf01] gap-y-3">
      <h2 className="text-2xl text-center mt-5 text-white">Add Airline</h2>
      <form className="gap-y-2 w-full flex flex-col items-center">
        <input
          className="p-2 bg-transparent text-white border border-white rounded-2xl
          placeholder:text-white placeholder:text-sm focus:placeholder:text-transparent focus:outline-0"
          type="text"
          placeholder="Airline Name"
        />
        <textarea
          className="relative bg-transparent border focus:placeholder:text-transparent focus:outline-0
          placeholder:text-white placeholder:text-sm border-white min-w-fit w-72 h-[145px] rounded-2xl
          text-white p-2"
          maxLength={150}
          placeholder="Write the description here..."
        />
      </form>
    </section>
  );
};

export default AddAirline;
