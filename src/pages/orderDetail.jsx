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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const OrderDetail = () => {
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAboutShow, setIsAboutShow] = useState(true);
  const [isAccountShow, setIsAccountShow] = useState(false);
  const [isShippingShow, setIsShippingShow] = useState(false);
  const [isPayShow, setIsPayShow] = useState(false);
  const [productDetail, setProductDetail] = useState({});

  const handleView = (i) => {
    if (i === 1) {
      setIsAboutShow(true);
      setIsAccountShow(false);
      setIsShippingShow(false);
      setIsPayShow(false);
    } else if (i === 2) {
      setIsAboutShow(false);
      setIsAccountShow(true);
      setIsShippingShow(false);
      setIsPayShow(false);
    } else if (i === 3) {
      setIsAboutShow(false);
      setIsAccountShow(false);
      setIsShippingShow(true);
      setIsPayShow(false);
    } else if (i === 4) {
      setIsAboutShow(false);
      setIsAccountShow(false);
      setIsShippingShow(false);
      setIsPayShow(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setProductDetail(location?.state?.item);
    if (!location?.state?.item) {
      navigate("/products");
    }
  }, []);
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
            Order Details
          </h5>
        </div>
      </div>

      <div className="w-11/12  mt-20">
        <div className=" flex justify-between items-center rounded-full bg-pink py-4 px-16 rounded-b-none">
          <div className="">
            <p
              className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
              onClick={() => handleView(1)}
            >
              About Product
            </p>
            {isAboutShow && (
              <div className="w-full bg-yellow h-[5px] rounded-full"></div>
            )}
          </div>
          <div className="">
            <p
              className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
              onClick={() => handleView(2)}
            >
              Your Account
            </p>
            {isAccountShow && (
              <div className="w-full bg-yellow h-[5px] rounded-full"></div>
            )}
          </div>
          <div className="">
            <p
              className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
              onClick={() => handleView(3)}
            >
              Shipping Address{" "}
            </p>
            {isShippingShow && (
              <div className="w-full bg-yellow h-[5px] rounded-full"></div>
            )}
          </div>
          <div className="">
            <p
              className="text-white text-xl font-bold cursor-pointer hover:text-yellow"
              onClick={() => handleView(4)}
            >
              Amount to Pay
            </p>
            {isPayShow && (
              <div className="w-full bg-yellow h-[5px] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
      {/**About Product */}

      <div
        className={`w-11/12 ${
          isAboutShow ? "flex" : "hidden"
        }  flex-col items-center justify-center rounded-3xl border-[1px] border-[gray] rounded-t-none bg-[#FFE7EE] shadow-2xl py-10`}
      >
        <div className="plan-view w-full flex  gap-[10px] justify-center">
          <div className="w-6/12 rounded-3xl p-8 border-[1px] border-[gray] flex flex-col">
            <h5 className="text-3xl font-bold underline">
              {productDetail?.heading}
            </h5>
            <div className="flex items-center mt-4 gap-[20px]">
              <div className="rounded-lg flex bg-darkPurple w-fit py-1 px-4  items-center gap-[5px]">
                <p className="text-white font-bold text-lg">4.3</p>
                <i className="bi bi-star-fill text-yellow text-lg"></i>
              </div>
              <p className="text-gray text-lg">5,136 Ratings & 461 Reviews</p>
            </div>
            <p className="text-xl font-bold mt-4">{productDetail?.description}</p>
            <h1 className="mt-8 font-bold text-darkPurple text-4xl">
              ₹ {count * productDetail.amount}.00
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
            <button
              className="text-2xl text-white w-fit font-bold rounded-lg bg-pink py-2 px-12 mt-8"
              onClick={() => navigate("/order")}
            >
              Change Kit
            </button>
          </div>
          <div className="w-5/12 rounded-3xl border-[1px] border-[gray] overflow-hidden bg-[#fff]">
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
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={productSliderImg2}
                    className="h-[400px] rounded-2xl w-full"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={productSliderImg3}
                    className="h-[400px] rounded-2xl w-full"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={productSliderImg4}
                    className="h-[400px] rounded-2xl w-full"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={productViewImg1}
                    className="h-[400px] rounded-2xl w-full"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={productViewImg2}
                    className="h-[400px] rounded-2xl w-full"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={productViewImg3}
                    className="h-[400px] rounded-2xl w-full"
                    alt=""
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
                  <img src={productSliderImg1} className="rounded-xl" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productSliderImg2} className="rounded-xl" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productSliderImg3} className="rounded-xl" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productSliderImg4} className="rounded-xl" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productViewImg1} className="rounded-xl" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productViewImg2} className="rounded-xl" alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productViewImg3} className="rounded-xl" alt='' />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <button
          className="bg-darkPurple text-xl text-white font-bold rounded-lg px-12 py-2 my-2 mt-10"
          onClick={() => handleView(2)}
        >
          Next
        </button>
      </div>

      {/**Your Account */}
      {isAccountShow ? (
        <div className="w-11/12 flex flex-col items-center justify-center rounded-3xl border-[1px] border-[gray] rounded-t-none bg-[#FFE7EE] shadow-2xl py-10">
          <div className="w-4/12 mt-20 mb-20">
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-5/12 items-center">
                <i className="bi bi-person text-4xl"></i>
                <p className="font-bold text-2xl">Name</p>
                <p className="font-bold text-2xl">:</p>
              </div>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-5/12 items-center">
                <i className="bi bi-envelope text-4xl"></i>
                <p className="font-bold text-2xl">Email</p>
                <p className="font-bold text-2xl">:</p>
              </div>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your Email ID"
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-5/12 items-center">
                <i className="bi bi-telephone text-4xl"></i>
                <p className="font-bold text-2xl">Mobile</p>
                <p className="font-bold text-2xl">:</p>
              </div>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your Mobile Number"
              />
            </div>
          </div>
          <div className="w-5/12 flex items-center justify-between mt-8">
            <button
              className="bg-darkPurple text-xl text-white font-bold rounded-lg px-12 py-2 my-2 mt-10"
              onClick={() => handleView(1)}
            >
              Back
            </button>
            <button
              className="bg-darkPurple text-xl text-white font-bold rounded-lg px-12 py-2 my-2 mt-10"
              onClick={() => handleView(3)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {/**Shipping */}
      {isShippingShow ? (
        <div className="w-11/12 flex flex-col items-center justify-center rounded-3xl border-[1px] border-[gray] rounded-t-none bg-[#FFE7EE] shadow-2xl py-10">
          <div className="w-9/12 mt-20 mb-20">
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-6/12  items-center">
                <p className="font-bold text-2xl">
                  House No./ Building Name <span className="text-pink">*</span>
                </p>
              </div>
              <p className="font-bold text-2xl">:</p>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter House no."
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-6/12  items-center">
                <p className="font-bold text-2xl">Street Name / Locality</p>
              </div>
              <p className="font-bold text-2xl">:</p>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your Street name"
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-6/12  items-center">
                <p className="font-bold text-2xl">
                  City <span className="text-pink">*</span>
                </p>
              </div>
              <p className="font-bold text-2xl">:</p>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your City"
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-6/12  items-center">
                <p className="font-bold text-2xl">
                  State <span className="text-pink">*</span>
                </p>
              </div>
              <p className="font-bold text-2xl">:</p>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your State"
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-6/12  items-center">
                <p className="font-bold text-2xl">
                  Country <span className="text-pink">*</span>
                </p>
              </div>
              <p className="font-bold text-2xl">:</p>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="India"
                value="India"
                disabled
              />
            </div>
            <div className="flex gap-[20px] my-4 w-full">
              <div className="flex gap-[10px] w-6/12  items-center">
                <p className="font-bold text-2xl">
                  Pincode <span className="text-pink">*</span>
                </p>
              </div>
              <p className="font-bold text-2xl">:</p>
              <input
                type="text"
                className=" w-full rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Your Zip code"
              />
            </div>
          </div>
          <div className="w-5/12 flex items-center justify-between mt-8">
            <button
              className="bg-darkPurple text-xl text-white font-bold rounded-lg px-12 py-2 my-2 mt-10"
              onClick={() => handleView(2)}
            >
              Back
            </button>
            <button
              className="bg-darkPurple text-xl text-white font-bold rounded-lg px-12 py-2 my-2 mt-10"
              onClick={() => handleView(4)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/**Amount to Pay */}
      {isPayShow ? (
        <div className="w-11/12 flex flex-col items-center justify-center rounded-3xl border-[1px] border-[gray] rounded-t-none bg-[#FFE7EE] shadow-2xl py-10">
          <div className="w-6/12 flex  flex-col items-center rounded-3xl border-[1px] border-[gray] p-4">
            <div className=" w-full flex justify-between items-center my-4">
              <p className="text-xl text-gray">Total Amount:</p>
              <p className="text-3xl text-[#006930] font-bold">₹ {count*productDetail.amount}</p>
            </div>
            <div className=" w-full flex justify-between items-center my-4">
              <p className="text-xl text-gray">Apply Coupon Code:</p>
              <input
                type="text"
                className=" w-6/12 rounded-xl p-2 bg-transparent shadow-lg border-[1px] border-[gray] text-lg outline-none"
                placeholder="Enter Coupon Code"
              />
            </div>
            <button className="bg-darkPurple text-xl text-white font-bold rounded-lg px-12 py-2 my-2 mt-10">
              Pay Now
            </button>
          </div>
          <div className="w-10/12 flex items-start justify-center gap-[50px] mt-16">
            <p className="text-lg font-bold">
              Facing any problem? Kindly connect on
            </p>
            <div className="">
              <div className="flex gap-[20px] mb-3">
                <i className="bi bi-telephone text-xl font-bold"></i>
                <p className="text-lg font-bold underline">+91 62 6204 6204</p>
              </div>
              <div className="flex gap-[20px] mb-3">
                <i className="bi bi-envelope text-xl font-bold"></i>
                <p className="text-lg font-bold underline">
                  support@classmonitor.com
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderDetail;
