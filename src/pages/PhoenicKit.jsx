import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FaqBanner from "../assets/images/faq-banner.jpg";
import ProgramItemDescImg1 from "../assets/images/program-item-desc-img-1.jpg";
import ProgramItemDescImg2 from "../assets/images/program-item-desc-img-2.jpg";
import playBtn from "../assets/images/play-btn.svg";

import programItemObjectiveImg from "../assets/images/program-item-objective-img.png";
import programItemBenefitsImg from "../assets/images/program-item-benefits-img.png";
import programItemContentImg from "../assets/images/program-item-content-img.png";

import galleryImg1 from "../assets/images/program-gallery-img-1.jpg";
import galleryImg2 from "../assets/images/program-gallery-img-2.jpg";
import galleryImg3 from "../assets/images/program-gallery-img-3.jpg";
import galleryImg4 from "../assets/images/program-gallery-img-4.jpg";
import galleryImg5 from "../assets/images/program-gallery-img-5.jpg";
import galleryImg6 from "../assets/images/program-gallery-img-6.jpg";
import galleryImg7 from "../assets/images/program-gallery-img-7.jpg";
import galleryImg8 from "../assets/images/program-gallery-img-8.jpg";
import galleryImg9 from "../assets/images/program-gallery-img-9.jpg";
import galleryImg10 from "../assets/images/program-gallery-img-10.jpg";
import galleryImg11 from "../assets/images/program-gallery-img-11.jpg";
import galleryImg12 from "../assets/images/program-gallery-img-12.jpg";
import galleryImg13 from "../assets/images/program-gallery-img-13.jpg";
import galleryImg14 from "../assets/images/program-gallery-img-14.jpg";
import galleryImg15 from "../assets/images/program-gallery-img-15.jpg";
import galleryImg16 from "../assets/images/program-gallery-img-16.jpg";
import galleryImg17 from "../assets/images/program-gallery-img-17.jpg";

const PhoenicKit = () => {
  const navigate = useNavigate();
  const [isDescriptionShow, setIsDescriptionShow] = useState(true);
  const [isObjectiveShow, setIsObjectiveShow] = useState(false);
  const [isBenefitShow, setIsBenefitShow] = useState(false);
  const [isContentShow, setIsContentShow] = useState(false);
  const [isGalleryShow, setIsGalleryShow] = useState(false);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const handleView = (i) => {
    if (i === 1) {
      setIsDescriptionShow(true);
      setIsObjectiveShow(false);
      setIsBenefitShow(false);
      setIsContentShow(false);
      setIsGalleryShow(false);
    } else if (i === 2) {
      setIsDescriptionShow(false);
      setIsObjectiveShow(true);
      setIsBenefitShow(false);
      setIsContentShow(false);
      setIsGalleryShow(false);
    } else if (i === 3) {
      setIsDescriptionShow(false);
      setIsObjectiveShow(false);
      setIsBenefitShow(true);
      setIsContentShow(false);
      setIsGalleryShow(false);
    } else if (i === 4) {
      setIsDescriptionShow(false);
      setIsObjectiveShow(false);
      setIsBenefitShow(false);
      setIsContentShow(true);
      setIsGalleryShow(false);
    } else if (i === 5) {
      setIsDescriptionShow(false);
      setIsObjectiveShow(false);
      setIsBenefitShow(false);
      setIsContentShow(false);
      setIsGalleryShow(true);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={FaqBanner}
          alt="products-photo"
          className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-16 py-3">
          <h5 className="text-3xl font-bold text-center">
            Level 1 Phonics Kit
          </h5>
        </div>
      </div>
      <div
        className="w-8/12 rounded-3xl py-6 px-6 flex items-center flex-col justify-center relative top-[-50px]  shadow-lg"
        style={{
          background:
            "linear-gradient(60deg, rgba(236,0,140,1) 0%, rgba(255,126,126,1) 100%)",
        }}
      >
        <p className="text-xl text-white ">
          Introduce your child to the world of phonics with our Level 0 Phonics
          Kit. Packed with engaging activities, it's the perfect start to their
          reading journey.
        </p>
      </div>

      <div className="mt-12 w-full flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl ">
          <span className="text-pink font-bold">Discover Let's Read: </span>The
          Fun Way To Learn English Phonics
        </h1>
        <p className=" text-center text-lg font-bold text-gray">
          Engaging activities for children{" "}
          <span className="text-pink underline font-bold"> aged 3-4 </span>to
          master phonics effortlessly.
        </p>
      </div>
      <div className="mt-12 w-full flex items-center justify-center">
        <div className="w-11/12  mt-20">
          <div className=" flex justify-between items-center rounded-full bg-darkPurple py-4 px-16 rounded-b-none">
            <div className="">
              <p
                className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
                onClick={() => handleView(1)}
              >
                Brief Description
              </p>
              {isDescriptionShow && (
                <div className="w-full bg-yellow h-[5px] rounded-full"></div>
              )}
            </div>
            <div className="">
              <p
                className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
                onClick={() => handleView(2)}
              >
                Objectives
              </p>
              {isObjectiveShow && (
                <div className="w-full bg-yellow h-[5px] rounded-full"></div>
              )}
            </div>
            <div className="">
              <p
                className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
                onClick={() => handleView(3)}
              >
                Benefits
              </p>
              {isBenefitShow && (
                <div className="w-full bg-yellow h-[5px] rounded-full"></div>
              )}
            </div>
            <div className="">
              <p
                className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
                onClick={() => handleView(4)}
              >
                Contents
              </p>
              {isContentShow && (
                <div className="w-full bg-yellow h-[5px] rounded-full"></div>
              )}
            </div>
            <div className="">
              <p
                className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
                onClick={() => handleView(5)}
              >
                Gallery
              </p>
              {isGalleryShow && (
                <div className="w-full bg-yellow h-[5px] rounded-full"></div>
              )}
            </div>
          </div>
          {/** Brief Description */}
          {isDescriptionShow && (
            <div className="w-full py-10 px-10 flex flex-col items-center justify-center rounded-3xl rounded-t-none border-[1px] border-[gray] bg-[#FAE5FF] shadow-xl">
              <div className="flex w-full items-center justify-between my-2">
                <div className="w-6/12 flex flex-col justify-start">
                  <h1 className="text-2xl font-bold mb-2">
                    Let's Read provides a dynamic platform for children aged 3-4
                    to seamlessly transition from their native language to
                    English.
                  </h1>
                  <p className="text-gray text-lg">
                    Let's Read introduces an immersive kinesthetic activity kit
                    meticulously crafted to make the journey of learning English
                    phonics a delightful adventure for preschoolers. Bursting
                    with an array of hands-on engagements, Let's Read provides a
                    dynamic platform for children aged 3-4 to seamlessly
                    transition from their native language to English. Through
                    captivating games and enchanting stories, children not only
                    forge connections between letter symbols and phonetic sounds
                    but also cultivate fundamental early reading skills,
                    ensuring a captivating and enduring learning experience.
                  </p>
                </div>
                <div className="w-5/12 flex items-center justify-center relative">
                  <img
                    src={ProgramItemDescImg1}
                    alt=""
                    className="rounded-3xl shadow-xl"
                  />
                  <img
                    src={playBtn}
                    alt=""
                    className="h-[90px] w-[80px] absolute cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between my-2">
                <div className="w-5/12 flex items-center justify-center relative">
                  <img
                    src={ProgramItemDescImg2}
                    alt=""
                    className="rounded-3xl shadow-xl"
                  />
                </div>
                <div className="w-6/12 flex flex-col  items-end">
                  <p className="text-lg font-bold text-right">
                    Let's Read is an immersive phonics learning experience
                    meticulously curated to ignite a passion for reading in
                    young children. Within its vibrant pages, a diverse array of
                    interactive activities awaits, each one crafted with
                    meticulous attention to detail to support and enrich the
                    phonics journey of every child. From captivating matching
                    exercises to engaging tracing sessions and stimulating peg
                    activities, Let's Read offers a multifaceted approach to
                    phonics learning that captivates young minds and fosters a
                    lifelong love for language.
                  </p>
                  <button className="bg-pink font-bold px-4 py-2 mt-8 text-white text-lg rounded-lg w-fit" onClick={()=>navigate('/contact')}>
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/** Objectives */}
          {isObjectiveShow && (
            <div className="w-full py-10 px-10 flex  items-center justify-center rounded-3xl rounded-t-none border-[1px] border-[gray] bg-[#FAE5FF] shadow-xl">
              <div className="w-11/12 flex items-center justify-between">
                <div className="w-6/12">
                  <h2 className="text-3xl font-bold text-left">
                    Learning Objectives
                  </h2>
                  <ul className="ps-4 mt-8">
                    <li className="text-lg font-bold text-left list-disc my-2">
                      Listening and Speaking: Abundant opportunities for lively
                      conversations and interactive exchanges.
                    </li>
                    <li className="text-lg font-bold text-left list-disc my-2">
                      Story Cards: Facilitating a smooth transition from the
                      familiar contours of their mother tongue to the enchanting
                      vistas of English.
                    </li>
                    <li className="text-lg font-bold text-left list-disc my-2">
                      Sound Recognition: Sharpening young ears to discern the
                      nuances of phonetic elements.
                    </li>
                    <li className="text-lg font-bold text-left list-disc my-2">
                      Identification and Memory: Strengthening cognitive
                      abilities through active recognition and recall.
                    </li>
                    <li className="text-lg font-bold text-left list-disc my-2">
                      Pronunciation: Cultivating clear and confident
                      articulation.
                    </li>
                    <li className="text-lg font-bold text-left list-disc my-2">
                      Tracing: Nurturing fine motor skills and fostering a sense
                      of precision and control.
                    </li>
                  </ul>
                  <button className="bg-pink font-bold px-4 py-2 mt-8 text-white text-lg rounded-lg w-fit" onClick={()=>navigate('/contact')}>
                    Contact Us
                  </button>
                </div>
                <div className="w-5/12 flex items-center justify-center overflow-hidden">
                  <img
                    src={programItemObjectiveImg}
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
          {/** Benefits */}
          {isBenefitShow && (
            <div className="w-full py-10 px-10 flex  items-center justify-center rounded-3xl rounded-t-none border-[1px] border-[gray] bg-[#FAE5FF] shadow-xl">
              <div className="w-11/12 flex items-center justify-between">
                <div className="w-6/12">
                  <h2 className="text-3xl font-bold text-left">
                    Benefits Section :
                  </h2>
                  <p className="text-lg mt-8">
                    Unlock a treasure trove of advantages with Let's Read:
                  </p>
                  <ul className="ps-4 mt-2">
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Promotes Hands-On Learning:
                      </span>
                       Engages young learners with tactile experiences that
                      ignite curiosity and foster active participation.
                    </li>
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Enhances Phonics Skills: {" "}
                      </span>
                      Provides a solid foundation for phonetic literacy, paving
                      the way for confident and articulate communicators.
                    </li>
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Fosters Early Literacy:{" "}
                      </span>
                       Nurtures a love for language and literature from the very
                      outset, laying the groundwork for a lifelong journey of
                      learning and discovery.{" "}
                    </li>
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Makes Learning Enjoyable for Kids:{" "}
                      </span>
                       Infuses the process of learning with joy, laughter, and
                      boundless imagination, ensuring that each session is
                      brimming with excitement and wonder.
                    </li>
                  </ul>
                  <button className="bg-pink font-bold px-4 py-2 mt-8 text-white text-lg rounded-lg w-fit">
                    Contact Us
                  </button>
                </div>
                <div className="w-5/12 flex items-center justify-center overflow-hidden">
                  <img src={programItemBenefitsImg} alt="" className="w-full" />
                </div>
              </div>
            </div>
          )}
          {/** Contents */}
          {isContentShow && (
            <div className="w-full py-10 px-10 flex  items-center justify-center rounded-3xl rounded-t-none border-[1px] border-[gray] bg-[#FAE5FF] shadow-xl">
              <div className="w-11/12 flex items-center justify-between">
                <div className="w-6/12">
                  <h2 className="text-3xl font-bold text-left">Contents :</h2>
                  <p className="text-lg mt-8">
                    Dive into a world of discovery with Let's Read, where every
                    kit is brimming with:{" "}
                  </p>
                  <ul className="ps-4 mt-2">
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Activity Cards:
                      </span>
                       Engaging prompts and challenges that spark creativity and
                      imagination.
                    </li>
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Tracing Sheets:
                      </span>
                       Precision-crafted worksheets that enhance fine motor
                      skills and reinforce letter formation.
                    </li>
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        Pegs: 
                      </span>
                      Interactive tools that add an extra layer of excitement to
                      learning, turning every activity into an adventure.
                    </li>
                    <li className="text-lg text-left list-disc my-2">
                      <span className="text-pink text-xl font-bold">
                        And More:
                      </span>
                        Unlock a treasure trove of surprises and delights as you
                      explore the rich tapestry of activities within Let's Read,
                      designed to inspire, engage, and empower young learners on
                      their phonics journey.
                    </li>
                  </ul>
                  <button className="bg-pink font-bold px-4 py-2 mt-8 text-white text-lg rounded-lg w-fit" onClick={()=>navigate('/contact')}>
                    Contact Us
                  </button>
                </div>
                <div className="w-5/12 flex items-center justify-center overflow-hidden">
                  <img
                    src={programItemContentImg}
                    alt=""
                    className="w-[300px] h-[500px]"
                  />
                </div>
              </div>
            </div>
          )}
          {/** Gallery */}
          {isGalleryShow && (
            <div className="w-full py-10 px-10 flex flex-col items-center justify-center rounded-3xl rounded-t-none border-[1px] border-[gray] bg-[#FAE5FF] shadow-xl">
              <div className="w-full flex justify-between gap-[4px]">
                <div className="w-3/12 overflow-hidden flex items-center justify-center">
                  <img src={galleryImg1} alt="" className="h-[400px] w-full" />
                </div>
                <div className="w-6/12 overflow-hidden flex flex-col items-center justify-between">
                  <img src={galleryImg2} alt="" className="h-[190px] w-full" />
                  <div className="w-full flex gap-[10px] ">
                    <img
                      src={galleryImg3}
                      alt=""
                      className="h-[200px] w-6/12"
                    />
                    <img
                      src={galleryImg4}
                      alt=""
                      className="h-[200px] w-6/12"
                    />
                  </div>
                </div>
                <div className="w-2/12 overflow-hidden flex items-center justify-center">
                  <img src={galleryImg5} alt="" className="h-[400px] w-full" />
                </div>
                <div className="w-1/12 overflow-hidden flex items-center justify-center">
                  <img src={galleryImg6} alt="" className="h-[400px] w-full" />
                </div>
              </div>
              <div className="w-full flex justify-between gap-[4px] my-2">
                <div className="w-4/12">
                  <img src={galleryImg7} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-4/12">
                  <img src={galleryImg8} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-2/12">
                  <img src={galleryImg9} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-2/12">
                  <img src={galleryImg10} alt="" className="h-[200px] w-full" />
                </div>
              </div>
              <div className="w-full flex justify-between gap-[4px] my-2">
                <div className="w-2/12">
                  <img src={galleryImg11} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-2/12">
                  <img src={galleryImg12} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-2/12">
                  <img src={galleryImg13} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-6/12">
                  <img src={galleryImg14} alt="" className="h-[200px] w-full" />
                </div>
              </div>
              <div className="w-full flex justify-between gap-[4px] my-2">
                <div className="w-5/12">
                  <img src={galleryImg15} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-2/12">
                  <img src={galleryImg16} alt="" className="h-[200px] w-full" />
                </div>
                <div className="w-5/12">
                  <img src={galleryImg17} alt="" className="h-[200px] w-full" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoenicKit;
