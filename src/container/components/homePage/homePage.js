import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PreviousArrow from './previousArrow/previousArrow';
import NextArrow from './nextArrow/nextArrow';
import Observer from './observer/observer';
import AirlinesContainer from './airlinesContainer/airlinesContainer';
import airlineSlideContext from '../contexts';

const HomePage = () => {
  const location = useLocation();
  const { pathname } = location;
  const startSlide = location.state ? location.state.startSlide : 0;
  const isAllAirlines = /(^\/$|^\/airlines$|^\/airlines\/$)/.test(pathname);
  const [allTab, setAllTab] = useState(isAllAirlines);
  const [slidesLength, setSlidesLength] = useState(0);
  const [intersectionAirlines, setIntersectionAirlines] = useState(new Array(4).fill(null));
  const [slide, setSlide] = useState(startSlide);
  const {
    airlines_length: airlinesLength,
    user_airlines_length: userAirlinesLength,
  } = useSelector((state) => state.airlineReducer);
  const resizeObserver = new Observer({
    type: 'resize',
    slide,
    setSlide,
    listLength: isAllAirlines ? airlinesLength : userAirlinesLength,
    setIntersectionAirlines,
    setSlidesLength,
  });
  const shouldArrowsGetRendered = (allTab && airlinesLength > slidesLength)
  || (allTab === false && userAirlinesLength > slidesLength);
  useEffect(() => {
    const pageContainer = document.querySelector('#page-container');
    resizeObserver.observeResizeElement(pageContainer);
  }, [slide]);
  return (
    <section className="flex flex-col flex-auto">
      <h1 className="[word-spacing:4px] flex flex-col gap-y-2 justify-end text-center sm:text-4xl
      min-[250px]:text-2xl text-xl tracking-wide font-bold self-center mt-4 font-['Repo']"
      >
        Top Airlines
        <span className="text-xs tracking-wider text-[#b9b9b9]">Please select an Airline</span>
      </h1>
      <hr className="border-0 border-b-2 border-dotted w-28 mx-auto sm:my-4 my-2" />
      <ul className="z-0 flex w-full justify-center h-auto my-4">
        <li className={`${allTab ? 'scale-110 z-50' : 'scale-100 z-0'}`}>
          <Link
            className={`w-full font-semibold sm:px-5 sm:py-2 px-1 py-1 sm:text-base text-xs border 
            ${allTab ? 'border-[#97bf0e] text-white bg-[#97bf0e]'
              : 'border-gray-100 text-[#97bf0e] bg-gray-100'}`}
            to="/airlines"
            onClick={() => {
              setSlide(0);
              setAllTab(true);
            }}
          >
            Airlines
          </Link>
        </li>
        <li className={`${allTab === false ? 'scale-110 z-50' : 'scale-100 z-0'}`}>
          <Link
            className={`w-full font-semibold sm:px-5 sm:py-2 px-1 py-1 sm:text-base text-xs border 
            ${allTab === false ? 'border-[#97bf0e] text-white bg-[#97bf0e]'
              : 'border-gray-100 text-[#97bf0e] bg-gray-100'}`}
            to="/your_airlines"
            onClick={() => {
              setSlide(0);
              setAllTab(false);
            }}
          >
            Your airlines
          </Link>
        </li>
      </ul>
      <div className="overflow-hidden max-[250px]:relative static w-[100vw] sm:w-full mx-auto flex-auto gap-x-3 flex justify-center">
        {shouldArrowsGetRendered && (
        <PreviousArrow
          setSlide={setSlide}
          slide={slide}
          setIntersectionAirlines={setIntersectionAirlines}
          intersectionAirlines={intersectionAirlines}
        />
        )}
        <airlineSlideContext.Provider value={{
          slide, setIntersectionAirlines, allTab, setSlide,
        }}
        >
          <AirlinesContainer />
        </airlineSlideContext.Provider>
        {shouldArrowsGetRendered && (
        <NextArrow
          setSlide={setSlide}
          slide={slide}
          setIntersectionAirlines={setIntersectionAirlines}
          intersectionAirlines={intersectionAirlines}
        />
        )}
      </div>
    </section>
  );
};
export default HomePage;
