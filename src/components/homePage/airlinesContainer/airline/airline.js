import PropTypes from 'prop-types';

const Airline = ({
  name, description, socialMedia, imgSrc, display,
}) => (
  <div className={`${display} flex-col h-fit w-[80%] min-[900px]:w-[40%] lg:w-[30%] flex-auto`}>
    <img className="mx-auto sm:h-[158.42px] min-[2200px]:h-[337px]" alt="Airline Pic" src={imgSrc} />
    <h2 className="text-center font-['Repo'] font-bold mt-2">{name}</h2>
    <hr className="border-0 border-b-2 border-dotted w-28 mx-auto mt-4 mb-4" />
    <p className="text-[#a9abaa] text-center font-semibold pb-2 text-sm">{description}</p>
    <ul className="flex gap-x-3 justify-center mt-auto">
      {
socialMedia.map((link) => (
  <li key={link.name} className="group border p-3 border-[#e7e7e7] rounded-full scale-100 transition-all duration-500 hover:scale-125">
    <a target="_blank" className="w-full" href={link.url} rel="noreferrer">
      <link.image size={15} className="fill-[#d2d0d1] group-hover:fill-slate-500" />
    </a>
  </li>
))
}
    </ul>
  </div>
);

Airline.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default Airline;
