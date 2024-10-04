import React from "react";
import BenefitImg from "../assets/images/photo.png"

const Benefit = () =>{
    return(
        <div>
        <div className="flex gap-[80px] mb-48">
           <div className="w-6/12 font-bold">
             <h1 className="text-3xl ml-10 mt-10 " > 
                 Benefits Section
             </h1>
             <p className="ml-10 mt-10  ">Unlock a treasure trove of advantages with Let's Read</p>
              <ul className="ml-10 mt-10 w-7/12 text-lg">
                <li>
                   <span className="text-pink">Promotes Hands-On Learning:</span> Engages young learners with tactile experiences that ignite curiosity and foster active participation.
                </li>
                <li>
                   <span className="text-pink">Enhances Phonics Skills:</span>  Provides a solid foundation for phonetic literacy, paving the way for confident and articulate communicators.
                </li>
                <li>
                   <span className="text-pink"> Fosters Early Literacy:</span> Nurtures a love for language and literature from the very outset, laying the groundwork for a lifelong journey of learning and discovery.
                </li>
                <li>
                   <span className="text-pink-"> Makes Learning Enjoyable for Kids:</span> Infuses the process of learning with joy, laughter, and boundless imagination, ensuring that each session is brimming with excitement and wonder.
                </li>
              </ul>
              <button className='bg-pink px-4 py-2 ml-10  my-6 rounded-lg font-bold'>Contact Us</button>
               
           </div>
           <img 
                src={BenefitImg}
                alt="objImg"
                className="w-[550px] h-[500px] mt-28"
               />
        </div>
     </div>
    )
}

export default Benefit;