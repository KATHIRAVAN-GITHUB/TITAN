import { useEffect, useRef } from "react";

const Collections = () => {
  const logos = [
    "https://ik.imagekit.io/kathiravan/Watches/f-1.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-2.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-3.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-4.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-5.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-6.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-7.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-8.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-9.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-10.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-11.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-12.png",
  ];

  const logos1 = [
    "https://ik.imagekit.io/kathiravan/Watches/f-13.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-14.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-15.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-16.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-17.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-18.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-19.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-20.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-21.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-22.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-23.png",
    "https://ik.imagekit.io/kathiravan/Watches/f-24.png",
  ];
  const marqueeRef = useRef(null);

  // useEffect(() => {
  //     const scroll = () => {
  //         if (marqueeRef.current) {
  //             marqueeRef.current.scrollLeft += 0.01; // Adjust speed
  //         }
  //     };
  //     const interval = setInterval(scroll, 10); // Adjust interval for smoothness
  //     return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="mt-[70px]">
        <p className="font-[Inter] font-bold text-[40px] leading-[42px] text-yellow-500 text-center p-8">
          Brand We Love
        </p>
      </div>

      <div className="relative w-[85%] mx-auto bg-white py-6 space-y-6">
        {/* Left to Right Scroller */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex w-max animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} alt="logo" className="h-10 mx-4" />
            ))}
          </div>
        </div>

        {/* Right to Left Scroller (Slower) */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="flex w-max animate-marquee-reverse">
            {[...logos1, ...logos1].map((logo, index) => (
              <img key={index} src={logo} alt="logo" className="h-10 mx-4" />
            ))}
          </div>
        </div>
      </div>

      <div className="2xl:container mx-auto py-10 h-[90%]">
        <p className="font-[Inter] font-bold text-[40px] leading-[42px] text-yellow-500 text-center p-8">
          Featured Collections
        </p>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="transform transition duration-200 hover:scale-110 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-xl border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-1.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto"
            />
            <p className="font-[Inter] font-medium text-[18px] leading-[22px] text-[#183A57]">
              TIMEWEAR New Track
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[20px] leading-[28px] text-black">
              ₹500
            </p>
            <div className="flex flex-row justify-between gap-4">
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[18px] leading-[28px] text-black">
                Rating - 4
              </button>
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[16px] leading-[21px] rounded-lg p-2 bg-[#BDA000] text-white">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="transform transition duration-200 hover:scale-110 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-2.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              SQUARE DIAL Stainless Steel Analog Watch
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹750
            </p>
            <div className="flex flex-row justify-between gap-4">
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-normal text-[18px] leading-[28px] text-black">
                Rating - 4.5
              </button>
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[16px] leading-[21px] rounded-lg p-2 bg-[#BDA000] text-white">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="transform transition duration-200 hover:scale-110 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-3.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Fastrack Astor FR2 Pro Smart Watch
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹2999
            </p>
            <div className="flex flex-row justify-between gap-4">
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-normal text-[18px] leading-[28px] text-black">
                Rating - 4
              </button>
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[16px] leading-[21px] rounded-lg p-2 bg-[#BDA000] text-white">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="transform transition duration-200 hover:scale-110 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-4.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Casio EDifice EFR-539SG-1AVUDF Chronograph 100M Water Resistant
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹2999
            </p>
            <div className="flex flex-row justify-between gap-4">
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-normal text-[18px] leading-[28px] text-black">
                Rating - 4
              </button>
              <button className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[16px] leading-[21px] rounded-lg p-2 bg-[#BDA000] text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center mt-12">
          <a href="/product">
            <button className="transform transition duration-200 hover:scale-110 fond-[Inter] font-medium text-[16px] leading-[21px] rounded-lg p-4 bg-[#BDA000] text-white">
              View More
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Collections;
