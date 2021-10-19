import summer from "../images/concert.jpg";
import { Link } from "react-router-dom";
const EncounterDetailPage = () => {
  return (
    <div className="container mx-auto py-12">
      <img
        className="h-96 w-full mx-auto object-cover px-2 sm:px-4 md:px-8 lg:px-44"
        src={summer}
        alt=""
      />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-xl mx-auto max-w-prose">
          <h1>
            <span className="mt-2 block text-2xl md:text-5xl text-center leading-8 font-extrabold tracking-loose text-gray-900 py-4">
              Worship Encounter '22 - Winter
            </span>
            <div className="flex flex-row space-x-2 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base">The Chapel</p>
              <Link
                to={{ pathname: "https://goo.gl/maps/2Qy7PVqV7f8NEsgj9" }}
                target="_blank"
                className="text-red-400 underline text-base"
              >
                Map It
              </Link>
            </div>
            <div className="flex flex-row space-x-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-base">Friday, February 21</p>
            </div>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-xl text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{" "}
            sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
            risus viverra tellus varius sit neque erat velit. Faucibus commodo
            massa rhoncus, volutpat. Dignissim sed eget risus enim. sed amet
            vitae sed turpis id.
          </p>
          <div className="text-center">
            <h2 className="text-center">Registration</h2>
            <p className="text-left">
              Registration is <span className="font-bold">absolutely free</span>
              , but seating is still on a first-come, first-serve basis.
              Register for in-person attendance by clicking the Register button
              below. For questions about registration, email info@lightnight.org
              with "Registration" as the sublject line.
            </p>

            <Link
              style={{ textDecoration: "none" }}
              to="#"
              className="transition duration-150 ease-linear bg-transparent border border-blue-700 rounded-md shadow p-6 md:px-16 py-4 mt-4 inline-flex items-center font-light tracking-widest text-base md:text-2xl text-blue-700 hover:bg-blue-700 hover:border-transparent hover:text-white"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncounterDetailPage;
