import { useContext } from 'react';
import AllAirlines from './allAirlines/allAirlines';
import airlineSlideContext from '../../contexts';
import UserAirlines from './userAirlines/userAirlines';

const AirlinesContainer = () => {
  const { allTab } = useContext(airlineSlideContext);
  return (
    <>
      { allTab && <AllAirlines /> }
      {allTab === false && <UserAirlines />}
    </>
  );
};

export default AirlinesContainer;
