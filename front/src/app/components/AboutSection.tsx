"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
const AboutSection =()=> {
const [tab, setTab] = useState("skills");
const [isPending, startTransition] = useTransition();

const TAB_DATA = [

        {title:'Skills',
            id:'skills',
            content:(<ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>)
        },
        {title:'Education',
            id:'education',
            content:(<ul className='list-disc pl-2'>
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>)
        },
        {title:'Certification',
            id:'certification',
            content:(<ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>)
        }

]
const handleTabChange = (id:string)=>{
startTransition(()=>{
    setTab(id)
}) 
}
  return (
   <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>

<Image src='/images/ade.jpeg' width={500} height={500} alt="" />

<div className='mt-4 md:mt-0 text-left flex flex-col h-full '>
    <h1 className='text-4xl font-bold text-white mb-4'>About Me</h1>
    <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias voluptate quam necessitatibus aliquam minus.</p>

    <div className="flex flex-row mt-8">
        <TabButton selectTab={()=>handleTabChange('skills')} active={tab==='skills'} >
                Skills
            </TabButton>
            <TabButton selectTab={()=>handleTabChange('education')} active={tab==='education'} >
                Education
            </TabButton>
            <TabButton selectTab={()=>handleTabChange('certification')} active={tab==='certification'} >
                Certification
            </TabButton>
    </div>

    <div className='mt-8 '>{TAB_DATA.find((t:any)=>t.id === tab)?.content}
        

    </div>
</div>
    </div>

   </section>
  )
}

export default AboutSection