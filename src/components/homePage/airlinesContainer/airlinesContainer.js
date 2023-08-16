import PreviousArrow from './previousArrow/previousArrow';
import AirlineList from './airlineList/airlineList';
import NextArrow from './nextArrow/nextArrow';

const AirlinesContainer = () => (
  <section className="flex flex-wrap gap-x-16">
    <PreviousArrow />
    <AirlineList />
    <NextArrow />
  </section>
);

export default AirlinesContainer;
