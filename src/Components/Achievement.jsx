import React from 'react'
import headerDesign from "../assets/images/program-header-design.svg";
import AchievementCard from './AchievementCard';

import AchievementCardIcon1 from '../assets/images/achievement-card-icon-1.svg'
import AchievementCardIcon2 from '../assets/images/achievement-card-icon-2.svg'
import AchievementCardIcon3 from '../assets/images/achievement-card-icon-3.svg'
const Achievement = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center m-0 p-0 mt-16'>
       <h1 className="text-center text-3xl md:text-5xl font-bold leading-none m-0 p-0">
          Our Achievements
        </h1>
        <div className="flex justify-center items-center relative w-full m-0 p-0">
          <div className="relative top-[-10px] right-[-10px] h-[3px] md:w-[350px] w-[220px] bg-pink"></div>
          <img
            src={headerDesign}
            className="relative h-[50px] w-[50px]"
            alt="header design"
          />
        </div>

        <div className="flex md:flex-row md:overflow-x-hidden overflow-x-scroll md:w-9/12 w-full  items-center md:justify-center mt-10">
          <AchievementCard number="1%" icon={AchievementCardIcon1} desc="Successfull Trainings"/>
          <AchievementCard number="1" icon={AchievementCardIcon2} desc="Dedicated Team Members"/>
          <AchievementCard number="1000" icon={AchievementCardIcon3} desc="People Reached"/>
        </div>
    </div>
  )
}

export default Achievement;
