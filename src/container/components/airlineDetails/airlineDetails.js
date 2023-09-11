import { useLocation } from 'react-router-dom';

const AirlineDetails = () => {
  const { airline } = useLocation().state;
  console.log('airline', airline);
  return (
    <p className="flex-auto">Airline Details Page</p>
  );
};

export default AirlineDetails;
