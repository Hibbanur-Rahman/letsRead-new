import React from "react";
import ContentImg from "../assets/images/content.png";

const Content = () =>{
    return(
        <div>
            <div className="flex gap-[80px] mb-48">
           <div className="w-6/12 font-bold">
             <h1 className="text-3xl ml-10 mt-10 " > 
                 Contents
             </h1>
             <p className="ml-10 mt-10  ">Dive into a world of discovery with Let's Read, where every kit is brimming with:</p>
              <ul className="ml-10 mt-10 w-7/12 text-lg">
                <li>
                   <span className="text-pink">Activity Cards:</span>Engaging prompts and challenges that spark creativity and imagination.
                </li>
                <li>
                   <span className="text-pink-">Tracing Sheets: </span>Precision-crafted worksheets that enhance fine motor skills and reinforce letter formation.
                </li>
                <li>
                   <span className="text-pink"> Pegs: </span>Interactive tools that add an extra layer of excitement to learning, turning every activity into an adventure.
                </li>
                <li>
                   <span className="text-pink"> And More:</span> Unlock a treasure trove of surprises and delights as you explore the rich tapestry of activities within Let's Read, designed to inspire, engage, and empower young learners on their phonics journey.
                </li>
              </ul>
              <button className='bg-pink px-4 py-2 ml-10  my-6 rounded-lg font-bold'>Contact Us</button>
               
           </div>
           <img 
                src={ContentImg}
                alt="objImg"
                className="w-[550px] h-[500px] mt-28"
               />
        </div>
        </div>
    )
}

export default  Content









