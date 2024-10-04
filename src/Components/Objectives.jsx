import React from "react"
import ObjectImg from "../assets/images/Objectives.png"

const Objectives = () =>{
    return(
        <div>
           <div className="flex gap-[80px] mb-48">
              <div className="w-6/12 font-bold">
                <h1 className="text-3xl ml-10 mt-10"> 
                    Learning Objectives
                </h1>
                 <ul className="ml-10 mt-6">
                   <li>
                   Listening and Speaking: Abundant opportunities for lively conversations and interactive exchanges.
                   </li>
                   <li>
                   Story Cards: Facilitating a smooth transition from the familiar contours of their mother tongue to the enchanting vistas of English.
                   </li>
                   <li>
                   Sound Recognition: Sharpening young ears to discern the nuances of phonetic elements.
                   </li>
                   <li>
                   Identification and Memory: Strengthening cognitive abilities through active recognition and recall.
                   </li>
                   <li>
                   Pronunciation: Cultivating clear and confident articulation.
                   </li><li>
                   Tracing: Nurturing fine motor skills and fostering a sense of precision and control.
                   </li>
                 </ul>
              </div>
              <img 
                   src={ObjectImg}
                   alt="objImg"
                   className="w-[500px] h-[340px] mt-10"
                  />
           </div>
        </div>
    )
}


export default Objectives;

