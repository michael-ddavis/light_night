import { ArrowRightIcon } from '@heroicons/react/outline';
import aboutImage from '../../images/about.jpg';
import { Link } from 'react-router-dom';

const supportLinks = [
  {
    name: 'Our Vision.',
    href: '/vision',
    description:
      'Learn more about what keeps up going, what keeps us up at night, the reason that we do what we do.',
    linkText: 'Read More',
  },
  {
    name: 'Our Beliefs.',
    href: '/beliefs',
    description:
      'What you believe is the foundation of everything. Find out what Light Night stands on and believes at its core.',
    linkText: 'Read More',
  },
  {
    name: 'Our Team.',
    href: '/team',
    description:
      'It takes a nothing less than a dedicated team to make this ministy work. Take a look at our volunteers and staff.',
    linkText: 'See our Team',
  },
];

const AboutSection = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={aboutImage}
            alt="passion led us here"
          />
          <div
            className="absolute inset-0 bg-gray-300 mix-blend-hard-light"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl">
            Who We Are.
          </h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-16 md:pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base md:text-md lg:text-lg text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="flex flex-row items-center p-6 rounded-bl-2xl rounded-br-2xl md:px-8 text-orange-500 hover:text-orange-700">
                <Link
                  to={link.href}
                  className="text-base font-medium"
                >
                  {link.linkText}
                </Link>
                <ArrowRightIcon className="ml-3 h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
