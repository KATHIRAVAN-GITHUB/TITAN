import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from "uuid";
import useFetchData from "../Hooks/useFetchData";
import { ShimmerPostList } from "react-shimmer-effects";
const Products = () => {
  const { isLoading,data } = useFetchData();

  if (isLoading) {
    return (
      <>
        <div className="2xl:container mx-auto py-10 mt-[30px]">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[450px] w-[300px]">
            <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={3} gap={30} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="2xl:container mx-auto py-10 mt-[30px]">
        <div>
          <p className="font-[Inter] font-bold text-[40px] leading-[42px] text-yellow-500 text-center p-8">
            Our Collections
          </p>
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((items) => {
            return (
              <ProductCard
                key={uuidv4()}
                id={items.id}
                product_image={items.productimage}
                product_title={items.producttitle}
                product_rating={items.rating}
                product_price={items.price}
              />
            );
          })}

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-1.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto h-[60%]"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              TIMEWEAR New Track
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹500
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-2.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto h-[60%]"
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-3.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto h-[60%]"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Fastrack Astor FR2 Pro Smart Watch
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹5,480
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-4.jpg"
              alt="Card1 image"
              className="rounded-lg mx-auto h-[60%]"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Casio EDifice EFR-539SG-1AVUDF Chronograph 100M Water Resistant
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹2,999
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-6.jpg"
              alt="Card1 image"
              className="rounded-lg h-[250px] w-[200px] mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Casio Stainless Steel Men Vintage Digital Grey Dial Unisex
              A-158Wa-1Q (D011)
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹1,695
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-7.jpg"
              alt="Card1 image"
              className="mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              NoiseFit Halo 1.43" AMOLED Display, Bluetooth Calling Round Dial
              Smart Watch
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹2,999
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-8.jpg"
              alt="Card1 image"
              className="mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Fastrack Limitless Glide Smart Watch, Advanced UltraVU HD Display
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹1,299
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

          <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
            <img
              src="https://ik.imagekit.io/kathiravan/Watches/P-9.jpg"
              alt="Card1 image"
              className="mx-auto"
            />
            <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
              Titan Analog OffWhite Dial Men's Watch NM1712YM02 / NL1712YM02
            </p>
            <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
              ₹1,299
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
      </div>
    </>
  );
};

export default Products;
