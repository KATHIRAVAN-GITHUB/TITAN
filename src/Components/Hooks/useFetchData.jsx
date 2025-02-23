import React, { useState, useEffect } from "react";

const useFetchData = () => {
  const [isLoading, setisloading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      setisloading(true);
      const res = await fetch("http://localhost:2002/GetCard", {
        method: "POST", // Since your backend expects a POST request
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setData(data); // No need for data.GetCard, just set the array directly
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setisloading(false);
    }
  };

  return { data };
};

export default useFetchData;
