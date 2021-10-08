import { Link
 } from "react-router-dom";
const HeroSection = () => {
  return (
    <header
      className="bg-top bg-fixed bg-no-repeat bg-cover h-screen bg-hero object-top relative"
    >
      <div
        className="h-screen bg-opacity-40 bg-gray-900 flex items-center justify-center"
      >
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            Fall Worship Night <span className="text-blue-400">'21</span>
          </h1> 
          <Link to="/encounters" className="transition duration-150 ease-linear bg-transparent border border-white rounded-md 
          shadow p-8 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest textbase md:text-2xl text-white 
          hover:bg-white hover:border-transparent hover:text-blue-700">REGISTER</Link>        
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
