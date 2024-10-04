import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductViewBanner from "../assets/images/product-view-banner.jpg";
import plusIcon from "../assets/images/plus-icon.svg";
import minusIcon from "../assets/images/minus-icon.svg";

import productViewImg1 from "../assets/images/product-view-img-1.jpg";
import productViewImg2 from "../assets/images/product-view-img-2.jpg";
import productViewImg3 from "../assets/images/product-view-img-3.jpg";

import productSliderImg1 from "../assets/images/product-img-1.png";
import productSliderImg2 from "../assets/images/product-img-2.png";
import productSliderImg3 from "../assets/images/product-img-3.png";
import productSliderImg4 from "../assets/images/product-img-4.png";

import profileImg1 from "../assets/images/profile-img-1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const ProductView = () => {
  const navigate=useNavigate();
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={ProductViewBanner}
          alt="products-photo"
          className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-10 py-3">
          <h5 className="text-3xl font-bold text-center underline">
            Learner&apos;s Guide 1
          </h5>
        </div>
      </div>

      <div className="plan-view w-11/12 flex  mt-20 gap-[10px] justify-center">
        <div className="w-6/12 rounded-3xl p-8 border-[1px] border-[gray] flex flex-col">
          <h5 className="text-3xl font-bold underline">
            Learner&apos;s Guide 1
          </h5>
          <div className="flex items-center mt-4 gap-[20px]">
            <div className="rounded-lg flex bg-darkPurple w-fit py-1 px-4  items-center gap-[5px]">
              <p className="text-white font-bold text-lg">4.3</p>
              <i className="bi bi-star-fill text-yellow text-lg"></i>
            </div>
            <p className="text-gray text-lg">5,136 Ratings & 461 Reviews</p>
          </div>
          <p className="text-xl font-bold mt-4">
            Our Let's Read Learner's Guide 1 is your ultimate guide to teaching
            phonics skills effectively. Thank you for choosing Let's Read!
          </p>
          <h1 className="mt-8 font-bold text-darkPurple text-4xl">
            ₹ {count * 250}.00
          </h1>
          <div className="flex items-center mt-8">
            <div
              className="border-[1px] border-[gray] rounded-lg rounded-r-none p-2 px-4 flex items-center justify-center h-full shadow-lg hover:bg-[#0e0e0e] cursor-pointer"
              onClick={() => setCount(count - 1)}
            >
              <img
                src={minusIcon}
                alt=""
                className="w-[30px] h-[30px] cursor-pointer "
              />
            </div>
            <div className="bg-darkPurple p-2 px-4 h-full shadow-lg flex items-center justify-center">
              <h1 className="text-4xl  text-white font-bold">{count}</h1>
            </div>
            <div
              className="border-[1px] border-[gray] rounded-lg rounded-l-none p-2 px-4 flex items-center justify-center h-full shadow-lg hover:bg-[#0e0e0e] cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              <img
                src={plusIcon}
                alt=""
                className="w-[40px] h-[40px] cursor-pointer"
              />
            </div>
          </div>
          <button className="text-2xl text-white font-bold rounded-lg bg-pink py-2 mt-8" onClick={()=>navigate('/order')}>
            Buy Now
          </button>
        </div>
        <div className="w-5/12 rounded-3xl border-[1px] border-[gray] overflow-hidden">
          <div className="w-full flex justify-between">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src={productSliderImg1}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg2}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg3}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg4}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg1}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg2}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg3}
                  className="h-[400px] rounded-2xl w-full"
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex flex-col items-center p-2">
              <div className="my-2">
                <i className="bi bi-heart text-3xl"></i>
                <p className="text-lg font-bold">2.3k</p>
              </div>
              <div className="my-2">
                <i className="fa-regular fa-thumbs-up text-3xl"></i>
                <p className="text-lg font-bold">13k</p>
              </div>
              <div className="my-2">
                <i className="bi bi-share text-3xl"></i>
                <p className="text-lg font-bold">33k</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 p-3">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper "
            >
              <SwiperSlide>
                <img src={productSliderImg1} className="rounded-xl" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productSliderImg2} className="rounded-xl" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productSliderImg3} className="rounded-xl" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productSliderImg4} className="rounded-xl" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productViewImg1} className="rounded-xl" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productViewImg2} className="rounded-xl" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productViewImg3} className="rounded-xl" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-darkPurple w-11/12 rounded-full flex justify-center rounded-b-none p-2 py-4 mt-8">
          <div className="w-10/12 flex justify-between ">
            <p className="underline text-xl font-bold text-yellow cursor-pointer">
              About Product
            </p>
            <p className=" text-xl font-bold text-white cursor-pointer">
              Specification
            </p>
            <p className=" text-xl font-bold text-white cursor-pointer">
              Features
            </p>
          </div>
        </div>
      <div className="w-11/12 rounded-3xl rounded-t-none  overflow-hidden">
        
        <div className="bg-[#FFF9D7] p-8 flex flex-col w-full">
          <h1 className="font-bold text-3xl underline">
            Introducing Learner’s Book 1:{" "}
          </h1>
          <p className="text-gray text-center mt-4 text-xl font-bold">
            A Vibrant Journey into Phonics Sounds for Young Minds!
          </p>
          <p className="text-lg font-bold my-8">
            Embark on an Exciting Phonics Adventure
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Tailor-made for young learners:
            </span>{" "}
            Perfect for those taking their first steps into the world of sounds.
            Catchy phonic songs: Delight in fun and engaging songs.
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Simple CVC words:
            </span>{" "}
            Identify initial, last, and middle sounds.{" "}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Beyond Mere Sounds:
            </span>{" "}
             Comprehensive Learning{" "}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Sound blending techniques:
            </span>{" "}
             Master pronunciation with abundant examples.
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Effective comprehension: 
            </span>{" "}
             Ensure retention and understanding. Expand Vocabulary and Foster a
            Love for Language{" "}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Three-letter wonders: 
            </span>{" "}
             Explore a wide array of CVC words.
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Abstract learning:
            </span>{" "}
             Match vibrant pictures with corresponding letter sounds.
          </p>
          <p className="text-lg my-2">
            <span className="font-bold text-pink text-xl">
              Interactive and enjoyable:
            </span>{" "}
             Enhance cognitive abilities in a fun way.
          </p>
          <p className="text-lg my-1">Well-Rounded Phonics Experience</p>
          <p className="text-lg my-1">
            Assessment rubric: Track progress with a holistic report card.
          </p>
          <p className="text-lg my-1">
            Captivating CVC stories: Engage with interesting and imaginative
            stories
          </p>
          <div className="w-full flex justify-center mt-8">
            <button className="bg-darkPurple font-bold text-white text-xl px-16 rounded-lg py-1">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 flex flex-col items-center justify-center mt-16">
        <h1 className="text-3xl underline font-bold">Ratings & Reviews</h1>
        <div className="w-full flex  items-center justify-between mt-8">
          <div className="w-3/12 flex justify-center items-center flex-col">
            <div className="flex gap-[30px] items-center">
              <h1 className="text-5xl font-bold">4.3</h1>
              <i className="bi bi-star-fill text-5xl  text-[#FFD600]"></i>
            </div>
            <p className="text-lg font-bold mt-2 ">
              5,232 ratings & <br /> 461 Reviews
            </p>
          </div>
          <div className="w-3/12">
            <div className="flex gap-[20px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="text-lg">5</h1>
                <i className="bi bi-star-fill text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-10/12 bg-[#2D0138] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex gap-[20px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="text-lg">4</h1>
                <i className="bi bi-star-fill text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-7/12 bg-[#A548BC] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex gap-[20px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="text-lg">3</h1>
                <i className="bi bi-star-fill text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-6/12 bg-[#842363] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex gap-[20px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="text-lg">2</h1>
                <i className="bi bi-star-fill text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-4/12 bg-[#EF9000] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex gap-[20px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="text-lg">1</h1>
                <i className="bi bi-star-fill text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-2/12 bg-[#FF0211] h-full rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="w-3/12">
            <button className="bg-darkPurple text-2xl text-white font-bold rounded-lg px-8 py-2 my-2">
              Post Review
            </button>
            <button className="bg-darkPurple text-2xl text-white font-bold rounded-lg px-8 py-2 my-2">
              Rate Product
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 mt-16 flex flex-col items-center">
        <div className="w-11/12 overflow-hidden">
          <p className="text-[#551F64] text-xl font-bold">All Posted Images</p>
          <div className="flex gap-[15px] mt-4">
            <img
              src={productViewImg1}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg2}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg3}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg1}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg2}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg3}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg1}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg2}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
            <img
              src={productViewImg3}
              alt=""
              className="h-[142px] w-[129px] rounded-xl"
            />
          </div>
        </div>
        <div className="w-full border-t-[1px] mt-4 flex justify-center py-4">
          <div className="w-11/12 flex">
            <div className="w-6/12 border-r-[1px] pr-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img
                    src={profileImg1}
                    alt=""
                    className="h-[80px] w-[80px] rounded-full"
                  />
                  <div className="">
                    <h3 className="underline text-2xl font-bold text-[#551F64]">
                      Ramya .N
                    </h3>
                    <p className="text-gray">Patna</p>
                    <p className="text-gray">Oct, 2022</p>
                  </div>
                </div>
                <div className="">
                  <i className="fa-regular fa-thumbs-up text-3xl cursor-pointer"></i>
                  <p className="text-lg">13k</p>
                </div>
              </div>
              <h1 className="mt-4 font-bold text-2xl">
                Excellent product , soft and silent key.
              </h1>
            </div>
            <div className="w-6/12 flex items-center justify-end gap-[20px]">
              <img
                src={productViewImg1}
                alt=""
                className="h-[142px] w-[129px] rounded-xl"
              />
              <img
                src={productViewImg2}
                alt=""
                className="h-[142px] w-[129px] rounded-xl"
              />
              <img
                src={productViewImg3}
                alt=""
                className="h-[142px] w-[129px] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] mt-4 flex justify-center py-4">
          <div className="w-11/12 flex">
            <div className="w-6/12 border-r-[1px] pr-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img
                    src={profileImg1}
                    alt=""
                    className="h-[80px] w-[80px] rounded-full"
                  />
                  <div className="">
                    <h3 className="underline text-2xl font-bold text-[#551F64]">
                      Ramya .N
                    </h3>
                    <p className="text-gray">Patna</p>
                    <p className="text-gray">Oct, 2022</p>
                  </div>
                </div>
                <div className="">
                  <i className="fa-regular fa-thumbs-up text-3xl cursor-pointer"></i>
                  <p className="text-lg">13k</p>
                </div>
              </div>
              <h1 className="mt-4 font-bold text-2xl">
                Excellent product , soft and silent key.
              </h1>
            </div>
            <div className="w-6/12 flex items-center justify-end gap-[20px]">
              <img
                src={productViewImg1}
                alt=""
                className="h-[142px] w-[129px] rounded-xl"
              />
              <img
                src={productViewImg2}
                alt=""
                className="h-[142px] w-[129px] rounded-xl"
              />
              <img
                src={productViewImg3}
                alt=""
                className="h-[142px] w-[129px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
