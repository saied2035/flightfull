import { useState, useEffect } from 'react';
import staticAirlineList from '../staticAirlineList';
import Observer from './observer/observer';
import PreviousArrow from './previousArrow/previousArrow';
import NextArrow from './nextArrow/nextArrow';
import AirlinesContainer from './airlinesContainer/airlinesContainer';

const HomePage = () => {
  const [intersectionAirlines, setIntersectionAirlines] = useState(new Array(4).fill(null));
  const [slide, setSlide] = useState(0);
  const { length } = staticAirlineList;
  const resizeObserver = new Observer({
    type: 'resize', slide, setSlide, listLength: length,
  });
  useEffect(() => {
    const pageContainer = document.querySelector('#page-container');
    resizeObserver.observeResizeElement(pageContainer);
  }, [slide]);
  return (
    <section className="flex flex-col flex-auto">
      <h1 className="[word-spacing:4px] flex flex-col gap-y-2 justify-end text-center text-4xl tracking-wide font-bold basis-32 self-center font-['Repo']">
        Top Airlines
        <span className="text-xs tracking-wider text-[#b9b9b9]">Please select an Airline</span>
      </h1>
      <hr className="border-0 border-b-2 border-dotted w-28 mx-auto my-8 mb-10" />
      <div className="max-[250px]:relative static w-[100vw] sm:w-full mx-auto flex-auto gap-x-3 flex justify-center">
        <PreviousArrow
          setSlide={setSlide}
          slide={slide}
          setIntersectionAirlines={setIntersectionAirlines}
          intersectionAirlines={intersectionAirlines}
        />
        <AirlinesContainer
          staticAirlineList={staticAirlineList}
          slide={slide}
          length={length}
          setIntersectionAirlines={setIntersectionAirlines}
        />
        <NextArrow
          setSlide={setSlide}
          slide={slide}
          setIntersectionAirlines={setIntersectionAirlines}
          intersectionAirlines={intersectionAirlines}
        />
      </div>
    </section>
  );
};

export default HomePage;
