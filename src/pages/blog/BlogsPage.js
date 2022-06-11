import blogImage from "../../images/blogs.jpeg";
import blogPlaceholder from "../../images/blog_placeholder.jpeg";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <div className="container flex flex-col mx-auto min-w-full">
      {/* Blogs header */}
      <div className="relative">
        <div className="mx-auto">
          <div className="relative sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={blogImage}
                alt="People worshipping"
              />
              <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block uppercase tracking-widest text-white">
                  Blogs
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* End Blogs Header */}

      {/* Blog list  Section */}
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
              <img
                class="object-cover object-center w-full mb-8 md:h-96 h-80 rounded-xl"
                src={blogPlaceholder}
                alt="blog"
              />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                a great header right here
              </h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Short length headline to use as a title.
              </h1>
              <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
              <div class="mt-4">
                <a
                  href="#"
                  class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                  title="read more"
                >
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
            <div class="p-6">
              <img
                class="object-cover object-center w-full mb-8 md:h-96 h-80 rounded-xl"
                src={blogPlaceholder}
                alt="blog"
              />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                a great header right here
              </h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Short length headline to use as a title.
              </h1>
              <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
              <div class="mt-4">
                <Link
                  to="/blog-detail"
                  className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                >
                  Read More »
                </Link>
              </div>
            </div>
            <div class="p-6">
              <img
                class="object-cover object-center w-full mb-8 md:h-96 h-80 rounded-xl"
                src={blogPlaceholder}
                alt="blog"
              />
              <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                a great header right here
              </h2>
              <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Short length headline to use as a title.
              </h1>
              <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML &amp; Next.js.
              </p>
              <div class="mt-4">
                <a
                  href="#"
                  class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                  title="read more"
                >
                  {" "}
                  Read More »{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Blog List Section */}
      {/* Pagination */}
      <div class="mx-auto pb-12">
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Previous</span>
            {/* <!-- Heroicon name: solid/chevron-left --> */}
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          {/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}
          <a
            href="#"
            aria-current="page"
            class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {" "}
            1{" "}
          </a>
          <a
            href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {" "}
            2{" "}
          </a>
          <a
            href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            {" "}
            3{" "}
          </a>
          <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            {" "}
            ...{" "}
          </span>
          <a
            href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
          >
            {" "}
            8{" "}
          </a>
          <a
            href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {" "}
            9{" "}
          </a>
          <a
            href="#"
            class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          >
            {" "}
            10{" "}
          </a>
          <a
            href="#"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span class="sr-only">Next</span>
            {/* <!-- Heroicon name: solid/chevron-right --> */}
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BlogsPage;
