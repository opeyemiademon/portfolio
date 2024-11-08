"use client"
import React from 'react'
import dynamic from "next/dynamic"

const AnimatedNumbers = dynamic(()=>{return import("react-animated-numbers")}, {ssr:false})

const data = [
    {metric:"Projects", value:"90", postfix:'+'},
    {metric:"Users", value:"100,000", prefix:'~'},
    {metric:"Awards", value:"70", postfix:'+'},
    {metric:"Years", value:"5", postfix:''}
] 
const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        
        {data.map((ls:any, id:number)=>{
        return (<div key={id} className='flex flex-col item-center justify-center mx-4'>
            <h2 className='text-white text-4xl font-bold flex flex-row'>{ls.prefix}
                <AnimatedNumbers 
              includeComma
              animateToNumber={parseInt(ls.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                transitions={(index:number) => ({
                    type: "spring",
                    mass:1,
                    duration: 140 + (index+1),
                  })}
              
                />
                {ls.postfix}
            </h2>
            <p className='text-[#ADB7BE] text-base'>{ls.metric}</p>
        </div>)
    })} 
     
    </div>
    </div>
  )
}

export default AchievementsSection