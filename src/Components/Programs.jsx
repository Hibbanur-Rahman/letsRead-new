import React from "react";
import Frame from "../assets/images/ProgFrame.png";
import ProgramCard from "./ProgramCard";
import headerDesign from "../assets/images/program-header-design.svg";
import star from "../assets/images/star.svg";
import programImg1 from "../assets/images/program-img-1.png";
import programImg2 from "../assets/images/program-img-2.png";
import programImg3 from "../assets/images/program-img-3.png";
import programImg4 from "../assets/images/program-img-4.png";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate=useNavigate();
  const programData = [
    {
      img: programImg1,
      levelHead: "Level 0 Beginners Kit",
      desc: "Packed with engaging activities, It is the perfect start to their Reading journey.",
    },
    {
      img: programImg2,
      levelHead: "Level 1 Fluency Kit",
      desc: "Empower Beginner with Level 1 Phonics Kit. Explore engaging CVC  to build and read through Play..",
    },
    {
      img: programImg3,
      levelHead: "Level 2 Proficiency Kit",
      desc: "Elevate Phonics Proficiency: Master blends, Digraphs and Magic. Build Reading with Comprehension.",
    },
    {
      img: programImg4,
      levelHead: "Level 3 Mastery Kit",
      desc: "Elevate Reading Confidence: Master advanced phonics and tricky Spelling Rules. Develop fluency and speed in Reading Stories..",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full md:mt-0 mt-4">
      <div className="relative w-auto">
        <h1 className="text-center text-3xl md:text-5xl font-bold leading-none m-0 p-0">
          Our Programs
        </h1>
        <div className="flex justify-center items-center relative w-full m-0 p-0">
          <div className="relative top-[-10px] right-[-10px] h-[3px] md:w-[300px] w-[200px] bg-pink"></div>
          <img
            src={headerDesign}
            className="relative h-[50px] w-[50px]"
            alt="header design"
          />
        </div>
        <p className="md:mt-12 mt-3 text-center font-semibold text-xl md:text-4xl">
          Your Ally for Academic Success
        </p>
        <div
          className="flex justify-center items-center w-full pt-8 mt-8 bg-cover"
          style={{ backgroundImage: `url(${Frame})` }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* For larger screens (md and above) */}
            <div className="md:flex hidden items-start gap-8 md:gap-12 lg:gap-[30px] mx-6 md:mx-12 lg:mx-28">
              {programData &&
                programData.map((item, index) => (
                  <ProgramCard
                    key={index}
                    image={item.img}
                    levelHead={item.levelHead}
                    desc={item.desc}
                  />
                ))}
            </div>

            {/* Carousal for smaller screens */}
            <div className="flex md:hidden w-full">
              <Carousel
                className="rounded-xl w-full overflow-y-visible pb-[80px]"
                prevArrow={({ handlePrev }) => (
                  <button
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-[0px] -translate-y-2/4"
                  >
                    <GrFormPrevious className="text-4xl text-gray hover:text-pink"/>
                  </button>
                )}
                nextArrow={({ handleNext }) => (
                  <button
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-[0px] -translate-y-2/4"
                  >
                    <GrFormNext className="text-4xl text-gray hover:text-pink"/>
                  </button>
                )}

                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-[0px]  left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-[#FE2260]" : "w-4 bg-[rgba(254,34,96,0.5)]"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {programData &&
                  programData.map((item, index) => (
                    <ProgramCard
                      key={index}
                      image={item.img}
                      levelHead={item.levelHead}
                      desc={item.desc}
                    />
                  ))}
              </Carousel>
            </div>

            <div className="box-design h-[170px] w-[170px] bg-[rgba(255,234,127,255)] rounded-3xl rotate-45 right-[-50%] top-[-100px] relative -z-10"></div>
            <button className="relative md:top-[-100px] md:mt-0 mt-[-150px] top-[-90px] bg-darkPurple text-white font-bold text-lg px-6 py-1 rounded-lg" onClick={()=>navigate('/programs')}>
              Explore Our Program
            </button>
          </div>
        </div>
        <div className="relative top-[-70px] left-[-70px] h-[150px] w-[150px]">
          <img src={star} alt="star" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
