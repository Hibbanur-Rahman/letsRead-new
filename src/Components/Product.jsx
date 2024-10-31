import React from "react";
import ProductCard from "./ProductCard";
import headerDesign from "../assets/images/program-header-design.svg";
import productImg1 from "../assets/images/product-img-1.png";
import productImg2 from "../assets/images/product-img-2.png";
import productImg3 from "../assets/images/product-img-3.png";
import productImg4 from "../assets/images/product-img-4.png";

import productCardIcon1 from "../assets/images/product-card-icon-1.svg";
import productCardIcon2 from "../assets/images/product-card-icon-2.svg";
import productCardIcon3 from "../assets/images/product-card-icon-3.svg";
import productCardIcon4 from "../assets/images/product-card-icon-4.svg";

import productSideDesign from "../assets/images/products-side-bottom-design.svg";

import { Carousel } from "@material-tailwind/react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Product = () => {
  const productData = [
    {
      id: 1,
      image: productImg1,
      heading: "LR Educators Handbook",
      description:
        "Let’s Read Educators Handbook is your one stop guide to teaching phonics effectively. It includes a Curriculum plan and a rubric to check Learning outcomes.",
      icon: productCardIcon1,
    },
    {
      id: 2,
      image: productImg2,
      heading: "Learner’s Guide 1",
      description:
        "Our Let's Read Learner's Guide 1 is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!",
      icon: productCardIcon2,
    },
    {
      id: 3,
      image: productImg3,
      heading:
        "Learner’s Book 2: A Vibrant Journey into Phonics Sounds for Young Minds",
      description:
        "Learner’s book 2 provides invaluable guidance in teaching phonics skills to young learners.",
      icon: productCardIcon3,
    },
    {
      id: 4,
      image: productImg4,
      heading: "Learner's Guide 3",
      description: "Discover Phonics Mastery with Learner's Guide Book 3",
      icon: productCardIcon4,
    },
  ];
  return (
    <div className="w-full flex items-center justify-center flex-col relative md:mt-0 mt-6">
      <h1 className="text-center text-3xl md:text-5xl font-bold leading-none m-0 p-0">
        Our Products
      </h1>
      <div className="flex justify-center items-center relative w-full m-0 p-0">
        <img
          src={headerDesign}
          className="relative h-[50px] w-[50px]"
          alt="header design"
        />
        <div className="relative top-[-10px]  h-[3px] md:w-[300px] w-[180px] bg-pink"></div>
      </div>
      <p className="mx-auto text-center md:text-xl text-base   md:font-regular font-semibold mt-8 md:w-6/12 w-11/12">
        Explore our wide range of Products Designed to meet your needs. Select
        the perfect solution for yourself with just a few clicks.
      </p>

      <div className="md:flex hidden justify-center align-center gap-[15px] w-10/12 mt-10 relative">
        <div className="absolute right-[-130px] top-[-100px] rotate-180 -z-10">
          <img src={productSideDesign} alt="" className="w-full h-full" />
        </div>
        {productData &&
          productData.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              heading={item.heading}
              desc={item.description}
              icon={item.icon}
              item={item}
            />
          ))}
      </div>
      <div className="flex md:hidden justify-center align-center gap-[15px] w-full mt-10 relative">
        <div className="absolute right-[-130px] top-[-100px] rotate-180 -z-10">
          <img src={productSideDesign} alt="" className="w-full h-full" />
        </div>
        <Carousel
          className="rounded-xl w-full overflow-y-visible pb-6"
          prevArrow={({ handlePrev }) => (
            <button
              onClick={handlePrev}
              className="!absolute top-2/4 left-[0px] -translate-y-2/4"
            >
              <GrFormPrevious className="text-4xl text-gray hover:text-pink" />
            </button>
          )}
          nextArrow={({ handleNext }) => (
            <button
              onClick={handleNext}
              className="!absolute top-2/4 !right-[0px] -translate-y-2/4"
            >
              <GrFormNext className="text-4xl text-gray hover:text-pink" />
            </button>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-[0px]  left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 bg-[#FE2260]"
                      : "w-4 bg-[rgba(254,34,96,0.5)]"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {productData &&
            productData.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                heading={item.heading}
                desc={item.description}
                icon={item.icon}
                item={item}
              />
            ))}
        </Carousel>
      </div>

      <div className="absolute left-[-30px] bottom-[-70px] h-[200px] w-[200px] -z-10">
        <img src={productSideDesign} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Product;
