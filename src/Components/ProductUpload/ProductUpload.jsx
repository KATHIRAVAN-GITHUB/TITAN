import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

const ProductUpload = () => {
  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productTitle", productTitle);
    formData.append("price", price);
    formData.append("image", imageFile); // Append image file

    try {
      await axios.post("http://localhost:2002/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully");
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };
  return (
    <>
      <section className="mt-[70px] py-10">
        <div className="2xl:container mx-auto">
          <div className="w-[30%] mx-auto grid grid-col-1 justify-center items-center shadow-xl p-6 rounded-lg border-black border">
            <form
              className="max-w-sm mx-auto space-y-10 flex flex-col "
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="mb-5">
                <label
                  className="block mb-2 font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="file_input"
                  onChange={handleFileChange}
                  required
                  type="file"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="email"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Watch Name"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 font-[Inter] font-normal text-[18px] leading-[22px] text-[#183A57]"
                >
                  Product Price
                </label>
                <input
                  type="text"
                  id="password"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductUpload;
