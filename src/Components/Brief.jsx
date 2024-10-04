import React from "react";
import BriefImage from "../assets/images/Breif1.png";

const Brief = () => {
  return (

   <div>
     <div className="flex justify-between mt-10" >
     <div className="w-6/12">
      <h1 className="font-bold text-2xl w-11/12">
        Let's Read provides a dynamic platform for children aged 3-4 to
        seamlessly transition from their native language to English.
      </h1>
      <p className="mt-2 text-lg w-10/12" > 
        Let's Read introduces an immersive kinesthetic activity kit meticulously
        crafted to make the journey of learning English phonics a delightful
        adventure for preschoolers. Bursting with an array of hands-on
        engagements, Let's Read provides a dynamic platform for children aged
        3-4 to seamlessly transition from their native language to English.
        Through captivating games and enchanting stories, children not only
        forge connections between letter symbols and phonetic sounds but also
        cultivate fundamental early reading skills, ensuring a captivating and
        enduring learning experience.
      </p>
    </div>
     <div>
         <img 
         src={BriefImage}
         alt="briefImage"
         className="w-[600px] h-[350px]"
         />
     </div>
    </div>
     <div  className="flex justify-between mt-28 mb-32">
         <img 
         src={BriefImage}
         alt="briefImage"
         className="w-[400px] h-[350px]"
         />
        <div className="w-6/12 ">
        <p className="mt-2 text-lg w-10/12 text-end" > 
        Let's Read introduces an immersive kinesthetic activity kit meticulously
        crafted to make the journey of learning English phonics a delightful
        adventure for preschoolers. Bursting with an array of hands-on
        engagements, Let's Read provides a dynamic platform for children aged
        3-4 to seamlessly transition from their native language to English.
        Through captivating games and enchanting stories, children not only
        forge connections between letter symbols and phonetic sounds but also
        cultivate fundamental early reading skills, ensuring a captivating and
        enduring learning experience.
      </p>
      <button className='bg-orange-400 text-white px-4 py-2 rounded-lg font-bold float-right mr-28 mt-4' >Enquire Now</button>
       
        </div>
     </div>
   </div>
    
  );
};

export default Brief;
