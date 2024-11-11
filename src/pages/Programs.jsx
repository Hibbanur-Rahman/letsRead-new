import React, { useEffect } from "react";
import FaqBanner from "../assets/images/faq-banner.jpg";
import PhoenicCard from "../Components/PhoenicCard";
import programBgDesign from "../assets/images/program-bg-design.svg";

import programImg1 from "../assets/images/program-img-1.png";
import programImg2 from "../assets/images/program-img-2.png";
import programImg3 from "../assets/images/program-img-3.png";
import programImg4 from "../assets/images/program-img-4.png";

import productSideDesign from "../assets/images/products-side-bottom-design.svg";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const navigate = useNavigate();
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={FaqBanner}
          alt="products-photo"
          className="w-screen md:h-[479px] h-[300px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-16 py-3">
          <h5 className="md:text-3xl text-2xl font-bold text-center">
            Our Programs
          </h5>
        </div>
      </div>
      <div className="md:w-8/12 w-11/12 rounded-3xl py-6 md:px-6 px-3 flex items-center flex-col justify-center relative top-[-50px] bg-darkPurple shadow-lg">
        <p className="md:text-xl text-white ">
          Fostering a lifelong passion for reading in young minds through our
          comprehensive Foundation Program.
        </p>
      </div>
      <div className="w-full md:mb-0 mb-8 bg-[#FFF7CE] bg-cover relative flex items-center justify-center">
        <img src={programBgDesign} alt="" className="w-full md:flex hidden" />
        <div className="md:w-10/12 flex md:flex-row flex-col justify-center flex-wrap md:absolute">
          {programData &&
            programData.map((item, index) => (
              <PhoenicCard
                key={index}
                image={item.img}
                levelHead={item.levelHead}
                desc={item.desc}
              />
            ))}
        </div>

        <div className="absolute right-[-30px] bottom-[70px] h-[200px] w-[200px] -z-11">
          <img src={productSideDesign} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
