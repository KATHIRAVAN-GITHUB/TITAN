import { useEffect, useState } from "react";
import { Link } from "react-router";

const HeroSection = () => {
  const images = [
    "https://ik.imagekit.io/kathiravan/Watches/01.jpg",
    "https://ik.imagekit.io/kathiravan/Watches/02.jpg",
    "https://ik.imagekit.io/kathiravan/Watches/04.jpg",
    "https://ik.imagekit.io/kathiravan/Watches/05.jpg",
    "https://ik.imagekit.io/kathiravan/Watches/06.jpg",
    "https://ik.imagekit.io/kathiravan/Watches/02.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2; // Show 2 images at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + visibleCount) % images.length
      );
    }, 2000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="mx-auto bg-main">
        <video
          src="https://ik.imagekit.io/kathiravan/Watches/Hero-bg.mp4"
          autoPlay
          loop
          muted
          className="border-black border shadow-2xl rounded-xl"
        />
        <div className="bg-content space-y-4">
          <h1 className="font-[Inter] font-extrabold text-center text-[50px] leading-[52px]">
            Elevate Every Moment.
          </h1>
          <Link
            to="/product"
            className="transform transition duration-200 hover:scale-110 font-[Inter] font-medium text-center text-[20px] leading-[32px] p-2 border-yellow-500 border rounded-lg"
          >
            SHOP NOW
          </Link>
          
        </div>
      </div>

      {/* Auto-Sliding Carousel */}
      <div className="carousel rounded-xl w-[75%] h-[80%] mx-auto  shadow-2xl overflow-hidden p-2">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="carousel-item w-1/2 flex-shrink-0 px-2">
              <img
                src={img}
                className="w-full border-2 border-black shadow-lg rounded-lg"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
