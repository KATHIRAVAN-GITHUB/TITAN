import React from "react";
import { Link } from "react-router";

const ProductCard = (props) => {
  return (
    <>
      <div className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl p-6 space-y-2 rounded-lg border-black border h-[450px] w-[300px]">
        <img
          src={props.product_image}
          alt="Card1 image"
          className="rounded-lg mx-auto h-[250px] w-[250px]"
        />
        <p className="font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]">
          {props.product_title}
        </p>
        <p className="flex flex-row items-center gap-1 fond-[Roboto] font-bold text-[20px] leading-[28px] text-black">
          ₹{props.product_price}
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
