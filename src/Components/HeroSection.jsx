import React from "react";
import { useState } from "react";
import HeroPng from "../assets/images/letsread.png";
import HeroImgMobile from "../assets/images/hero-img-mobile.png";
// import Enquire from "../pages/Enquire";
import EnquirePng from "../assets/images/Enquire.png";

import { Dialog } from "@material-tailwind/react";

import { RxCross2 } from "react-icons/rx";
const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col relative md:mt-0 mt-[60px]">
      <img src={HeroPng} alt="img" className="w-full md:flex hidden" />
      <img src={HeroImgMobile} alt="img" className="w-full md:hidden" />

      <div className="absolute md:px-0 px-4 md:top-[260px] top-[50px] md:left-[200px]">
        <h1 className="text-white md:text-5xl text-3xl font-bold">
          We Prepare To Ignite{" "}
        </h1>
        <h1 className="text-white md:text-5xl text-3xl font-bold md:mt-4">
          The Joy of <span className="text-yellow ">Reading</span>
        </h1>
        <p className="text-white md:text-lg text-sm md:w-7/12 mt-5">
        Kinesthetic Reading kits offer young childrens the Tools and means to Ignite a Passion for Lifelong Learning.
        </p>
        <p className="text-white md:text-2xl text-sm md:w-7/12 mt-5">
          100+ Schools &gt;&gt; 10000+ Teachers &gt;&gt; 50000+ Students{" "}
        </p>
        <button
          onClick={toggleModalOpen}
          className="bg-yellow px-4 py-2 mt-4  rounded-lg font-bold"
        >
          Enquire Now
        </button>
      </div>
      <Dialog
        open={modalOpen}
        handler={toggleModalOpen}
        className="flex justify-center overflow-scroll content-center absolute rounded-2xl w-full h-full "
      >
        <div className="w-full flex flex-col items-center md:h-[880px] h-max md:pb-0 pb-4  bg-white relative  rounded-2xl overflow-hidden shadow-2xl">
          <button
            className="absolute  right-2 top-1 bg-white rounded-full shadow-xl"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <RxCross2 className="text-3xl text-pink font-bold" />
          </button>
          <img
            src={EnquirePng}
            alt="aboutimg"
            className="md:h-[300px] h-[150px] w-full object-cover object-center overflow-hidden  "
          />
          <div className="w-11/12 py-4 md:px-0 px-3   bg-pink rounded-3xl md:absolute relative md:mt-0 mt-[-60px] md:top-[250px] md:mx-6">
            <h1 className="text-center  md:text-[26px] text-base font-bold text-white">
              {" "}
              Transformative Education From The Star
            </h1>
            <p className="text-center text-white md:w-6/12 w-full md:text-base text-xs mx-auto">
              Please Complete The form below, and we will get back to you within
              24 hours.
            </p>
          </div>
          <form className="w-full  md:px-0 px-3 flex flex-col gap-[14px] justify-center items-center md:mt-20 mt-4">
            <input
              type="text"
              placeholder="Saif"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              type="text"
              placeholder="Enter Your Email:"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              type="text"
              placeholder="Enter Your Mobile Number:"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              type="text"
              placeholder="Select Your State:"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <input
              type="text"
              placeholder="Enter Your Child Name:"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black "
            />
            <textarea
              id="message"
              rows="4"
              className="md:w-8/12 w-full py-2 px-4 rounded-xl border-[1px] border-[#AEAEAE] text-black  resize-none"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="bg-pink text-white md:w-8/12 w-full py-2 mt-4  rounded-2xl font-bold">
              Enquire Now
            </button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};
export default HeroSection;
