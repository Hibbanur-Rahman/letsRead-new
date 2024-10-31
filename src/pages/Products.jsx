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
  const productDetails = [
    {
      id: 1,
      image: productImg1,
      heading: "Let's Read Educator's Handbook",
      description:
        "Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!",
      icon: productCardIcon1,
      amount:600,
    },
    {
      id: 2,
      image: productImg2,
      heading: "Learner's Guide 1",
      description:
        "Our Let's Read Learner's Guide 1 is your ultimate guide to teaching phonics skills effectively. Thank you for choosing Let's Read!",
      icon: productCardIcon2,
      amount:350,
    },
    {
      id: 3,
      image: productImg3,
      heading:
        "Learner's Book 2: A Vibrant Journey into Phonics Sounds for Young Minds",
      description:
        "Learner's book 2 provides invaluable guidance in teaching phonics skills to young learners.",
      icon: productCardIcon3,
      amount:255,
    },
    {
      id: 4,
      image: productImg4,
      heading: "Learner's Guide 3",
      description: "Discover Phonics Mastery with Learner's Guide Book 3",
      icon: productCardIcon4,
      amount:250,
    },
    {
      id: 5,
      image: productImg1,
      heading: "Let’s Read Kits",
      description:
        "Let's Read kits are fun, engaging hands-on activities and games that support reading at every level. Purchase these exciting activities to make reading stress free.",
      icon: productCardIcon1,
      amount:8000,
    },
    {
      id: 6,
      image: productImg2,
      heading: "Let’s Read School Books",
      description:
        "The Let's Read school books are written for Nursery, Junior KG, Senior KG and Class1 . It’s suitable for teachers, parents and learners of respective age groups.",
      icon: productCardIcon2,
      amount:250,
    },
    {
      id: 7,
      image: productImg3,
      heading: "Let’s Read Nursery Reader and Workbook",
      description:
        "Let's Read kits are fun, engaging hands-on activities and games that support reading at every level. Purchase these exciting activities to make reading stress free.",
      icon: productCardIcon3,
      amount: 300,
    },
    {
      id: 8,
      image: productImg2,
      heading: "Let’s Read School Books",
      description:
        "The Let's Read school books are written for Nursery, Junior KG, Senior KG and Class1 . It’s suitable for teachers, parents and learners of respective age groups.",
      icon: productCardIcon4,
      amount:180,
    },
    {
      id: 9,
      image: productImg1,
      heading: "Let’s Read Nursery Reader and Workbook",
      description:
        "The Let's Read Nursery Reader is especially designed to teach spoken English to second language learners. The book focuses on developing listening and speaking skills and ensures smooth transition from mother to English.",
      icon: productCardIcon1,
      amount:250,
    },
    {
      id: 10,
      image: productImg2,
      heading: "Let’s Read Jr. KG Reader and Workbook",
      description:
        "The Let's Read Jr. KG Reader is especially designed to practise reading CVC words and sentences with confidence and speed. The simple related illustrations help to build comprehension. Our structured approach makes reading stress free and a lot of fun.",
      icon: productCardIcon2,
      amount:250,
    },
    {
      id: 11,
      image: productImg3,
      heading: "Let’s Read Sr. KG Reader and Workbook",
      description:
        "The Let's Read Sr. KG Reader is especially designed to practise words with blends, digraphs, double consonants, compound words, and magic-e, sentences and stories.The simple related illustrations help to build comprehension. Our structured approach makes reading stress free and a lot of fun.",
      icon: productCardIcon3,
      amount:250,
    },
    {
      id: 12,
      image: productImg2,
      heading: "Let’s Read Class 1 Reader and Workbook",
      description:
        "The Let's Read Class 1 Reader is especially designed to practise long vowel A,E,I,O, U families, complex, tricky phonograms, learn spelling rules, read sentences and long paragraphs fluently. The simple related illustrations help to build comprehension. Our structured approach makes reading stress free and a lot of fun.",
      icon: productCardIcon4,
      amount:250,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="banner w-full flex items-center justify-center">
        <img
          src={productBanner}
          alt="products-photo"
          className="w-screen md:h-[479px] h-[300px] object-cover object-center overflow-hidden"
        />
        <div className="absolute bg-white flex items-center justify-center px-10 py-3">
          <h5 className="md:text-3xl text-xl font-bold text-center">
            Products
          </h5>
        </div>
      </div>
      <div
        className="md:w-8/12 w-11/12 rounded-3xl py-4 md:px-6 px-3 flex items-center justify-center relative top-[-50px] shadow-lg"
        style={{
          background:
            "linear-gradient(60deg, rgba(236,0,140,1) 0%, rgba(255,126,126,1) 100%)",
        }}
      >
        <p className=" w-full md:text-2xl text-base   text-white">
          Explore our wide range of products designed to meet your needs. Find
          the perfect solution for you with just a few clicks.
        </p>
      </div>

      <div className="md:mt-24 md:mb-0 mb-8 w-full flex flex-col items-center justify-center">
        <div className="flex gap-[40px] font-bold w-10/12">
          <Link to="#" className="text-pink underline text-3xl">
            All
          </Link>
          <Link to="#" className="text-3xl">
            Books
          </Link>
        </div>
        <div className="flex md:flex-row flex-wrap flex-col justify-center align-center gap-y-[20px] md:w-10/12 mt-10 relative">
          <div className="absolute right-[-130px] top-[-100px] rotate-180 -z-10">
            <img src={productSideDesign} alt="" className="w-full h-full" />
          </div>
          {Array.isArray(productDetails) &&
            productDetails?.length > 0 &&
            productDetails.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                heading={item.heading}
                desc={item.description}
                icon={item.icon}
                item={item}
              />
            ))}
        </div>
        <div className="absolute left-[-30px] bottom-[-70px] h-[200px] w-[200px] -z-10">
          <img src={productSideDesign} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Products;
