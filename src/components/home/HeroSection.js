import { Link } from "react-router-dom";
import video from "../../media/light_night_video.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden content-container">
      <div className="relative z-10 p-5 text-2xl text-white text-center bg-opacity-50 rounded-xl">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
          Winter Worship Night<span className="">'22</span> 
        </p>
        <Link
          to="/encounters"
          className="transition duration-150 ease-linear bg-transparent border border-white rounded-md 
          shadow p-8 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest textbase md:text-2xl text-white 
          hover:bg-white hover:border-transparent hover:text-blue-700"
        >
          Register
        </Link>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroSection;
