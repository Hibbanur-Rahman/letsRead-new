import React, { useEffect } from "react";
import productBanner from "../assets/images/product-banner.jpg";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

import productImg1 from "../assets/images/product-img-1.png";
import productImg2 from "../assets/images/product-img-2.png";
import productImg3 from "../assets/images/product-img-3.png";
import productImg4 from "../assets/images/product-img-4.png";

import productCardIcon1 from "../assets/images/product-card-icon-1.svg";
import productCardIcon2 from "../assets/images/product-card-icon-2.svg";
import productCardIcon3 from "../assets/images/product-card-icon-3.svg";
import productCardIcon4 from "../assets/images/product-card-icon-4.svg";

import productSideDesign from "../assets/images/products-side-bottom-design.svg";

const Products = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={productBanner}
          alt="products-photo"
          className="w-screen h-[479px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-10 py-3">
            <h5 className="text-3xl font-bold text-center">Products</h5>
        </div>
      </div>
      <div
        className="w-8/12 rounded-3xl py-4 px-6 flex items-center justify-center relative top-[-50px] shadow-lg"
        style={{
          background:
            "linear-gradient(60deg, rgba(236,0,140,1) 0%, rgba(255,126,126,1) 100%)",
        }}
      >
        <p className=" w-full text-2xl   text-white">
          Explore our wide range of products designed to meet your needs. Find
          the perfect solution for you with just a few clicks.
        </p>
      </div>

      <div className="mt-24 w-full flex flex-col items-center justify-center">
        <div className="flex gap-[40px] font-bold w-10/12">
          <Link to="#" className="text-pink underline text-3xl">
            All
          </Link>
          <Link to="#" className="text-3xl">Books</Link>
        </div>
        <div className="flex justify-center align-center gap-[15px] w-10/12 mt-10 relative">
          <div className="absolute right-[-130px] top-[-100px] rotate-180 -z-10">
            <img src={productSideDesign} alt="" className="w-full h-full" />
          </div>
          <ProductCard
            image={productImg1}
            heading="Let's Read Educator's Handbook"
            desc="Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!"
            icon={productCardIcon1}

          />
          <ProductCard
            image={productImg2}
            heading="Learner&apos;s Guide 1"
            desc="Our Let's Read Learner's Guide 1 is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!"
            icon={productCardIcon2}
          />
          <ProductCard
            image={productImg3}
            heading="Learner&apos;s Book 2: A Vibrant Journey into Phonics Sounds for Young Minds"
            desc="Learner&apos;s book 2 provides invaluable guidance in teaching phonics skills to young learners."
            icon={productCardIcon3}
          />
          <ProductCard
            image={productImg4}
            heading="Learner's Guide 3"
            desc="Discover Phonics Mastery with Learner's Guide Book 3"
            icon={productCardIcon4}
          />
        </div>
        <div className="absolute left-[-30px] bottom-[-70px] h-[200px] w-[200px] -z-10">
          <img src={productSideDesign} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Products;
