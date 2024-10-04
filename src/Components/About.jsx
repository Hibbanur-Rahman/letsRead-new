import React from "react";
import childPhoto from "../assets/images/about-img.png";
import aboutHeaderDesign from "../assets/images/about-header-design.svg";

const About = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col md:mt-0 mt-[-50px]">
      <h1 className="text-center text-3xl md:text-5xl font-bold leading-none m-0 p-0">
        About Us
      </h1>
      <div className="flex justify-center items-center relative w-full m-0 p-0 ">
        <img
          src={aboutHeaderDesign}
          className="relative h-[80px] w-[65px] left-[-50px]"
          alt="header design"
        />
        <div className="relative left-[-50px] top-[-28px] h-[3px] md:w-[260px] w-[180px] bg-pink"></div>
      </div>{" "}
      <div className="flex w-full md:flex-row flex-col   justify-center relative">
        <div className="circle bg-[#FFD600] md:h-[150px] h-[70px] md:w-[150px] w-[70px] rounded-[55%] m-0 p-0 absolute left-[-40px] -z-10"></div>
        <div className="md:w-6/12 md:p-20 md:px-20 px-4 md:pe-0">
          <img
            src={childPhoto}
            alt="logo"
            className="w-full md:h-[500px]  object-cover object-top overflow-hidden rounded-lg mb-4 "
          />
        </div>

        <div className="md:pt-20 pt-4 ps-8 pe-0 md:w-6/12 ">
          <h3 className="md:text-2xl text-lg w-11/12 font-bold  ">
            In this digital age when children are inclined towards screens, our
            program gives the option of socializing and learning to read through
            play.
          </h3>
          <p className="pt-4 w-11/12 md:text-xl text-sm">
            Let&apos;s Read takes young learners on an exciting journey from
            beginner to proficient readers through engaging games and playful
            activities. Our books and games are designed to boost confidence and
            self-esteem, fostering a love for reading from an early age. The
            hands-on nature of our program encourages physical movement,
            communication, and collaboration, providing a unique learning
            experience that goes beyond screens.
          </p>
          <button className="bg-darkPurple px-8 py-2 md:text-base text-sm rounded-lg font-bold mt-6 text-white">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
