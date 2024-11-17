import React, { useEffect } from "react";
import productBanner from "../assets/images/product-banner.jpg";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";

import productImg1 from "../assets/images/product-img-1.png";
import productImg2 from "../assets/images/product-img-2.png";
import productImg3 from "../assets/images/product-img-3.png";
import productImg4 from "../assets/images/product-img-4.png";
import productImg5 from "../assets/images/product-img-5.jpg";
import productImg6 from "../assets/images/product-img-6.jpg";
import productImg7 from "../assets/images/product-img-7.webp";
import productImg8 from "../assets/images/product-img-8.webp";
import productImg9 from "../assets/images/product-img-9.webp";
import productImg10 from "../assets/images/product-img-10.jpg";
import productImg11 from "../assets/images/product-img-11.jpg";
import productImg12 from "../assets/images/product-img-12.jpg";
import productImg13 from "../assets/images/product-img-13.jpeg";
import productImg14 from "../assets/images/product-img-14.jpg";
import productImg15 from "../assets/images/product-img-15.webp";
import productImg16 from "../assets/images/product-img-16.webp";
import productImg17 from "../assets/images/product-img-17.jpg";
import productImg18 from "../assets/images/product-img-18.webp";
import productImg20 from "../assets/images/product-img-20.webp";
import productImg21 from "../assets/images/product-img-21.webp";
import productImg22 from "../assets/images/product-img-22.jfif";
import productImg23 from "../assets/images/product-img-23.jfif";
import productImg24 from "../assets/images/product-img-24.jpg";
import productImg25 from "../assets/images/product-img-25.webp";

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
      heading: "Let's Read Educator's Guide",
      description:
        "Our Let's Read Educator's Handbook is your ultimate guide to teaching phonics skills effectively. It’s suitable for both teachers, parents and learners of all age groups.",
      icon: productCardIcon1,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:600,
    },
    {
      id: 2,
      image: productImg2,
      heading: "Let’s Read Kits",
      description:
        "Let's Read kits are fun, engaging hands-on activities and games that support reading at every level. Purchase these exciting activities to make reading stress free.",
      icon: productCardIcon1,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:8000,
    },
    {
      id: 3,
      image: productImg3,
      heading: "Level 0 Kit",
      description:
        "Level 0 is for beginners and mostly young children. The carefully planned set of activities help the children to transition from mother tongue to English, recognise letters and associate sounds with symbols. Although this level is for early years, activities like the picture cards can be used as prompts for older children to improve spoken English. The Level 0 manual describes every activity in detail.",
      icon: productCardIcon1,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:8000,
    },
    {
      id: 4,
      image: productImg4,
      heading: "Level 1 Kit",
      description:
        "Level 1 is all about learning to read CVC (3 letter) words, sentences and stories. The carefully selected activities help young learners to master fluency in reading and pick up speed. This kit is excellent for building self esteem for your little ones. The Level 1 kit comes with a detailed manual that describes every activity in the kit.",
      icon: productCardIcon1,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:8000,
    },
    {
      id: 5,
      image: productImg5,
      heading: "Level 2 Kit",
      description:
        "Level 2 has words with blends, digraphs, double consonants, compound words, and magic-e, sentences and stories. The carefully selected activities help young learners to become proficient in reading and pick up speed. This kit is excellent for building self esteem for your little ones. The Level 2 kit comes with a detailed manual that describes every activity in the kit.",
      icon: productCardIcon1,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:8000,
    },
    {
      id: 6,
      image: productImg6,
      heading: "Level 3 Kit",
      description:
      "Level 3 has activities with long vowel A,E,I,O, U families, complex, tricky phonograms and games to learn spelling rules, read sentences and long paragraphs fluently. The carefully selected activities help young  learners to attain mastery in reading age appropriate books. This kit is excellent for building self esteem for children of all age groups. The Level 3 kit comes with a detailed manual that describes every activity in the kit.",
      icon: productCardIcon1,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:8000,
    },
    {
      id: 7,
      image: productImg7,
      heading: "Let’s Read School Books",
      description:
      "The Let's Read school books are written for Nursery, Junior KG, Senior KG and Class1 . It’s suitable for teachers, parents and learners of respective age groups.",
      icon: productCardIcon2,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:300,
    },
    {
      id: 8,
      image: productImg8,
      heading: "Let’s Read Nursery Reader and Workbook",
      description:
      "The Let's Read Nursery Reader is especially designed to teach spoken English to second language learners. The book focuses on developing listening and speaking skills and ensures smooth transition from mother to English. The workbook is filled with cognitive stimulation activities that stimulate higher order thinking skills and are perfect for tiny tots. The stickers and tracing activities are an instant favourite with toddlers",
      icon: productCardIcon3,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount: 300,
    },
    {
      id: 9,
      image: productImg9,
      heading: "Let’s Read Jr. KG Reader and Workbook",
      description:
      "The Let's Read Jr. KG Reader is especially designed to practise reading CVC words and sentences with confidence and speed. The simple related illustrations help to build comprehension. Our structured approach makes reading stress free and a lot of fun.",
      icon: productCardIcon3,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount: 180,
    },
    {
      id: 10,
      image: productImg10,
      heading: " Let’s Read Sr. KG Reader and Workbook",
      description:
      "The Let's Read Sr. KG Reader is especially designed to practise words with blends, digraphs, double consonants, compound words, and magic-e, sentences and stories.The simple related illustrations help to build comprehension. Our structured approach makes reading stress free and a lot of fun.",
      icon: productCardIcon3,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount: 180,
    },
    {
      id: 11,
      image: productImg11,
      heading: "Let’s Read Class 1 Reader and Workbook",
      description:
      "The Let's Read Class 1 Reader is especially designed to practise long vowel A,E,I,O, U families, complex, tricky phonograms, learn spelling rules, read sentences and long paragraphs fluently. The simple related illustrations help to build comprehension. Our structured approach makes reading stress free and a lot of fun.The workbook is filled with cognitive stimulation activities that stimulate higher order thinking skills and are perfect for proficient readers. They provide the correct amount of challenge to build mastery.",
      icon: productCardIcon3,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount: 240,
    },
    {
      id: 12,
      image: productImg12,
      heading: "Let’s Read Reading Age Diagnostic Tool (LR_RADT)",
      description:
      "The Let's Read - Reading Age Diagnostic Tool is a simple to use assessment tool that takes less than a minute to identify the Reading Age of a learner. All instructions of use are given in the manual. It is user friendly and does not require any formal training.",
      icon: productCardIcon3,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount: 500,
    },
    {
      id: 13,
      image: productImg13,
      heading: "Let’s Read Educational Games",
      description:
      "The ancient game of Snakes and Ladders is modified to read sight words instead of numbers! This simple, multiple player game is suitable for young children and a perfect birthday present! Your little one will learn 100 sight words through fun and play!",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:550,
    },
    {
      id: 14,
      image: productImg14,
      heading: "Snakes and Ladders",
      description:
      "The ancient game of Snakes and Ladders is modified to read sight words instead of numbers! This simple, multiple player game is suitable for young children and a perfect birthday present! Your little one will learn 100 sight words through fun and play!",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:550,
    },
    {
      id: 15,
      image: productImg15,
      heading: "Lexicon",
      description:
      " Lexicon is an exciting game to learn grammar - parts of speech and build fantastic vocabulary. This simple, multiple player game is suitable for young children and is a perfect birthday present! It can also be considered for prize distribution in schools. Reinforce grammar concepts through fun and play !",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:599,
    },
    {
      id: 16,
      image: productImg16,
      heading: "Bingo Lingo",
      description:
      " Bingo Lingo is an all time favourite of school children. This exciting group game enhances vocabulary, improves spelling rules and word meanings. It is suitable for young children and is a perfect birthday present! It can also be considered for prize distribution in schools. Make learning enjoyable through Bingo Lingo! Every set has got a different spelling rule.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:600,
    },
    {
      id: 17,
      image: productImg17,
      heading: "Silent Letters Word Game",
      description:
      "Silent Letters Game is an instant hit. This exciting group game enhances vocabulary and helps learners to reinforce the rules of reading words with silent letters. It is suitable for young children and is a perfect birthday present! It can also be considered for prize distribution in schools. Make spellings enjoyable through the silent letter game.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:600,
    },
    {
      id: 18,
      image: productImg18,
      heading: "Phoneme Cubes",
      description:
      "Phoneme cubes are interesting educational blocks that have a combination of sounds written on either side. It is a fun family game or a group game for children. You roll the dice and say words or spellings with that combination. The cubes are excellent to revise/ assess spellings, vocabulary or even word meanings. Educators can make up their own rules and modify them to suit the learner.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:600,
    },
    {
      id: 19,
      image: productImg2,
      heading: "Alphabet Blocks",
      description:
      "Alphabet blocks are interesting educational cubes that have letters from a-z written on either side. It is an interesting activity for children. The learner can arrange the letters in sequence, or build words, fill in and place missing letters or stack up the blocks to build big words. These blocks enhance eye hand coordination, build fine motor skills and enhance cognitive and critical thinking skills. Educators can make up their own rules and modify instructions to suit the learner and make the activity easier or challenging.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:600,
    },
    {
      id: 20,
      image: productImg20,
      heading: "Tangle Mangle",
      description:
      "Tangle Mangle is a fantastic game that requires movements and enhances gross motor skills. The learner has to twist and move his/her body to spell 3 or 4 / 5 letter words! The squeals of laughter and giggles makes this game incomparable! The educator can say words that are challenging or easy according to the level of the child.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:699,
    },
    {
      id: 21,
      image: productImg21,
      heading: "Hop Skip Jump",
      description:
      "Hop Skip Jump is a fantastic game that requires movements and enhances gross motor skills. The learner has to twist and move his/her body to  recognise letters of the alphabet. The squeals of laughter and giggles makes this game incomparable! The educator can say letters and the child has to look for it and step on it. The adult can make the game challenging or easy according to the level of the child.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:699,
    },
    {
      id: 22,
      image: productImg22,
      heading: "DOT Books - Level 1 - Set 1, Set 2, Set 3, Set 4, Set 5",
      description:
      "The level 1 DOT Books series help learners to master 3 letter words. Each set consists of a word book, a sight word book, a sentence book and two story books. The set focuses on a particular vowel sound and the entire set has words with the same sound. DOT Books are unique and one of it’s kind !",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:599,
    },
    {
      id: 23,
      image: productImg23,
      heading: "DOT Books - Level 2 - Set 1, Set 2, Set 3, Set 4, Set 5",
      description:
      "The level 2 DOT Books series help learners to master words with blends, digraphs, double consonants, compound words, magic e words.. Each set consists of a word book, a sight word book, a sentence book and two/three story books. The set focuses on a particular phoneme and the entire set practises the same phoneme. DOT Books are unique and one of its kind ! Experience the joy of watching your child gain confidence and master the art of reading!",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:599,
    },
    {
      id: 24,
      image: productImg24,
      heading: "Where Did They Come From ?",
      description:
      "A beautifully written book in poetry form; this book explores the wonders of the universe and instills a sense of wonder and joy in the child’s mind. Dive into the magical world of the mysteries of nature and ponder on the echoing chorus of the book… Where did they come from ?",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:449,
    },
    {
      id: 25,
      image: productImg25,
      heading: "Thulir’s Stroll",
      description:
      "This delightful book explores the critters (creatures) of the Western Ghat. It is written as a poetry and is a fascinating journey of a young girl as she observes and explores tiny yet magnificent creatures in the Western ghats.",
      icon: productCardIcon4,
      productLink:'https://letsreadindia.myinstamojo.com/product/snakes-and-ladders/',
      amount:449,
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
