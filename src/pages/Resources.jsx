import React, { useEffect } from "react";
import ResourcesImg from "../assets/images/Resources.png";
import { NavLink } from "react-router-dom";
import Resources2 from "../assets/images/resources2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonDress,
  // faPeopleGroup,
  // faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import EllipseImg from "../assets/images/Ellipse 33.png";

const Resources = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <div>
        <img src={ResourcesImg} alt="resoucrepng" className="w-screen" />
      </div>
      <nav className=" flex gap-[20px] font-bold  mt-2 mx-32">
        <NavLink className="underline text-pink">Products</NavLink>
        <NavLink>Programs</NavLink>
        <NavLink>0-2y</NavLink>
        <NavLink>0-4y</NavLink>
      </nav>
      <div className="w-[1360px] h-[3px] bg-gray-500 mx-auto"></div>
      <div className="mt-4 flex justify-between">
        <button className="bg-yellow px-32 py-2 ml-20 rounded-lg font-bold">
          Filter
        </button>
        <div className="  mr-28 flex border border-black rounded-tr-lg rounded-br-lg">
          <input
            type="text"
            placeholder="search any Keyword"
            className="px-8 "
          />
          <button className="bg-black px-8 rounded-tr-lg rounded-br-lg"></button>
        </div>
      </div>
      <div className="flex justify-between mr-24">
        <div className="w-[350px] h-[620px] ml-20 mt-8  mb-32 rounded-3xl border border-black ">
          <div className="p-3">
            <h1 className=" text-xl font-bold"> Science Experiment Kit</h1>
            <p className="text-gray-500">july 13, 2024</p>
            <img src={Resources2} alt="reasources-png" className="mt-4" />
            <h2 className="mt-2 text-lg font-bold">
              How to Choose Right Kid's Kit for Your Child
            </h2>
            <div className="text-gray-500">
              <p>
                Offer tips on selecting kits based on a child's age and
                developmental stage.
              </p>
              <p>
                Guide parents on choosing kits that align with their child's
                interests.
              </p>
              <p>
                Discuss what to look for in kits that provide educational
                benefits.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap">
              <span className="bg-violet-800 px-2 py-1 rounded-2xl text-white ">
                Encourage curosity
              </span>
              <span className="bg-violet-800 px-2 py-1 rounded-2xl ml-2 text-white">
                Problem Solving
              </span>
              <span className="bg-violet-800 px-2 py-1 rounded-2xl mt-2 text-white">
                {" "}
                Teaches
              </span>
            </div>
            <button className="bg-yellow ml-60 px-2 rounded-lg ">
              see more
            </button>
          </div>
          <div className="w-[348px] h-[65px] pt-3 px-3 bg-violet-800 rounded-br-3xl rounded-bl-3xl flex justify-between">
            <div className="flex gap-[30px]">
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>{" "}
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>{" "}
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>
            </div>
            <div className="flex items-center gap-[5px]">
              <p>Eram</p>
              <img src={EllipseImg} alt="ellipse" />
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[620px] ml-20 mt-8  mb-32 rounded-3xl border border-black ">
          <div className="p-3">
            <h1 className=" text-xl font-bold"> Science Experiment Kit</h1>
            <p className="text-gray-500">july 13, 2024</p>
            <img src={Resources2} alt="reasources-png" className="mt-4" />
            <h2 className="mt-2 text-lg font-bold">
              How to Choose Right Kid's Kit for Your Child
            </h2>
            <div className="text-gray-500">
              <p>
                Offer tips on selecting kits based on a child's age and
                developmental stage.
              </p>
              <p>
                Guide parents on choosing kits that align with their child's
                interests.
              </p>
              <p>
                Discuss what to look for in kits that provide educational
                benefits.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap">
              <span className="bg-darkPurple px-2 py-1 rounded-2xl text-white ">
                Encourage curosity
              </span>
              <span className="bg-darkPurple px-2 py-1 rounded-2xl ml-2 text-white">
                Problem Solving
              </span>
              <span className="bg-darkPurple px-2 py-1 rounded-2xl mt-2 text-white">
                {" "}
                Teaches
              </span>
            </div>
            <button className="bg-yellow ml-60 px-2 rounded-lg ">
              see more
            </button>
          </div>
          <div className="w-[348px] h-[65px] pt-3 px-3 bg-violet-800 rounded-br-3xl rounded-bl-3xl flex justify-between">
            <div className="flex gap-[30px]">
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  className="fa-xl text-white"
                />
                <p className="text-white">50</p>
              </div>
            </div>
            <div className="flex items-center gap-[5px]">
              <p>Eram</p>
              <img src={EllipseImg} alt="ellipse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
