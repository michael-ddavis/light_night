import image from './images/encounters.jpg';
import spring from './images/spring.jpg';

const Events = () => {
  return (
    <div className="container flex flex-col mx-auto min-w-full">
      <div>
        {/* Events header */}
        <div className="relative">
          <div className="mx-auto">
            <div className="relative sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt="People worshipping"
                />
                <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block uppercase tracking-widest text-white">
                    Encounters
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Worship Night  */}
        <div className="relative">
            <h2 className="text-center font-medium text-3xl p-4">Upcoming Worship Encounter</h2>
          <div className="max-w-7xl mx-auto">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={spring}
                  alt="People worshipping"
                />
                <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block uppercase tracking-widest text-white">
                    Spring Worship Night '22
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
