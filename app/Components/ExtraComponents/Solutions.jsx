"use client";

import Image from "next/image";

const solutionImages = [
  "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817496/WhatsApp_Image_2025-08-06_at_7.24.23_PM_zjjrxl.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072465/WhatsApp_Image_2025-08-13_at_1.25.08_PM_fenthf.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755229419/WhatsApp_Image_2025-08-14_at_2.25.22_PM_aphhyq.jpg",
  "/360_F_407042220_gd0K3aNiJQTFPwg7BRw6p4Zlm75LEzRl.webp",
  "/photo-1574323347407-f5e1ad6d020b.avif",
];

const Solutions = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#8E54FF] mb-10">
        Solutions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
        {solutionImages.map((src, index) => (
          <div key={index} className="w-full">
            <div className="w-full h-48 relative rounded overflow-hidden">
              <Image
                src={src}
                alt={`Solution ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
