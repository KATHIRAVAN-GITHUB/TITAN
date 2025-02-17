import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <Link
            to="/"
            className="flex justify-center items-center text-2xl font-semibold text-yellow-500 dark:text-white"
          >
            TITAN
          </Link>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Discover a stunning collection of luxury, classic, and modern
            watches designed to complement your style.
          </p>
          {/* <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/product" className="mr-4 hover:underline md:mr-6">
                PRODUCT
              </Link>
            </li>
            <li>
              <Link to="/review" className="mr-4 hover:underline md:mr-6">
                REVIEW
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mr-4 hover:underline md:mr-6">
                CONTACT
              </Link>
            </li>
          </ul> */}
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <a href="#" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
