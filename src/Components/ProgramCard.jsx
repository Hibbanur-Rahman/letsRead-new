import React from "react";

const ProgramCard = ({ image, levelHead, desc }) => {
  return (
    <div className="md:w-3/12 w-full flex items-center justify-center overflow-hidden ">
      <div className="rounded-2xl shadow-lg bg-white flex flex-col justify-between items-center md:w-full w-10/12 h-full pb-5">
        <div className="w-full py-3 bg-pink rounded-tl-xl rounded-tr-xl">
          <h1 className="text-center font-bold text-white text-lg">{levelHead}</h1>
        </div>
        <img
          src={image}
          alt={levelHead}
          className="md:mt-2 md:w-full w-full h-[300px] object-contain md:h-[250px]"
        />
        <p className="md:mx-4 md:px-0 px-3 mt-4 text-center text-gray-700">{desc}</p>
        <button className="md:mx-16 mt-6 px-6 py-2 bg-pink rounded-lg text-white font-semibold hover:bg-pink-dark transition-all">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
