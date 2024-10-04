import React, { useEffect } from "react";
import EnquirePng from "../assets/images/Enquire.png";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{ faCircleXmark } from "@fortawesome/free-regular-svg-icons";


const Enquire = () => {
   useEffect(()=>{
    window.scrollTo(0, 0);
   },[])
  return (
    <div className="flex justify-center content-center">
      <div className="w-[750px] h-[880px] bg-darkPurple absolute top-[70px]  rounded-xl ">
      <button 
       className="absolute  right-2 top-1">
        <FontAwesomeIcon icon={faCircleXmark} className="w-[30px] h-[30px] text-white bg-pink" />
        </button>
        <img
          src={EnquirePng}
          alt="aboutimg"
          className="h-[300px] object-cover object-center overflow-hidden  "
        />
        <div className="w-[700px] h-[100px]  bg-pink rounded-2xl absolute top-[250px] mx-6">
          <h1 className="text-center mt-2 text-[26px] font-bold text-white">
            {" "}
            Transformative Education From The Star
          </h1>
          <p className="text-center text-white w-6/12 mx-auto">
            Please Complete The form below, and we will get back to you within
            24 hours.
          </p>
        </div>
        <form className="flex flex-col gap-[14px] justify-center items-center mt-20">
          <input
            type="text"
            placeholder="Saif"
            className="w-6/12 py-2 px-4 rounded-[50px] text-white bg-purple-800"
          />
          <input
            type="text"
            placeholder="Enter Your Email:"
            className="w-6/12 py-2 px-4 rounded-[50px] "
          />
          <input
            type="text"
            placeholder="Enter Your Mobile Number:"
            className="w-6/12 py-2 px-4 rounded-[50px]  "
          />
          <input
            type="text"
            placeholder="Select Your State:"
            className="w-6/12 py-2 px-4 rounded-[50px]  "
          />
          <input
            type="text"
            placeholder="Enter Your Child Name:"
            className="w-6/12 py-2 px-4 rounded-[50px] "
          />
          <textarea
            id="message"
            rows="4"
            class="block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-6/12"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="bg-yellow-300 w-6/12 py-2 mt-4  rounded-lg font-bold">
            Enquire Now
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Enquire;
