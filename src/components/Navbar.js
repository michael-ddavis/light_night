import { Popover, Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const links = [
  {
    name: "About.",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/about",
  },
  {
    name: "Our Vision.",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/vision",
  },
  {
    name: "Our Beliefs.",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/beliefs",
  },
  {
    name: "Our Team.",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/team",
  },
  {
    name: "Encounters.",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/encounters",
  },
  {
    name: "GIVE.",
    description: "Your customers' data will be safe and secure.",
    href: "/giving",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <Popover className="bg-white lg:shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <h2 className="font-sans tracking-wider font-black text-xl md:text-2xl">
                  LIGHT NIGHT
                </h2>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link
                to="/about"
                className="text-lg font-normal text-black hover:text-blue-700"
              >
                About Us
              </Link>
              <Link
                to="/encounters"
                className="text-lg font-normal text-black hover:text-blue-700"
              >
                Encounters
              </Link>
              <Link
                to="/blogs"
                className="text-lg font-normal text-black hover:text-blue-700"
              >
                Blog
              </Link>
              <Link to="/giving" className="text-lg font-normal text-black">
                Give
              </Link>
            </Popover.Group>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 overflow-hidden z-40"
              onClose={setOpen}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-y-0 right-0 max-w-full flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <div className="relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -ml-8 pt-5 pr-4 flex sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="rounded-md text-black hover:text-black "
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-8 w-8" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="h-full flex flex-col py-6 bg-black shadow-xl overflow-y-scroll">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-lg font-medium text-center text-gray-900">
                            LIGHT NIGHT
                          </Dialog.Title>
                        </div>
                        <div className="mt-6 relative flex-1 px-4 sm:px-6">
                          <nav className="grid grid-cols-1 gap-7">
                            {links.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 py-6 flex items-center rounded-lg hover:bg-gray-50"
                              >
                                <div className="ml-4 text-4xl font-bold text-white">
                                  {item.name}
                                </div>
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
};

export default Navbar;
