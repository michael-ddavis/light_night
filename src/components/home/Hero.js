import { Link
 } from "react-router-dom";
const Hero = () => {
  return (
    <header
      id="up"
      class="bg-center bg-fixed bg-no-repeat bg-cover h-screen bg-fall relative"
    >
      <div
        class="h-screen bg-opacity-50 bg-black flex items-center justify-center"
      >
        <div class="mx-2 text-center">
          <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            Fall Worship Night <span className="text-blue-400">`21</span>
          </h1> 
          <Link to="/events" className="transition duration-150 ease-linear bg-transparent border border-white rounded-md 
          shadow p-8 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest textbase md:text-2xl text-white 
          hover:bg-white hover:border-transparent hover:text-blue-700">REGISTER</Link>        
        </div>
      </div>
    </header>
  );
};

export default Hero;
