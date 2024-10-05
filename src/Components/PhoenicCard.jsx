import React from "react";
import { NavLink } from "react-router-dom";

const PhoenicCard = ({ image, programName }) => {
  return (
    <div className="md:w-4/12 w-full p-4">
      <div className="  bg-pink rounded-3xl overflow-hidden pb-4 hover:border-[2px] hover:border-darkPurple hover:box-border">
        <img src={image} alt="" className="w-full h-[300px] rounded-xl" />
        <NavLink
          to="/PhoenicKit"
          className="text-white flex mt-4 justify-center underline text-center text-lg font-bold  hover:underline "
        >
          {programName}
        </NavLink>
      </div>
    </div>
  );
};
export default PhoenicCard;
