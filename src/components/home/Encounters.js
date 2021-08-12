import image from '../../images/home_encounters.jpg';
import { Link } from 'react-router-dom';
const Encounters = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="passion led us here"
          />
          <div
            className="absolute inset-0 bg-gray-200 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Encounters.
          </h1>
          <p className="mt-6 max-w-lg text-left text-xl text-gray-300">
            Not events, but encounters. Click to see what you can expect when you come.
          </p>
          <Link to="/events" className="transition duration-150 ease-linear bg-transparent border border-white rounded-md 
          shadow p-8 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest textbase md:text-2xl text-white 
          hover:bg-white hover:border-transparent hover:text-blue-700">See Our Encounters</Link>     
        </div>
      </div>
    </div>
  );
};

export default Encounters;
