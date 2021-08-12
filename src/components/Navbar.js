import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const solutions = [
  {
    name: 'About',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/about',
  },
  {
    name: 'Encounters',
    description:
      'Speak directly to your customers in a more meaningful way.',
    href: '/events',
  },
  {
    name: 'Giving',
    description:
      "Your customers' data will be safe and secure.",
    href: '/giving',
  },
];

const Navbar = () => {
  return (
    <Popover className="relative bg-transparent z-40 shadow-sm lg:shadow-md">
      {({ open }) => (
        <>
          <div className="flex justify-between sticky top-0 items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <h2 className="font-sans tracking-wider font-black text-xl md:text-2xl">LIGHT NIGHT</h2>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden md:flex space-x-10"
            >
              <Link
                to="/about"
                className="text-base font-medium text-black hover:text-gray-900"
              >
                About
              </Link>
              <Link
                to="/events"
                className="text-base font-medium text-black hover:text-blue-700"
              >
                Encounters
              </Link>
              <Link
                to="/giving"
                className="text-base font-medium text-black hover:text-blue-700"
              >
                Giving
              </Link>
            </Popover.Group>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-end">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">
                          Close menu
                        </span>
                        <XIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Navbar;
