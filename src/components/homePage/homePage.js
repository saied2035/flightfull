import Navbar from '../navbar/navbar';
import AirlinesContainer from './airlinesContainer/airlinesContainer';

const HomePage = () => (
  <main className="flex">
    <Navbar />
    <section className="flex flex-col flex-auto">
      <h1 className="[word-spacing:4px] flex flex-col gap-y-2 justify-end text-center text-4xl tracking-wide font-bold basis-32 self-center font-['Repo']">
        Top Airlines
        <span className="text-xs tracking-wider text-[#b9b9b9]">Please select an Airline</span>
      </h1>
      <hr className="border-0 border-b-2 border-dotted w-28 mx-auto mt-8" />
      <AirlinesContainer />
    </section>
  </main>
);

export default HomePage;
