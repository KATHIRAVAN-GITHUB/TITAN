import { Link } from "react-router";

const Navibar = () => {
  return (
    <>
      <section className="2xl:container mx-auto fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[9%]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          <div className="flex flex-row justify-between items-center">
            <Link
              to="/"
              className="font-[Inter] font-bold text-[20px] leading-[36px] text-yellow-500"
            >
              TITAN
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="md:hidden"
                id="menuicon"
              >
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
                className="hidden"
                id="crossicon"
              >
                <path
                  fill="currentColor"
                  d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.5.5 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.5.5 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.5.5 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.5.5 0 0 0 0-.707"
                ></path>
              </svg>
            </div>
          </div>

          <div className="hidden md:block" id="content">
            <ul className="flex flex-col justify-end items-center md:flex-row gap-6">
              <Link
                to="/"
                className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]"
              >
                HOME
              </Link>
              <Link
                to="/product"
                className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]"
              >
                PRODUCT
              </Link>
              <Link
                to="/about"
                className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]"
              >
                CONTACT
              </Link>
              <Link to="/cart">
                <div className="flex flex-row hover:bg-yellow-500 p-2 mx-auto hover:rounded-lg">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <p className="font-[Inter] font-bold text-[16px] leading-[24px]">
                    CART
                  </p>
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navibar;
