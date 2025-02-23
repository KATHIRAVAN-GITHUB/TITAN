import React from "react";
import { Link } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = (props) => {
  const formatPrice = (num) => new Intl.NumberFormat("en-IN").format(num);

  return (
    <>
      <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
        {/* <img
          src={`${props.product_image}?timestamp=${new Date().getTime()}`}
          alt="Card1 image"
          className="rounded-lg mx-auto h-[60%]"
        /> */}
        <LazyLoadImage
          alt="Product Card image"
          effect="blur"
          className="rounded-lg mx-auto h-[60%]"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
          src={`${props.product_image}?timestamp=${new Date().getTime()}`}
        />
        <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
          {props.product_title}
        </p>
        <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
          ₹{formatPrice(props.product_price)}
        </p>
        <div className="flex flex-row justify-between gap-4">
          <button className="flex flex-row items-center gap-1 fond-[Roboto] font-normal text-[18px] leading-[28px] text-black">
            Rating - {props.product_rating}
          </button>
          <Link to={"/product/" + props.id}>
            <button className="flex flex-row items-center gap-1 fond-[Roboto] font-medium text-[16px] leading-[21px] rounded-lg p-2 bg-[#BDA000] text-white">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
