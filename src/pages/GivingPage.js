import { Link } from "react-router-dom";
import teamImage from "../images/give.jpg";
import paypal from "../images/paypal.png";
import venmo from "../images/venmo.png";
import cashapp from "../images/cashapp.png";
import zelle from "../images/zelle.png";

const GivingPage = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={teamImage}
                alt="People worshipping"
              />
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block uppercase tracking-widest text-white">
                  Give
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-12 px-2 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <p className=" text-base md:text-xl text-gray-500 text-center">
              We believe that Light Night will continue to grow and expand to
              touch more lives. Since God gave the vision, we know that He will
              fund it. We are excited about what God is going to do through your
              generous donation today.
            </p>

            <p className=" text-xs md:text-xl text-center font-medium text-black">
              *Light Night reserves the right to (appropriate, allocate) funds
              as it deems necessary
            </p>
          </div>
        </div>
        <span className="m-4 md:m-8 block text-2xl md:text-5xl text-center leading-8 font-extrabold tracking-loose text-gray-900 py-4">
          Ways To Donate
        </span>
        <div className="grid grid-cols-2 grid-rows-4 md:gap-4 justify-center md:px-36">
          {/* PayPal */}
          <div className="col-span-2 bg-gradient-to-r from-blue-900 to-sky-400 w-full md:rounded-md py-4">
            <div className="grid grid-cols-2 h-full place-items-center place-content-center pl-4 md:pl-12">
              <div>
                <p className="text-white text-lg md:text-2xl lg:text-4xl font-medium tracking-widest">
                  PAYPAL
                </p>
                <p className="text-white text-xs md:text-sm font-light tracking-widest ">
                  Use PayPal to quickly and securely give a donation
                </p>
                <Link
                  to="#"
                  className="transition duration-150 ease-linear border  md:rounded-sm px-2 md:px-4 py-2 mt-4 inline-flex items-center font-light tracking-widest text-base md:text-lg bg-yellow-400 text-white hover:bg-white hover:border-black hover:text-yellow-400 border-black"
                >
                  DONATE {"  "}
                </Link>
              </div>
              <div>
                <img
                  className="h-28 mg:h-28 lg:h-40"
                  src={paypal}
                  alt="paypal"
                />
              </div>
            </div>
          </div>
          {/*  End Paypal */}

          {/* CashApp */}
          <div className="col-span-2 bg-gradient-to-r from-green-400 to-green-800 w-full md:rounded-md">
            <div className="grid grid-cols-2 h-full place-items-center place-content-center pr-12">
              <div>
                <img
                  className="h-24 md:h-28 lg:h-40"
                  src={cashapp}
                  alt="paypal"
                />
              </div>
              <div>
                <p className="text-white text-lg md:text-2xl lg:text-4xl font-medium tracking-widest">
                  CASHAPP
                </p>
                <p className="text-white text-xs md:text-sm font-light tracking-widest lg:mb-4">
                  Use the code below:
                </p>
                <p className="text-yellow-400 uppercase tracking-wide font-bold text-lg md:text-2xl">
                  $lightnightorg
                </p>
              </div>
            </div>
          </div>
          {/*  End CashApp */}

          {/* Venmo */}
          <div className="col-span-2 bg-gradient-to-r from-sky-900 to-blue-300 w-full md:rounded-md">
            <div className="grid grid-cols-2 h-full place-items-center place-content-center pl-12">
              <div>
                <p className="text-white text-lg md:text-2xl lg:text-4xl  font-medium tracking-widest">
                  VENMO
                </p>
                <p className="text-white text-xs md:text-sm font-light tracking-widest lg:mb-4">
                  Send your donation to this username below:
                </p>
                <p className="text-yellow-400 uppercase tracking-wide font-bold text-lg md:text-2xl">
                  @lightnightorg
                </p>
              </div>
              <div>
                <img
                  className="h-24 md:h-28 lg:h-40"
                  src={venmo}
                  alt="paypal"
                />
              </div>
            </div>
          </div>
          {/* End venmo */}

          {/* Zelle */}
          <div className="col-span-2 bg-gradient-to-r from-violet-400 to-violet-900 w-full md:rounded-md">
            <div className="grid grid-cols-2 h-full place-items-center place-content-center pr-8 md:pr-12">
              <div>
                <img
                  className="h-24 md:h-28 lg:h-40"
                  src={zelle}
                  alt="paypal"
                />
              </div>
              <div>
                <p className="text-white text-lg md:text-2xl lg:text-4xl font-medium tracking-widest">
                  Zelle
                </p>
                <p className="text-white text-xs md:text-sm font-light tracking-widest lg:mb-4">
                  Send your donation to the email below:
                </p>
                <p className="text-yellow-400 uppercase tracking-wide font-bold text-md md:text-lg lg:text-2xl">
                  give@lightnight.org
                </p>
              </div>
            </div>
          </div>
          {/* End Zelle  */}
        </div>
        <span className="m-4 md:mt-12 block text-2xl md:text-5xl text-center leading-8 font-extrabold tracking-loose text-gray-900 py-4">
          Thank you for your Donation!
        </span>
      </div>
    </div>
  );
};

export default GivingPage;
