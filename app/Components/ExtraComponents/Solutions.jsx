"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const inputImages = [
  "/NewImages/garlicinput.png",
  "/NewImages/rowinput.png",
  // "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754975340/WhatsApp_Image_2025-08-12_at_10.31.05_AM_ux8vyr.jpg",
  "/NewImages/plasticinput.png",
  "/NewImages/somethinginput.png",
  "/NewImages/roundinput.png",
  "/NewImages/final.png"

];

const acceptImages = [
  "/NewImages/garlicaccpert.png",
  "/NewImages/rowaccept.png",
  // "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754813095/WhatsApp_Image_2025-08-06_at_7.24.04_PM_1_xgmhqp.jpg",
  "/NewImages/plasticaccept.png",
  "/NewImages/somethingaccept.png",
  "/NewImages/roundaccept.png",
  "/NewImages/chillesaccept.png"
];

const rejectionImages = [
  "/NewImages/garlicrejection.png",
  "/NewImages/rowRejection.png",
  // "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754813400/WhatsApp_Image_2025-08-06_at_7.24.05_PM_v3nyya.jpg",
  "/NewImages/plasticrejection.png",
  "/NewImages/somethingrejection.png",
  "/NewImages/roundrejection.png",
  "/NewImages/chillesrejection.png"
  
];

const Solutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(inputImages.length, acceptImages.length, rejectionImages.length));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#8E54FF] mb-10">
        Solutions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Input */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Input</h3>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={inputImages[currentIndex % inputImages.length]}
              alt="Input image"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Accept */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Accept</h3>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={acceptImages[currentIndex % acceptImages.length]}
              alt="Accept image"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Rejection */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Rejection</h3>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={rejectionImages[currentIndex % rejectionImages.length]}
              alt="Rejection image"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
