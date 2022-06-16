import headerImage from "../../images/encounters.jpg";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy } from "firebase/firestore/lite";
import { db, storage } from "../../firebase";
import { useState, useEffect, useCallback } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import blogPlaceholder from "../../images/blog_placeholder.jpeg";
import EncountersSection from "../../components/home/EncountersSection";

const EncountersPage = () => {
  const [encounters, setEncounters] = useState([]);
  const [data, setData] = useState({ id: "" });

  const getEncounters = useCallback(async () => {
    const querySnapshot = await getDocs(
      collection(db, "encounters"),
      orderBy("orderId", "asc")
    );
    querySnapshot.forEach((doc) => {
      getDownloadURL(ref(storage, doc.data().image))
        .then((url) => {
          setEncounters((encounter) => [
            ...encounter,
            {
              id: doc.id,
              title: doc.data().title,
              date: doc.data().date,
              address: doc.data().address,
              map: doc.data().map,
              tag: doc.data().tag,
              image: url,
            },
          ]);
          setData(doc.id);
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  }, []);

  useEffect(() => {
    setEncounters([]);
    getEncounters().catch(console.error);
  }, [getEncounters]);

  return (
    <div className="container flex flex-col mx-auto min-w-full">
      {/* Events header */}
      <div className="relative">
        <div className="mx-auto">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={headerImage}
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
      <div className="lg:col-span-2 my-3 mx-2 md:mx-10 md:my-4">
        <ul>
          {encounters.map((encounter) => (
            <section>
              <div class="px-4 py-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div class="flex flex-wrap items-center mx-auto max-w-7xl">
                  <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                    <div>
                      <div class="relative w-full max-w-lg">
                        <div
                          class={`absolute top-0 rounded-full ${encounter.upperImageColor} -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70`}
                        ></div>

                        <div
                          class={`absolute rounded-full ${encounter.lowerImageColor}-bottom-4 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70`}
                        ></div>
                        <div class="relative">
                          <img
                            class="object-cover object-center mx-auto rounded-lg shadow-2xl"
                            alt="hero"
                            src={encounter.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-center md:items-start mt-12 mb-16 text-center md:text-left md:mb-0 lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 xl:mt-0">
                    <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                      {" "}
                      {encounter.locationName}{" "}
                    </span>
                    <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                      {encounter.title}
                    </h1>
                    <p class="mb-8 text-base md:text-md lg:text-lg leading-relaxed text-gray-500">
                      {encounter.tag} <br /> <br />• Address:{" "}
                      {encounter.address} <br />• Date: {encounter.date}
                    </p>
                    <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                      <div class="mt-3 rounded-lg sm:mt-0">
                        <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          See More {">"}
                          {">"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            // <li key={encounter.id} className="sm:py-8">
            //   <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:items-center">
            //     <div className="aspect-w-3 aspect-h-2 sm:aspect-w-12 sm:aspect-h-8 md:aspect-w-16 md:aspect-h-9 max-w-full">
            //       <img className="object-cover" src={encounter.image} alt="" />
            //     </div>

            //     <div className="sm:col-span-2  md:ml-16 m-2">
            //       <div className="">
            //         <div className="text-xl md:text-2xl lg:text-4xl font-medium">
            //           <h3>{encounter.title}</h3>
            //           <p className="text-sm md:text-lg lg:text-3xl text-gray-700">
            //             {encounter.date}
            //           </p>
            //         </div>
            //         <div className="text-sm md:text-md lg:text-2xl">
            //           <p className="text-gray-700">{encounter.address}</p>
            //         </div>
            //         <Link
            //           to="/encounter"
            //           state={data}
            //           className="transition duration-150 ease-linear bg-transparent border border-blue-700 rounded-md
            //           shadow p-4 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest text-base md:text-2xl text-blue-700
            //         hover:bg-blue-700 hover:border-transparent hover:text-white"
            //         >
            //           More Info
            //         </Link>
            //       </div>
            //     </div>
            //   </div>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EncountersPage;
