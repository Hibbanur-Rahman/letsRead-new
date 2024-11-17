import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, heading, desc, icon, item }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const handleNavigate = () => {
    navigate("/productView", {
      state: {
        item: item,
      },
    });
  };
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="md:w-3/12 flex md:px-2 px-8">
      <div className=" w-full flex flex-col  rounded-xl overflow-hidden border-[1px] border-black m-0 p-0 relative bg-[#551F64]">
        <div className="h-[200px]">
          <img
            src={image}
            alt="frame"
            className="object-cover object-bottom w-full h-[200px]"
          />
        </div>
        <div className="w-full flex flex-col h-full justify-between bg-[#551F64] rounded-t-3xl relative top-[-20px] p-4 ">
          <div className="w-full">
            {/* <img
              src={icon}
              alt="vector"
              className="w-[70px] h-[70px] mx-auto pt-4 object-center"
            /> */}
            <h1 className="mt-4 text-white text-xl underline font-bold">
              {heading}
            </h1>
            <div className="max-h-[200px] h-[200px] overflow-scroll mt-4">
              <p className="text-white text-justify">
                {isExpanded ? desc : `${desc.slice(0, 300)}...`}
              </p>
              {desc.length > 300 && (
                <button
                  className="text-yellow underline mt-2"
                  onClick={toggleReadMore}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center align-baseline">
            <button
              className="bg-yellow px-8 py-2 mr-10 rounded-lg font-bold mt-3 ml-12"
              onClick={() => handleNavigate()}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
