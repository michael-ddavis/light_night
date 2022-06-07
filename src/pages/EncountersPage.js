import headerImage from "../images/encounters.jpg";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import { db, storage } from "../firebase";
import { useState, useEffect, useCallback } from "react";
import { ref, getDownloadURL } from "firebase/storage";

const EncountersPage = () => {
  const [encounters, setEncounters] = useState([]);
  const [data, setData] = useState({ id: "" });

  const getEncounters = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "encounters"));
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
    getEncounters().catch(console.error);
  }, [getEncounters]);

  return (
    <div className="container flex flex-col mx-auto min-w-full">
      {/* Events header */}
      <div className="relative sm:overflow-hidden">
        <img
          className="h-96 w-full object-cover"
          src={headerImage}
          alt="People worshipping"
        />
        <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block uppercase tracking-widest text-white">
              Encounters
            </span>
          </h1>
        </div>
      </div>

      <div className="lg:col-span-2 my-3 mx-2 md:mx-10 md:my-4">
        <ul className="space-y-12 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          {encounters.map((encounter) => (
            <li key={encounter.id} className="sm:py-8">
              <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:items-center">
                <div className="aspect-w-3 aspect-h-2 sm:aspect-w-12 sm:aspect-h-8 md:aspect-w-16 md:aspect-h-9 max-w-full">
                  <img className="object-cover" src={encounter.image} alt="" />
                </div>

                <div className="sm:col-span-2  md:ml-16 m-2">
                  <div className="">
                    <div className="text-xl md:text-2xl lg:text-4xl font-medium">
                      <h3>{encounter.title}</h3>
                      <p className="text-sm md:text-lg lg:text-3xl text-gray-700">
                        {encounter.date}
                      </p>
                    </div>
                    <div className="text-sm md:text-md lg:text-2xl">
                      <p className="text-gray-700">{encounter.address}</p>
                    </div>
                    <Link
                      to="/encounter"
                      state={data}
                      className="transition duration-150 ease-linear bg-transparent border border-blue-700 rounded-md 
                      shadow p-4 md:px-16 py-3 mt-8 inline-flex items-center font-light tracking-widest text-base md:text-2xl text-blue-700 
                    hover:bg-blue-700 hover:border-transparent hover:text-white"
                    >
                      More Info
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EncountersPage;
