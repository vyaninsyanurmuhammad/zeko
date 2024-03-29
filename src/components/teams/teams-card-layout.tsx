import Image from "next/image";
import React from "react";

const TeamsCardLayout = ({
  color,
  image,
  name,
  position,
  location,
}: {
  color: string;
  image: string;
  name: string;
  position: string;
  location: string;
}) => {
  return (
    <>
      <div
        className={`w-full flex flex-row px-12 lg:px-24 py-6 md:py-12 justify-between items-center group ${color} gap-6 lg:gap-10 transition-all duration-200 ease-in-out`}
      >
        <div className="bg-slate-blue-900 w-14 h-14 lg:h-20 lg:w-20 rounded-full flex shrink-0 relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="!relative h-full w-full object-cover"
            sizes="100%"
            fill
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-1 sm:gap-2 lg:gap-10 overflow-hidden">
          <span className="w-full text-white text-xl sm:text-2xl lg:text-4xl font-semibold truncate">
            {name}
          </span>
          <div className="w-full flex justify-start lg:justify-center items-center text-start lg:text-center overflow-hidden">
            <span className="w-full text-slate-400 group-hover:text-slate-100 text-sm sm:text-base lg:text-3xl font-medium truncate">
              {position}
            </span>
          </div>
        </div>

        <span className="hidden sm:flex w-1/2 justify-end items-center text-white text-xl lg:text-4xl font-medium text-end">
          {location}
        </span>
      </div>
    </>
  );
};

export default TeamsCardLayout;
