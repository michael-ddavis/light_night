import image from '../../images/giving.jpg';
import { Link } from 'react-router-dom';

const Giving = () => {
    return ( 
        <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover object-bottom"
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
              Giving.
            </h1>
            <p className="mt-6 max-w-lg text-left text-xl text-gray-300">
              Looking for ways to give to what God is doing? Click the give button below.
            </p>
            <Link to="/events" className="transition duration-150 ease-linear bg-transparent border-2 border-green-600 rounded-md 
            shadow p-8 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest textbase md:text-2xl text-white 
            hover:bg-green-600 hover:border-transparent hover:text-white">GIVE</Link>     
          </div>
        </div>
      </div>
     );
}
 
export default Giving;