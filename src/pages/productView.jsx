import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

import { LuThumbsUp } from "react-icons/lu";

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
  const navigate = useNavigate();
  const location = useLocation();
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productDetail, setProductDetail] = useState({});

  //handle Navigate order
  const handleNavigateOrder = () => {
    navigate("/order", { state: { item: productDetail } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setProductDetail(location?.state?.item);
    if (!location?.state?.item) {
      navigate("/products");
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center md:mt-0 mt-[50px]">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={ProductViewBanner}
          alt="products-photo"
          className="w-screen md:h-[479px] h-[250px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-10 py-3 md:rounded-0 rounded-3xl shadow-xl">
          <h5 className="md:text-3xl text-2xl  font-bold text-center underline">
            {productDetail.heading}
          </h5>
        </div>
      </div>

      <div className="plan-view md:w-11/12 w-full md:px-0 px-3 flex md:flex-row flex-col-reverse  md:mt-20 mt-4 gap-[10px] justify-center">
        <div className="md:w-6/12 rounded-3xl md:p-8 p-3 border-[1px] border-[gray] flex flex-col md:shadow-none shadow-xl">
          <h5 className="md:text-3xl text-xl font-bold underline">
            {productDetail.heading}
          </h5>
          <div className="flex items-center md:mt-4 mt-2 md:gap-[20px] gap-[10px]">
            <div className="rounded-lg flex  bg-darkPurple w-fit py-1 px-4  items-center md:gap-[5px] gap-[10px]">
              <p className="text-white font-bold md:text-lg">4.3</p>
              <i className="bi bi-star-fill text-yellow md:text-lg"></i>
            </div>
            <p className="text-gray md:text-lg">5,136 Ratings & 461 Reviews</p>
          </div>
          <p className="md:text-xl font-bold md:mt-4 mt-2">
            {productDetail.description}
          </p>
          <h1 className="md:mt-8 mt-4 font-bold text-darkPurple md:text-4xl text-2xl">
            ₹ {count * productDetail.amount}.00
          </h1>
          <div className="flex items-center md:mt-8 mt-4">
            <div
              className="border-[1px] border-[gray] rounded-lg rounded-r-none md:p-2 py-2 md:px-4 px-4 flex items-center justify-center md:h-full h-[45px] shadow-lg hover:bg-[#0e0e0e] cursor-pointer"
              onClick={() => setCount(count - 1)}
            >
              <img
                src={minusIcon}
                alt=""
                className="md:w-[30px] w-[30px] h-[30px] md:h-[30px] cursor-pointer "
              />
            </div>
            <div className="bg-darkPurple md:p-2 py-1 px-4 md:h-full h-[45px] shadow-lg flex items-center justify-center">
              <h1 className="md:text-4xl text-2xl  text-white font-bold">
                {count}
              </h1>
            </div>
            <div
              className="border-[1px] border-[gray] rounded-lg rounded-l-none p-2 px-4 flex items-center justify-center md:h-full h-[45px] shadow-lg hover:bg-[#0e0e0e] cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              <img
                src={plusIcon}
                alt=""
                className="md:w-[40px] w-[35px] h-[35px] md:h-[40px] cursor-pointer"
              />
            </div>
          </div>
          <button
            className="md:text-2xl text-xl text-white font-bold rounded-lg bg-pink py-2 md:mt-8 mt-4"
            onClick={() => handleNavigateOrder()}
          >
            Buy Now
          </button>
        </div>
        <div className="flex md:hidden flex-row gap-[5px] w-full justify-between items-center px-3 py-2 shadow-md my-3 rounded-xl bg-[#F3F1F1]">
          <div className="flex items-center gap-[10px]">
            <i className="bi bi-heart text-xl"></i>
            <p className="md:text-lg font-bold">2.3k</p>
          </div>

          <div className="flex items-center gap-[10px]">
            <i className="bi bi-share text-xl"></i>
            <p className="md:text-lg font-bold">33k</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <LuThumbsUp className="fa-regular fa-thumbs-up text-xl" />
            <p className="md:text-lg font-bold">13k</p>
          </div>
        </div>
        <div className="md:w-5/12 md:px-0 px-3 md:p-0 p-2 rounded-3xl md:border-[1px] border-[gray] overflow-hidden shadow-md">
          <div className="w-full flex justify-between">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              loop={true}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src={productSliderImg1}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg2}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg3}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg4}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg1}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg2}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg3}
                  className="md:h-[400px] h-[230px] rounded-2xl w-full"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            <div className="md:flex hidden flex-col items-center p-2">
              <div className="my-2">
                <i className="bi bi-heart text-3xl"></i>
                <p className="text-lg font-bold">2.3k</p>
              </div>
              <div className="my-2">
                <LuThumbsUp className="fa-regular fa-thumbs-up text-3xl" />
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
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              loop={true}
              className="mySwiper "
            >
              <SwiperSlide>
                <img
                  src={productSliderImg1}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg2}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg3}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productSliderImg4}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg1}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg2}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={productViewImg3}
                  className="rounded-xl md:h-[100px] h-[60px] md:w-[115px] w-[60px] shadow-xl"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="md:hidden flex w-full  mt-8">
        <div
          className=" flex w-7/12 bg-[#2D0138] items-start py-3 px-3 relative "
          style={{ borderTopRightRadius: "100px 60px" }}
        >
          <p className="text-white text-xl font-semibold">Product Details</p>
        </div>
      </div>
      <div className="bg-darkPurple md:w-11/12 w-full md:px-0 px-3 rounded-full md:flex hidden justify-center rounded-b-none md:p-2 p-3 py-4 mt-8">
        <div className="md:w-10/12 w-full md:px-0 px-4 flex justify-between ">
          <p className="underline md:text-xl font-bold text-yellow cursor-pointer">
            About Product
          </p>
          <p className=" md:text-xl font-bold text-white cursor-pointer">
            Specification
          </p>
          <p className=" md:text-xl font-bold text-white cursor-pointer">
            Features
          </p>
        </div>
      </div>
      <div className="md:w-11/12 w-full md:px-0  rounded-3xl rounded-t-none  overflow-hidden">
        <div className="bg-[#FFF9D7] md:p-8 p-3 flex flex-col w-full">
          <h1 className="font-bold md:text-3xl text-lg underline">
            Introducing Learner’s Book 1:{" "}
          </h1>
          <p className="text-gray text-center md:mt-4 mt-2 md:text-xl font-bold">
            A Vibrant Journey into Phonics Sounds for Young Minds!
          </p>
          <p className="text-lg font-bold md:my-8 my-3">
            Embark on an Exciting Phonics Adventure
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Tailor-made for young learners:
            </span>{" "}
            Perfect for those taking their first steps into the world of sounds.
            Catchy phonic songs: Delight in fun and engaging songs.
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Simple CVC words:
            </span>{" "}
            Identify initial, last, and middle sounds.{" "}
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Beyond Mere Sounds:
            </span>{" "}
             Comprehensive Learning{" "}
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Sound blending techniques:
            </span>{" "}
             Master pronunciation with abundant examples.
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Effective comprehension: 
            </span>{" "}
             Ensure retention and understanding. Expand Vocabulary and Foster a
            Love for Language{" "}
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Three-letter wonders: 
            </span>{" "}
             Explore a wide array of CVC words.
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Abstract learning:
            </span>{" "}
             Match vibrant pictures with corresponding letter sounds.
          </p>
          <p className="md:text-lg my-2">
            <span className="font-bold text-pink md:text-xl text-lg">
              Interactive and enjoyable:
            </span>{" "}
             Enhance cognitive abilities in a fun way.
          </p>
          <p className="md:text-lg my-1">Well-Rounded Phonics Experience</p>
          <p className="md:text-lg my-1">
            Assessment rubric: Track progress with a holistic report card.
          </p>
          <p className="md:text-lg my-1">
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
      <div className="md:hidden flex w-full mt-8">
        <div
          className=" flex w-7/12 bg-[#2D0138] items-start py-3 px-3 relative "
          style={{ borderTopRightRadius: "100px 60px" }}
        >
          <p className="text-white text-xl font-semibold">Ratings & Reviews</p>
        </div>
      </div>

      <div className="md:w-11/12 w-full px-3 flex flex-col items-center justify-center md:mt-16 mt-0">
        <h1 className="text-3xl underline font-bold md:block hidden">
          Ratings & Reviews
        </h1>
        <div className="w-full flex md:flex-nowrap flex-wrap  items-center justify-between mt-8 ">
          <div className="md:w-3/12 w-4/12 flex justify-center items-center flex-col">
            <div className="flex md:gap-[30px] gap-[10px] items-center">
              <h1 className="md:text-5xl text-3xl font-bold">4.3</h1>
              <i className="bi bi-star-fill md:text-5xl text-3xl  text-[#FFD600]"></i>
            </div>
            <p className="md:text-lg text-sm font-bold mt-2 ">
              5,232 ratings & <br /> 461 Reviews
            </p>
          </div>
          <div className="md:w-3/12 w-8/12">
            <div className="flex md:gap-[20px] gap-[10px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="md:text-lg">5</h1>
                <i className="bi bi-star-fill md:text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-10/12 bg-[#2D0138] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex md:gap-[20px] gap-[10px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="md:text-lg">4</h1>
                <i className="bi bi-star-fill md:text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-7/12 bg-[#A548BC] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex md:gap-[20px] gap-[10px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="md:text-lg">3</h1>
                <i className="bi bi-star-fill md:text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-6/12 bg-[#842363] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex md:gap-[20px] gap-[10px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="md:text-lg">2</h1>
                <i className="bi bi-star-fill md:text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-4/12 bg-[#EF9000] h-full rounded-3xl"></div>
              </div>
            </div>
            <div className="flex md:gap-[20px] gap-[10px] items-center justify-between my-4">
              <div className="flex items-center gap-[5px]">
                {" "}
                <h1 className="md:text-lg">1</h1>
                <i className="bi bi-star-fill md:text-lg  text-[#000]"></i>
              </div>
              <div className="w-full bg-[#A2A2A2] rounded-3xl h-[10px] overflow-hidden">
                <div className="w-2/12 bg-[#FF0211] h-full rounded-3xl"></div>
              </div>
            </div>
          </div>
          <div className="md:w-3/12 w-full md:block flex justify-center gap-[20px]">
            <button
              className=" md:hidden flex md:text-2xl text-white font-bold rounded-lg px-8 py-2 my-2"
              style={{
                background:
                  "linear-gradient(93deg, rgba(254,34,96,1) 0%, rgba(152,20,57,1) 100%)",
              }}
            >
              Post Review
            </button>
            <button className="bg-darkPurple md:text-2xl md:flex hidden text-white font-bold rounded-lg px-8 py-2 my-2">
              Post Review
            </button>
            <button className="bg-darkPurple md:text-2xl text-white font-bold rounded-lg px-8 py-2 my-2">
              Rate Product
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex w-full my-4 mt-8">
        <div
          className=" flex w-7/12 bg-[#2D0138] items-start py-3 px-3 relative "
          style={{ borderTopRightRadius: "100px 60px" }}
        >
          <p className="text-white text-xl font-semibold">All Posted Images</p>
        </div>
      </div>
      <div className="md:w-11/12 md:px-0 px-3  w-full md:mt-16 mt-0 flex flex-col items-center">
        <div
          className="md:w-11/12 w-full  overflow-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <p className="md:flex hidden text-[#551F64] text-xl font-bold">
            All Posted Images
          </p>

          <div
            className="flex gap-[15px] mt-4 w-full  overflow-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            <img
              src={productViewImg1}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg2}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg3}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg1}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg2}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg3}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg1}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg2}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
            <img
              src={productViewImg3}
              alt=""
              className="md:h-[142px] md:w-[129px] h-[100px] w-[100px] rounded-xl"
            />
          </div>
        </div>
        <div className="w-full border-t-[1px] mt-4 flex  justify-center py-4">
          <div className="md:w-11/12 w-full flex md:flex-row flex-col md:shadow-none shadow-md md:rounded-none rounded-xl md:p-0 p-3 md:border-none border-[1px] md:border-white border-[#CBCBCB] ">
            <div className="md:w-6/12 w-full md:border-r-[1px] md:pr-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img
                    src={profileImg1}
                    alt=""
                    className="md:h-[80px] h-[60px] w-[60px] md:w-[80px] rounded-full"
                  />
                  <div className="">
                    <h3 className="underline md:text-2xl text-lg font-bold text-[#551F64]">
                      Ramya .N
                    </h3>
                    <p className="text-gray md:text-base text-sm">Patna</p>
                    <p className="text-gray md:text-base text-sm">Oct, 2022</p>
                  </div>
                </div>
                <div className="flex  gap-[5px] ">
                  <LuThumbsUp className="fa-regular fa-thumbs-up md:text-3xl text-lg cursor-pointer" />
                  <p className="md:text-lg">13k</p>
                </div>
              </div>
              <h1 className="mt-4 font-bold text-2xl md:block hidden">
                Excellent product , soft and silent key.
              </h1>
            </div>
            <div className="md:w-6/12 w-full flex items-center md:justify-end gap-[20px] overflow-x-scroll md:border-t-0 border-t-2 md:py-0 py-2 md:mt-0 mt-2">
              <img
                src={productViewImg1}
                alt=""
                className="md:h-[142px] md:w-[129px] h-[80px] w-[80px] rounded-xl"
              />
              <img
                src={productViewImg2}
                alt=""
                className="md:h-[142px] md:w-[129px] h-[80px] w-[80px] rounded-xl"
              />
              <img
                src={productViewImg3}
                alt=""
                className="md:h-[142px] md:w-[129px] h-[80px] w-[80px] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] mt-4 md:mb-0 mb-4 flex  justify-center py-4">
          <div className="md:w-11/12 w-full flex md:flex-row flex-col md:shadow-none shadow-md md:rounded-none rounded-xl md:p-0 p-3 md:border-none border-[1px] md:border-white border-[#CBCBCB] ">
            <div className="md:w-6/12 w-full md:border-r-[1px] md:pr-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img
                    src={profileImg1}
                    alt=""
                    className="md:h-[80px] h-[60px] w-[60px] md:w-[80px] rounded-full"
                  />
                  <div className="">
                    <h3 className="underline md:text-2xl text-lg font-bold text-[#551F64]">
                      Ramya .N
                    </h3>
                    <p className="text-gray md:text-base text-sm">Patna</p>
                    <p className="text-gray md:text-base text-sm">Oct, 2022</p>
                  </div>
                </div>
                <div className="flex  gap-[5px] ">
                  <LuThumbsUp className="fa-regular fa-thumbs-up md:text-3xl text-lg cursor-pointer" />
                  <p className="md:text-lg">13k</p>
                </div>
              </div>
              <h1 className="mt-4 font-bold text-2xl md:block hidden">
                Excellent product , soft and silent key.
              </h1>
            </div>
            <div className="md:w-6/12 w-full flex items-center md:justify-end gap-[20px] overflow-x-scroll md:border-t-0 border-t-2 md:py-0 py-2 md:mt-0 mt-2">
              <img
                src={productViewImg1}
                alt=""
                className="md:h-[142px] md:w-[129px] h-[80px] w-[80px] rounded-xl"
              />
              <img
                src={productViewImg2}
                alt=""
                className="md:h-[142px] md:w-[129px] h-[80px] w-[80px] rounded-xl"
              />
              <img
                src={productViewImg3}
                alt=""
                className="md:h-[142px] md:w-[129px] h-[80px] w-[80px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
