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
      heading: "Let's Read Educator's Guide",
      description:
        "Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills effectively. It’s suitable for both teachers, parents and learners of all age groups.",
      icon: productCardIcon1,
      productLink:
        "https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/",
      amount: 600,
    },
    {
      id: 2,
      image: productImg2,
      heading: "Let’s Read Kits",
      description:
        "Let's Read kits are fun, engaging hands-on activities and games that support reading at every level. Purchase these exciting activities to make reading stress free.",
      icon: productCardIcon1,
      productLink:
        "https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/",
      amount: 8000,
    },
    {
      id: 3,
      image: productImg3,
      heading: "Level 0 Kit",
      description:
        "Level 0 is for beginners and mostly young children. The carefully planned set of activities help the children to transition from mother tongue to English, recognise letters and associate sounds with symbols. Although this level is for early years, activities like the picture cards can be used as prompts for older children to improve spoken English. The Level 0 manual describes every activity in detail.",
      icon: productCardIcon1,
      productLink:
        "https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/",
      amount: 8000,
    },
    {
      id: 4,
      image: productImg4,
      heading: "Level 1 Kit",
      description:
        "Level 1 is all about learning to read CVC (3 letter) words, sentences and stories. The carefully selected activities help young learners to master fluency in reading and pick up speed. This kit is excellent for building self esteem for your little ones. The Level 1 kit comes with a detailed manual that describes every activity in the kit.",
      icon: productCardIcon1,
      productLink:
        "https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/",
      amount: 8000,
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
