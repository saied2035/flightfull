import { useEffect, useState } from 'react';

const MobileNavbar = () => {
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    const handleWindowSize = (e) => {
      if (e.target.innerWidth > 639) setShowList(false);
    };
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);
  return (
    <nav className="sm:hidden block">
      <svg
        className={`w-[5%] fill-yellow-500 pointer-events-auto transition-all duration-700 ${showList ? 'ml-[94%] pt-2 rotate-[360deg]' : 'ml-0 mt-0 rotate-0'}`}
        viewBox="0 0 32 32"
        onClick={() => setShowList(showList === false)}
      >
        { showList
          ? (
            <path className="stroke-yellow-500 max-w-full" strokeWidth="3" d="M 5 22 L 22 5 M 5 5 L 22 22" />
          )
          : (
            <>
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" />
            </>
          )}
      </svg>
      <p className={`text-3xl font-bold overflow-hidden underline transition-all duration-[650ms] ease-in-out ${showList ? 'opacity-100' : 'opacity-0'}`}>
        Mobile Navbar!
      </p>
    </nav>
  );
};

export default MobileNavbar;
