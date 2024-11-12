import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import programImg1 from "../assets/images/program-img-1.png";
import programImg2 from "../assets/images/program-img-2.png";
import programImg3 from "../assets/images/program-img-3.png";
import programImg4 from "../assets/images/program-img-4.png";

import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import productSideDesign from "../assets/images/products-side-bottom-design.svg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
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

  const handleNavigate = (item) => {
    navigate("/phoenicKit",{ state: { image: item.img, levelHead: item.levelHead, desc: item.desc },});
  };

  return (
    <div className="Footer  flex flex-col relative md:mt-[250px] mt-8 w-full ">
      {/* <Arc width={1980} height={500} color="#3E0085" /> */}
      <div
        className="arc absolute md:top-[-200px] top-[-50px] md:left-[-200px] left-[-50px] -z-[10] md:h-[500px] h-[200px] w-[130%] rounded-[100%] "
        style={{ background: "rgb(45,1,56)" }}
      ></div>
      <div
        className="w-full flex md:flex-row flex-col justify-between text-white md:px-8 px-3 gap-[50px] pb-24"
        style={{ background: "rgb(45,1,56)" }}
      >
        <div className="md:w-2/12 w-full px-5">
          <img src={logo} alt="img" className="w-full h-[90px] p-0 m-0" />
          {/* <p className="text-white md:mb-6 mt-4 md:mt-6">
            Enroll Your Child in a Session now!
          </p> */}
          <p className="text-white md:mb-6 mb-3 md:text-xl">
            Let&apos;s Read: Empowering young minds through Literacy.
          </p>
          <div className=" flex gap-1">
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="bg-black shadow-xl rounded-full p-3 m-0 flex items-center justify-center">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
        <div className="md:w-4/12 w-full gap-[30px] flex justify-between">
          <div className=" w-6/12 ">
            <h1 className="md:text-3xl text-lg font-bold  ">Let's Read Books</h1>
            <div className="md:w-[100px] w-[50px] h-[3px] rounded-lg mt-1 bg-yellow"></div>
            <ul className=" list-disc md:mt-16 mt-4 md:ps-0 ps-4">
              <li className=" md:text-lg text-sm my-2">
                Let&apos;s Read Educator&apos;s Handbook
              </li>
              <li className=" md:text-lg text-sm my-2">Nursery School Reader & workbook</li>
              <li className=" md:text-lg text-sm my-2">Jr. Kg School Reader & workbook</li>
              <li className=" md:text-lg text-sm my-2">Sr. Kg School Reader & workbook</li>
              <li className=" md:text-lg text-sm my-2">Grade 1 School Reader & workbook</li>
              <li className=" md:text-lg text-sm my-2">Let’s Read Board Game</li>
            </ul>
          </div>
          <div className=" w-6/12 ">
            <h1 className="md:text-3xl text-lg font-bold">Programs</h1>
            <div className="md:w-[100px] w-[50px] h-[3px] rounded-lg mt-1 bg-yellow"></div>

            <ul className=" list-disc md:mt-16 mt-4">
              {
                Array.isArray(programData) && programData.length > 0 && programData.map((item)=> (
                  <li className="md:text-lg text-sm my-2" onClick={()=> handleNavigate(item)}>{item.levelHead} </li>
                ))
              }
              {/* <li className="md:text-lg text-sm my-2">Level 0 Beginners Kit </li>
              <li className="md:text-lg text-sm my-2">Level 1 Fluency Kit </li>
              <li className="md:text-lg text-sm my-2 ">Level 2 Proficiency Kit </li>
              <li className="md:text-lg text-sm my-2">Level 3 Mastery Kit </li> */}
            </ul>
          </div>
        </div>

        <div className="md:w-1/12 md:flex flex-col hidden">
          <h1 className="text-3xl font-bold">Company</h1>
          <div className="w-[100px] h-[3px] rounded-lg mt-1 bg-yellow"></div>

          <ul className="list-disc mt-16 px-4 ">
            <li className="text-lg my-2 cursor-pointer" onClick={() => navigate("/about")}>About Us </li>
            <li className="text-lg my-2 cursor-pointer" onClick={() => navigate("/products")} >Products </li>
            <li className="text-lg my-2 cursor-pointer" onClick={() => navigate("/programs")}>Programs </li>
            <li className="text-lg my-2 cursor-pointer" onClick={() => navigate("/resources")} >Resources </li>
            <li className="text-lg my-2 cursor-pointer" onClick={() => navigate("/contact")} >Contact Us </li>
            <li className="text-lg my-2 cursor-pointer" onClick={() => navigate("/blogs")} >Blogs </li>
          </ul>
        </div>
        <div className="md:w-3/12 w-full">
          <h1 className="md:text-3xl text-lg font-bold">Get In Touch</h1>
          <div className="md:w-[150px] w-[90px] h-[3px] rounded-lg mt-1 bg-yellow"></div>

          <div className="md:mt-16 mt-6 mb-4 flex gap-4 cursor-pointer">
            <FontAwesomeIcon icon={faPhone} className="md:text-2xl text-lg" />
            <p className="md:text-lg text-sm">Phone: +91-7058587080</p>
          </div>
          <div className="my-4 flex gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="md:text-2xl text-lg cursor-pointer"
            />
            <a href="sa5194007@gmail.com" className="md:text-lg text-sm">
              sales@letsreadindia.in
            </a>
          </div>
          <div className="my-4 flex gap-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="md:text-2xl text-lg cursor-pointer"
            />
            <p className="w-full md:text-lg text-sm">
              Kondhwa Budhrukh, Pune, Maharashtra, India-411048
            </p>
          </div>
          <p className="my-4 md:text-lg text-sm">
            Monday To Friday : 8:30AM - 02:PM Saturday, Sunday:Close{" "}
          </p>
        </div>
      </div>
      <div className="absolute left-[-70px] bottom-[0px] h-[200px] w-[200px] z-[1]">
        <img src={productSideDesign} alt="" className="w-full h-full" />
      </div>
      <div
        className="w-full flex justify-between h-[50px] items-center md:px-0 px-3"
        style={{
          background:
            "linear-gradient(90deg, rgba(147,22,182,1) 0%, rgba(65,10,80,1) 100%)",
        }}
      >
        <p className="text-white md:px-6 md:text-base text-xs">
          © 2024 . All Right Reserved to{" "}
          <span className="underline">Let&apos;s Read</span>
        </p>
        <p className="text-white md:px-6  underline">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
