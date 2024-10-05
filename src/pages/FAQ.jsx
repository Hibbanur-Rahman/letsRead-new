import React, { useEffect, useState } from "react";
import FaqBanner from "../assets/images/faq-banner.jpg";
// import FaqImg2 from "../assets/images/faq2.png";
// import AccordionUse from "../Components/AccordianUsage";

import frequentlyAskedImg from "../assets/images/frequently-asked-question-img.png";

import productSideDesign from "../assets/images/products-side-bottom-design.svg";

import yellowStar from "../assets/images/yellow-star.svg";

const FAQ = () => {
  const [isFaqShow1, setIsFaqShow1] = useState(false);
  const [isFaqShow2, setIsFaqShow2] = useState(false);
  const [isFaqShow3, setIsFaqShow3] = useState(false);
  const [isFaqShow4, setIsFaqShow4] = useState(false);
  const [isFaqShow5, setIsFaqShow5] = useState(false);
  const [isFaqShow6, setIsFaqShow6] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={FaqBanner}
          alt="products-photo"
          className="w-screen md:h-[479px] h-[300px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-16 py-3">
          <h5 className="md:text-3xl text-xl font-bold text-center">FAQ</h5>
        </div>
      </div>
      <div className="md:w-8/12 w-11/12 rounded-3xl py-6 md:px-6 px-3 flex items-center flex-col justify-center relative top-[-50px] bg-[#FFD600] shadow-lg">
        <h1 className="text-center md:block hidden text-black text-4xl font-semibold">
          Frequently Asked Question{" "}
        </h1>
        <h1 className="text-center md:hidden  text-black md:text-4xl text-2xl font-semibold">
          FAQ{" "}
        </h1>
        <p className="text-center md:text-xl text-lg text-gray ">
          Get Answers to Your Common Queries.How does Learn.
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center md:mt-16 mt-0 relative">
        <div className="md:w-11/12 w-full flex md:flex-row flex-col justify-between relative md:mt-16 mt-0">
          <div className="absolute left-[-70px] top-[-70px] h-[200px] w-[200px] -z-10">
            <img src={productSideDesign} alt="" className="w-full h-full" />
          </div>
          <div className="w-4/12 p-8 md:flex hidden">
            <img
              src={frequentlyAskedImg}
              alt=""
              className="rounded-3xl h-[600px] w-full"
            />
          </div>
          <div className="md:w-7/12 w-full md:px-0 px-3 md:mb-0 mb-8">
            <div className="faq-item w-full my-4">
              <div
                className={`faq-question shadow-xl transition-all p-4 cursor-pointer  border-[1px] border-[#969696] flex items-center justify-between ${
                  isFaqShow1
                    ? "rounded-3xl rounded-tr-none rounded-bl-none bg-darkPurple text-white font-bold"
                    : "rounded-xl"
                }`}
                onClick={() => setIsFaqShow1(!isFaqShow1)}
              >
                <p className="text-xl">
                  1. How does Let&apos;s Read teach reading skills?
                </p>
                <i className="bi bi-chevron-down text-2xl font-bold"></i>
              </div>
              <div
                className={`faq-answer  items-center p-2 border-[1px] rounded-lg  mt-3 shadow-lg ${
                  isFaqShow1 ? "flex" : "hidden"
                }`}
              >
                <p className="text-xl">
                  {" "}
                  Let&apos;s Read adopts a holistic method, integrating engaging
                  materials and interactive activities for a comprehensive
                  learning experience.
                </p>
              </div>
            </div>
            <div className="faq-item w-full my-4">
              <div
                className={`faq-question shadow-xl transition-all p-4 cursor-pointer  border-[1px] border-[#969696] flex items-center justify-between ${
                  isFaqShow2
                    ? "rounded-3xl rounded-tr-none rounded-bl-none bg-darkPurple text-white font-bold"
                    : "rounded-xl"
                }`}
                onClick={() => setIsFaqShow2(!isFaqShow2)}
              >
                <p className="text-xl">
                  2. How Can I track my child&apos;s progress with Let&apos;s
                  Read?
                </p>
                <i className="bi bi-chevron-down text-2xl font-bold"></i>
              </div>
              <div
                className={`faq-answer  items-center p-2 border-[1px] rounded-lg  mt-3 shadow-lg ${
                  isFaqShow2 ? "flex" : "hidden"
                }`}
              >
                <p className="text-xl">
                  {" "}
                  Let&apos;s Read adopts a holistic method, integrating engaging
                  materials and interactive activities for a comprehensive
                  learning experience.
                </p>
              </div>
            </div>
            <div className="faq-item w-full my-4">
              <div
                className={`faq-question shadow-xl transition-all p-4 cursor-pointer  border-[1px] border-[#969696] flex items-center justify-between ${
                  isFaqShow3
                    ? "rounded-3xl rounded-tr-none rounded-bl-none bg-darkPurple text-white font-bold"
                    : "rounded-xl"
                }`}
                onClick={() => setIsFaqShow3(!isFaqShow3)}
              >
                <p className="text-xl">
                  3. Is Let&apos;s Read suitable for children of all ages?
                </p>
                <i className="bi bi-chevron-down text-2xl font-bold"></i>
              </div>
              <div
                className={`faq-answer  items-center p-2 border-[1px] rounded-lg  mt-3 shadow-lg ${
                  isFaqShow3 ? "flex" : "hidden"
                }`}
              >
                <p className="text-xl">
                  {" "}
                  Let&apos;s Read adopts a holistic method, integrating engaging
                  materials and interactive activities for a comprehensive
                  learning experience.
                </p>
              </div>
            </div>
            <div className="faq-item w-full my-4">
              <div
                className={`faq-question shadow-xl transition-all p-4 cursor-pointer  border-[1px] border-[#969696] flex items-center justify-between ${
                  isFaqShow4
                    ? "rounded-3xl rounded-tr-none rounded-bl-none bg-darkPurple text-white font-bold"
                    : "rounded-xl"
                }`}
                onClick={() => setIsFaqShow4(!isFaqShow4)}
              >
                <p className="text-xl">
                  4. How Can I get started with Let&apos;s Read at home?
                </p>
                <i className="bi bi-chevron-down text-2xl font-bold"></i>
              </div>
              <div
                className={`faq-answer  items-center p-2 border-[1px] rounded-lg  mt-3 shadow-lg ${
                  isFaqShow4 ? "flex" : "hidden"
                }`}
              >
                <p className="text-xl">
                  {" "}
                  Let&apos;s Read adopts a holistic method, integrating engaging
                  materials and interactive activities for a comprehensive
                  learning experience.
                </p>
              </div>
            </div>
            <div className="faq-item w-full my-4">
              <div
                className={`faq-question shadow-xl transition-all p-4 cursor-pointer  border-[1px] border-[#969696] flex items-center justify-between ${
                  isFaqShow5
                    ? "rounded-3xl rounded-tr-none rounded-bl-none bg-darkPurple text-white font-bold"
                    : "rounded-xl"
                }`}
                onClick={() => setIsFaqShow5(!isFaqShow5)}
              >
                <p className="text-xl">
                  15 HAre there any teacher training resources available?
                </p>
                <i className="bi bi-chevron-down text-2xl font-bold"></i>
              </div>
              <div
                className={`faq-answer  items-center p-2 border-[1px] rounded-lg  mt-3 shadow-lg ${
                  isFaqShow5 ? "flex" : "hidden"
                }`}
              >
                <p className="text-xl">
                  {" "}
                  Let&apos;s Read adopts a holistic method, integrating engaging
                  materials and interactive activities for a comprehensive
                  learning experience.
                </p>
              </div>
            </div>
            <div className="faq-item w-full my-4">
              <div
                className={`faq-question shadow-xl transition-all p-4 cursor-pointer  border-[1px] border-[#969696] flex items-center justify-between ${
                  isFaqShow6
                    ? "rounded-3xl rounded-tr-none rounded-bl-none bg-darkPurple text-white font-bold"
                    : "rounded-xl"
                }`}
                onClick={() => setIsFaqShow6(!isFaqShow6)}
              >
                <p className="text-xl">
                  6.Is Let&apos;s Read suitable for non-English setting?
                </p>
                <i className="bi bi-chevron-down text-2xl font-bold"></i>
              </div>
              <div
                className={`faq-answer  items-center p-2 border-[1px] rounded-lg  mt-3 shadow-lg ${
                  isFaqShow6 ? "flex" : "hidden"
                }`}
              >
                <p className="text-xl">
                  {" "}
                  Let&apos;s Read adopts a holistic method, integrating engaging
                  materials and interactive activities for a comprehensive
                  learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-50px] right-[-50px] h-[150px] w-[150px] md:flex hidden">
          <img src={yellowStar} alt="star" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};
export default FAQ;
