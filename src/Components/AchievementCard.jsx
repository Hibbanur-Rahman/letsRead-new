const AchievementCard=({number,icon,desc})=>{
    return(
        <div className="md:w-4/12  p-3 flex-shrink-0">
            <div className="rounded-xl shadow-md p-6" style={{background:'linear-gradient(45deg,#551F64,#AC3FCA)'}}>
                <div className="flex justify-between">
                    <h1 className="text-white text-6xl">{number}</h1>
                    <img src={icon} alt="" className="h-[60px] w-[60px]"/>
                </div>
                <p className="text-white text-center font-semiBold text-2xl mt-7">{desc}</p>
            </div>
        </div>
    )
}

export default AchievementCard;