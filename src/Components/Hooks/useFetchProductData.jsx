import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

const useFetchProductData = () => {
  const [isLoading, setisloading] = useState(false);
  const data = useParams();
  const [productData, setproductsdata] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, [data]);

  const fetchProductData = async () => {
    try {
      setisloading(true);
      const res = await fetch("https://titan-api-ffre.onrender.com/GetCardByid/" + data.id, {
        method: "GET", // Since your backend expects a POST request
        headers: { "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "true" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const productsdata = await res.json();
      setproductsdata(productsdata); // No need for data.GetCard, just set the array directly
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setisloading(false);
    }
  };

  return { isLoading, productData };
};

export default useFetchProductData;
