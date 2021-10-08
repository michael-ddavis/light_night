import visionImage from '../images/vision.png';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/outline';

const VisionPage = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col mx-auto min-w-full">
        {/* Events header */}
        <div className="relative">
          <div className="mx-auto">
            <div className="relative sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={visionImage}
                  alt="People worshipping"
                />
                <div className="absolute inset-0 bg-gray-400 mix-blend-darken" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block uppercase tracking-widest text-white">
                    Our Vision
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-8 md:px-0 prose prose-indigo prose-xl text-gray-500 mx-auto">
        <blockquote>
          <p>
            3 Make every effort to keep the unity of the
            Spirit through the bond of peace. 4 There is one
            body and one Spirit, just as you were called to
            one hope when you were called; 5 one Lord, one
            faith, one baptism; 6 one God and Father of all,
            who is over all and through all and in all.
          </p>
        </blockquote>

        <p className="italic">- Ephesians 4:3-6</p>
        <p>
          God can only do great and mighty things through a
          people that is unified. Light Night is about
          bringing people together to worship God in unity.
          We want people to experience God in a fresh way.
          God gave us the vision to begin hosting worship
          nights and invite all who wanted to come and have
          different churches in the city host us. This move
          of God is not meant to be contained to one church,
          denomination or age group but is meant to spread
          and pull the church of Christ together. We’re here
          to pursue Jesus and push unity in the body.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Our Ministry Partners
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-14 px-8 bg-gray-100">
            <img
              className="max-h-6"
              src="https://www.chapelrva.com/wp-content/themes/chapel/images/top-logo.svg"
              alt="Workcation"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
            <img
              className="max-h-16"
              src="https://d14f1v6bh52agh.cloudfront.net/tQNOy4Fv98dJdTGv95N-smtcNNI=/fit-in/600x300/uploads/nH5S5vDrmQ5cmEUJDl0Yofhrm3ilf1nBElfRHqOf.png"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center py-10 px-8 bg-gray-100">
            <img
              className="max-h-12"
              src="https://www.christianlife.org/wp-content/uploads/png/christianlife_logo_orange2_600x86.png"
              alt="Tuple"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end items-center p-6  px-6 xl:px-32 rounded-bl-2xl rounded-br-2xl md:px-8 text-orange-500 hover:text-orange-700">
        <Link to="/about" className="text-xl font-medium">
          More About Light Night
        </Link>
        <ArrowRightIcon className="ml-3 h-5 w-5" />
      </div>
    </div>
  );
};

export default VisionPage;
 