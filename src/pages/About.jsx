import childPhoto from "../assets/images/about-img.png";
import childPhoto2 from "../assets/images/Frame 121.png";
import childPhoto3 from "../assets/images/Frame 126.png";

import aboutBannerImg from "../assets/images/about-banner.svg";
import { useEffect } from "react";

const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center flex-col relative">
        <img
          src={aboutBannerImg}
          alt="aboutimg"
          className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
        <div
          className="w-8/12 rounded-3xl py-4 px-6 flex items-center justify-between relative top-[-50px] shadow-lg"
          style={{
            background:
              "linear-gradient(60deg, rgba(236,0,140,1) 0%, rgba(255,126,126,1) 100%)",
          }}
        >
          <p className=" w-9/12 text-2xl   text-white">
            In this digital age when children are inclined towards screens, our
            program gives the option of socializing and learning to read through
            play.
          </p>
          <button
            className=" px-8 py-1 mr-10 rounded-xl font-bold text-2xl"
            style={{
              background:
                "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
            }}
          >
            About Us
          </button>
        </div>
      </div>

      <div className="flex w-full  justify-center relative">
        <div className="circle bg-[#FFD600] h-[150px] w-[150px] rounded-[55%] m-0 p-0 absolute left-[-40px] -z-10"></div>
        <div className="w-6/12 p-20 pe-0">
          <img
            src={childPhoto}
            alt="logo"
            className="w-full h-[500px]  object-cover object-top overflow-hidden rounded-lg mb-4 "
          />
        </div>

        <div className="pt-20 ps-8 pe-0 w-6/12 ">
          <h3 className="text-2xl w-11/12 font-bold  ">
            In this digital age when children are inclined towards screens, our
            program gives the option of socializing and learning to read through
            play.
          </h3>
          <p className="pt-4 w-11/12 text-xl text-gray">
            Let&apos;s Read takes young learners on an exciting journey from
            beginner to proficient readers through engaging games and playful
            activities. Our books and games are designed to boost confidence and
            self-esteem, fostering a love for reading from an early age. The
            hands-on nature of our program encourages physical movement,
            communication, and collaboration, providing a unique learning
            experience that goes beyond screens.
          </p>
          {/* <button className="bg-darkPurple px-8 py-2  rounded-lg font-bold mt-6 text-white">
            read more
          </button> */}
        </div>
      </div>

      <div className="mt-12 w-11/12 p-3 flex flex-col items-center">
        <div className="w-auto border-l-4 border-r-4 flex flex-col border-darkPurple">
          <div className="w-1/2 border-t-4 border-darkPurple"></div>
          <h1 className="text-3xl font-bold text-center m-2">
            Empowering Early Literacy
          </h1>
          <div className="w-full flex justify-end">
            <div className="w-1/2 border-t-4 border-darkPurple"></div>
          </div>
        </div>

        <p className="mt-6 w-full text-lg text-gray font-medium">
          Let's Read takes young learners on an exciting journey from beginner
          to proficient readers through engaging games and playful activities.
          Our books and games are designed to boost confidence and self-esteem,
          fostering a love for reading from an early age. The hands-on nature of
          our program encourages physical movement, communication, and
          collaboration, providing a unique learning experience that goes beyond
          screens.
        </p>
      </div>
      <div className="flex mt-12 justify-between w-11/12">
        <div className="pt-12 w-6/12 ">
          <h1 className="text-3xl font-bold   text-darkPurple underline">
            Why Let&apos;s Read?
          </h1>
          <p className=" text-gray text-lg  pt-12">
            While many schools in India rely on foreign-designed reading
            programs, Let's Read stands out as a well-researched, culturally
            relevant program tailored specifically for the Indian context. With
            relatable words and pictures, we facilitate a smooth transition from
            the mother tongue to English, ensuring meaningful learning
            experiences for all children.
          </p>
          <p className=" text-gray text-lg  pt-12">
            From low-income schools to affluent communities, Let's Read has
            consistently delivered positive results. Our structured approach has
            proven effective in teaching English to non-native speakers, making
            literacy accessible to all.
          </p>
          <p className=" text-gray text-lg  pt-12">
            Through fun activities, we address the challenges of the digital
            age, empowering educators, parents, and caregivers to support early
            literacy development. Our hands-on approach offers a balanced
            alternative to digital learning, nurturing holistic growth in
            children.
          </p>
        </div>
        <img
          src={childPhoto2}
          alt="logo"
          className="w-4/12 h-auto pt-12 px-0 scale-95 object-cover object-top overflow-hidden rounded-lg mb-4 "
        />
      </div>

      <div className="mt-16 w-11/12">
        <h1 className="text-3xl font-bold  underline text-darkPurple">
          Salient Features
        </h1>
        <ul className="mt-5">
          <li className=" py-1 text-lg text-gray  ">
            Holistic Approach: Seamlessly integrates play-based reading,
            interactive experiences, and captivating learning materials to
            accommodate diverse learning preferences.
          </li>
          <li className=" py-1 text-lg text-gray ">
            Play Phonics: Develops expertise in letter-sound relationships,
            decoding, and word construction through an engaging kinesthetic
            phonics curriculum.
          </li>
          <li className=" py-1 text-lg text-gray  ">
            Cognitive Stimulation: Activities and games foster higher-order
            thinking skills, ensuring steady progress in reading proficiency.
          </li>
          <li className=" py-1 text-lg text-gray  ">
            Preschool Literacy Audit: Assists schools in implementing effective
            literacy strategies to boost literacy rates.
          </li>
          <li className=" py-1 text-lg text-gray  ">
            Reading Age Tool: Tracks each child's reading age, enabling schools
            to monitor and improve literacy standards over time.
          </li>
          <li className=" py-1 text-lg text-gray  ">
            Parental Engagement: Equips parents with resources and guidance to
            actively participate in their child’s literacy journey. Educator’s
            Companion: Provides pre-primary teachers with comprehensive support
            for classroom differentiation and targeted intervention.
          </li>
        </ul>
      </div>
      <div className="flex justify-between mt-20 w-11/12">
        <img src={childPhoto3} alt="logo" className="" />
        <div className="w-6/12">
          <h1 className="text-3xl text-end font-bold  underline text-darkPurple">
            Equity in Education
          </h1>
          {/* <div className="w-[230px] h-[2px] bg-black "></div> */}

          <p className=" text-gray  text-end pt-8 text-lg">
            LET’S READ promotes equity in education by serving both low-income
            and affluent schools, with activities tailored to meet the diverse
            needs of all children. Our kinesthetic activities support the
            literacy learning of neurodivergent children, fostering
            self-correction and emotional development.
          </p>
          <h1 className="text-3xl text-end font-bold  pt-8 underline text-darkPurple">
            Learning Through Fun and Friendship
          </h1>
          <p className=" text-gray  text-end pt-8 text-lg">
            Research shows that children are naturally drawn to reading when
            books reflect their lives and culture. Let's Read celebrates the joy
            of reading by offering stories and characters that resonate with
            young readers, fostering a lifelong love for learning and
            friendship.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
