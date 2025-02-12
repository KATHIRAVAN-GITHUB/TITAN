import { Link } from "react-router";

const Navibar = () => {
  return (
    <>
      <section className="2xl:container mx-auto fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[9%]">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          <div className="flex flex-row justify-between items-center">
            <a
              href="/"
              className=" font-[Inter] font-bold text-[20px] leading-[36px] text-yellow-500"
            >
              TITAN
            </a>
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
            {/* <a href="https://kathiravan-82e32.web.app/">
                            <button
                                class="font-[Roboto] font-bold text-[16px] leading-[24px] text-[#183A57]">HOME
                            </button>
                        </a>
                        <a href="#about">
                            <button
                                class="font-[Roboto] font-bold text-[16px] leading-[24px] text-[#183A57]">ABOUT
                            </button>
                        </a>
                        <a href="#project">
                            <button
                                class="font-[Roboto] font-bold text-[16px] leading-[24px] text-[#183A57]">PROJECTS
                            </button>
                        </a>
                        <a href="#contact">
                            <button
                                class="font-[Roboto] font-bold text-[16px] leading-[24px] text-[#183A57]">CONTACT
                            </button>
                        </a> */}

            <ul className="flex flex-col justify-end items-center md:flex-row gap-6">
              <a href="/">
                <li className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]">
                  HOME
                </li>
              </a>
              <a href="/product">
                <li className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]">
                  PRODUCTS
                </li>
              </a>
              <a href="/about">
                <li className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]">
                  ABOUT
                </li>
              </a>
              <a href="/contact">
                <li className="hover:bg-yellow-500 hover:rounded-lg p-2 list font-[Inter] font-bold text-[16px] leading-[24px]">
                  CONTACT
                </li>
              </a>
              <a href="/cart">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white" 
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </section>

      {/* <script>
                let menuicon = document.getElementById("menuicon");
                let crossicon = document.getElementById("crossicon");
                let contentlist = document.getElementById("content");
                let navlist = document.getElementsByClassName("list");

                      menuicon.addEventListener("click", () => {
                    menuicon.classList.toggle("hidden");
                crossicon.classList.toggle("hidden");
                contentlist.classList.toggle("hidden");
                         // console.dir(menuicon);
                       });

                       crossicon.addEventListener("click", () => {
                    menuicon.classList.toggle("hidden");
                crossicon.classList.toggle("hidden");
                contentlist.classList.toggle("hidden");
                            // console.dir(menuicon);
                         // console.dir(menuicon);
                   })

                for (let i = 0; i < navlist.length; i++) {
                    navlist[i].addEventListener("click", () => {

                        menuicon.classList.toggle("hidden");
                        crossicon.classList.toggle("hidden");
                        contentlist.classList.toggle("hidden");
                    })
                }
            </script>
            &lt;!&ndash;Navbar section ending&ndash;&gt; */}
    </>
  );
};

export default Navibar;
