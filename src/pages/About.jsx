import childPhoto from "../assets/images/about-img.png";
import childPhoto2 from "../assets/images/Frame 121.png";
import childPhoto3 from "../assets/images/Frame 126.png";
import childPhoto2Mobile from "../assets/images/child-photo-2-mobile.png";
import aboutBannerImg from "../assets/images/about-banner.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center md:mt-0 mt-[20px]">
      <div className="w-full flex items-center justify-center flex-col relative">
        <img
          src={aboutBannerImg}
          alt="aboutimg"
          className="md:w-screen w-full h-[300px] md:h-[479px]  object-cover object-center overflow-hidden"
        />
        <div
          className="md:w-8/12 w-11/12 rounded-3xl py-4 md:px-6 px-3 flex md:flex-row flex-col items-center justify-between relative top-[-50px] shadow-lg"
          style={{
            background:
              "linear-gradient(60deg, rgba(236,0,140,1) 0%, rgba(255,126,126,1) 100%)",
          }}
        >
          <p className=" md:w-9/12 w-full md:text-2xl text-base   text-white">
          In this digital age when children are inclined towards screens, our program gives the option of socializing and learning
          to read through play.
          </p>
          <button
            className="md:mt-0 mt-2 md:px-8 md:w-auto w-full py-1 md:mr-10 rounded-xl font-bold md:text-2xl text-base"
            style={{
              background:
                "linear-gradient(60deg, rgba(255,226,89,1) 0%, rgba(255,167,81,1) 100%)",
            }}
            onClick={() => navigate("/programs")}
          >
            Program
          </button>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col md:px-0 px-3 justify-center relative">
        <div className="circle bg-[#FFD600] h-[150px] w-[150px] rounded-[55%] m-0 p-0 absolute left-[-40px] -z-10"></div>
        <div className="md:w-6/12 w-full md:p-20 pe-0">
          <img
            src={childPhoto}
            alt="logo"
            className="w-full md:h-[500px]  object-cover object-top overflow-hidden rounded-lg mb-4 "
          />
        </div>

        <div className="md:pt-20 md:ps-8 pe-0 md:w-6/12 ">
          <h3 className="md:text-2xl text-lg md:w-11/12 font-bold  ">
          In this digital age when children are inclined towards screens, our program gives the option of socializing and learning 
          to read through play.
          </h3>
          <p className="pt-4 md:w-11/12 md:text-xl text-sm text-gray">
            Let&apos;s Read takes young learners on an exciting journey from beginner to proficient readers through engaging games
            and playful activities. Our books and games are designed to boost confidence and self-esteem, fostering a love for reading
            from an early age. The hands-on nature of our program encourages physical movement, communication, and collaboration, 
            providing a unique learning experience that goes beyond screens.
          </p>
          {/* <button className="bg-darkPurple px-8 py-2  rounded-lg font-bold mt-6 text-white">
            read more
          </button> */}
        </div>
      </div>

      <div className="md:mt-12 mt-5 ms:w-11/12 p-3 flex flex-col items-center">
        <div className="w-auto border-l-4 border-r-4 flex flex-col border-darkPurple">
          <div className="w-1/2 border-t-4 border-darkPurple"></div>
          <h1 className="md:text-3xl text-xl font-bold text-center m-2">
            Empowering Learners
          </h1>
          <div className="w-full flex justify-end">
            <div className="w-1/2 border-t-4 border-darkPurple"></div>
          </div>
        </div>

        <p className="mt-6 md:w-11/12 w-full md:text-lg text-sm text-gray font-medium">
        Let's Read is designed to empower children who learn English as a second language. We begin with activities that support 
        listening and speaking before we teach reading. The playful nature of the reading material allows children to make mistakes 
        without feeling guilty. It helps them to make personal choices, fosters independence and allows them to repeat activities over 
        and over again till they are mastered. Our structured and progressive approach nurtures confidence, self worth and self esteem 
        in every child. As your child grows and becomes confident, the program provides just the right amount of cognitive stimulation 
        and enhances higher order thinking ability.
        </p>
      </div>
      <div className="flex md:mt-12 mt-2 justify-between w-11/12">
        <div className="md:pt-12 md:w-6/12 ">
          <h1 className="md:text-3xl text-xl font-bold  md:text-start text-center text-darkPurple underline">
            Why Let&apos;s Read?
          </h1>
          <img
            src={childPhoto2Mobile}
            alt="logo"
            className="md:hidden flex md:w-4/12 md:h-auto h-[400px] w-full md:pt-12 px-0 md:scale-95 object-cover object-top overflow-hidden rounded-lg md:mb-4 "
          />
          <p className=" text-gray md:text-lg text-base  md:pt-12">
            While many schools in India rely on foreign-designed reading
            programs, Let's Read stands out as a well-researched, culturally
            relevant program tailored specifically for the Indian context. With
            relatable words and pictures, we facilitate a smooth transition from
            the mother tongue to English, ensuring meaningful learning
            experiences for all children.
          </p>
          <p className=" text-gray md:text-lg text-base  md:pt-12 pt-3">
            From low-income schools to affluent communities, Let's Read has
            consistently delivered positive results. Our structured approach has
            proven effective in teaching English to non-native speakers, making
            literacy accessible to all.
          </p>
          <p className=" text-gray md:text-lg text-base  md:pt-12 pt-3">
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
          className="md:flex hidden w-4/12 h-auto pt-12 px-0 scale-95 object-cover object-top overflow-hidden rounded-lg mb-4 "
        />
      </div>

      <div className="md:mt-16 mt-6 w-11/12">
        <h1 className="md:text-3xl text-2xl md:text-start text-center font-bold  underline text-darkPurple">
          Salient Features
        </h1>
        <ul className="md:mt-5 mt-3">
          <li className=" py-1 md:text-lg text-base text-gray  ">
            <b>Holistic Approach</b>: Seamlessly integrates play-based reading, interactive experiences, and captivating learning 
            materials to accommodate diverse learning preferences.
          </li>
          <li className=" py-1 md:text-lg text-base text-gray ">
            <b>Play Phonics</b>: Develops expertise in letter-sound relationships, decoding, and word construction through an engaging 
            kinesthetic phonics curriculum.
          </li>
          <li className=" py-1 md:text-lg text-base text-gray  ">
            <b>Cognitive Stimulation</b>: Activities and games foster higher-order
            thinking skills, ensuring steady progress in reading proficiency.
          </li>
          <li className=" py-1 md:text-lg text-base text-gray  ">
            <b>Preschool Literacy Audit</b>: Assists schools in implementing effective foundational literacy strategies to boost literacy
            rates.Ensures smooth transitions in reading books in higher classes.
          </li>
          <li className=" py-1 md:text-lg text-base text-gray  ">
            <b>Reading Age Tool</b>: Tracks each child's reading age, enabling schools to monitor and improve literacy standards over 
            time.
          </li>
          <li className=" py-1 md:text-lg text-base text-gray  ">
            <b>Parental Engagement</b>: Equips parents with resources and guidance to actively participate in their child’s literacy 
            journey. Educator’s
          </li>
          <li className=" py-1 md:text-lg text-base text-gray  ">
            <b>Companion</b>: Provides pre-primary teachers with comprehensive support for classroom differentiation and targeted 
            intervention.
          </li>
        </ul>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between md:mt-20 mt-2 w-11/12">
        <h1 className="md:text-3xl md:hidden text-2xl text-center font-bold  underline text-darkPurple">
          Equity in Education
        </h1>
        <img src={childPhoto3} alt="logo" className="" />
        <div className="md:w-6/12 w-11/12">
          <h1 className="text-3xl md:block hidden text-end font-bold  underline text-darkPurple">
            Equity in Education
          </h1>
          {/* <div className="w-[230px] h-[2px] bg-black "></div> */}

          <p className=" text-gray  md:text-end   md:pt-8 pt-0 md:text-lg">
            LET’S READ promotes equity in education by serving both low-income
            and affluent schools, with activities tailored to meet the diverse
            needs of all children. Our kinesthetic activities support the
            literacy learning of neurodivergent children, fostering
            self-correction and emotional development.
          </p>
          <h1 className="md:text-3xl text-xl  md:text-end text-center font-bold  pt-8 underline text-darkPurple">
            Learning Through Fun and Friendship
          </h1>
          <p className=" text-gray  md:text-end pt-8 md:text-lg md:mb-0 mb-8">
          Research shows that children are naturally drawn towards play. Our activities are carefully curated so that they progress 
          towards different stages of play. We move from solitary play ( where activity is done individually by the child) towards 
          collaborative play (where a group of children play a game). These activities make reading and learning fun and enjoyable, 
          thus reducing the stress of making mistakes and the boredom of reading from textbooks.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
