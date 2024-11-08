"use client"
import React from 'react'
import Image from 'next/image'

const Page =()=> {
  return (
    <div  className={`bg-[#FBF7EE] container mx-auto`}>
    <nav className="flex justify-around">
        <div className="logo mt-5">
            <h1>Branding</h1>
        </div>

        

        <div className="nav-images mt-5">
            <img src="" className='inline ml-10' alt="SVG 1" />
            <img src="" className='inline ml-10' alt="SVG 2" />
            <img src="" className='inline ml-10' alt="SVG 3" />
        </div>
    </nav>

    <header className="mt-20 flex justify-around">
        <div className="card-one">
            <h1 className="fontbold mb-9 text-3xl"> Spring / Summer Vibs</h1>
            <p className='w-[340px] font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore debitis eius consectetur amet officia ratione, fugit ad fuga beatae eaque dolor vel, obcaecati ducimus nostrum repellendus ipsam sed earum minima!</p>

<img src="/images/a.jpg" alt="profile" className='w-[300px] mt-8' />
       
        </div>


        <div className="card-two">

<img src="/images/b.jpg" alt="profile" className='w-[300px] mt-8 rounded-t-[40rem]' />
           
            <p className='w-[340px] font-light mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore debitis eius consectetur amet officia ratione, fugit ad fuga beatae eaque dolor vel, obcaecati ducimus nostrum repellendus ipsam sed earum minima!</p>

       <button className="border border-[#AF7452] pt-2 pb-2 pl-5 pr-5"> Explore</button>
        </div>

    </header>


    <section className="flex justify-around pt-20">
        <div className="flex flex-col justify-around items-start">
            <h1 className="font-bold mb-9 text-3xl">An Industrial Tak <br />
            On Streetwear</h1>

            <p className='w-[340px] mb-5 font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a quaerat provident labore repellat perspiciatis dolore rem aut porro corporis sequi, quos ea voluptatem sapiente vitae incidunt, officia rerum beatae?</p>

            <button className="border border-[#AF7452] pt-2 pb-2 pl-5 pr-5"> Shop Now</button>
            
        </div>


        <img src="/images/c.jpg" alt="" className='w-[300px] mb-8' />
    </section>


    <section className="flex justify-center items-center mt-20 p-10">
<div className="p-10 ml-10">
   
    <h1 className="font-bold mb-6">Buy Now, Pay Later</h1>
    <p className="font-thin w-[14rem]">0% interest financing available after 30 days </p>

    <button className="border border-[#AF7452] pt-2 mt-5 pb-2 pl-5 pr-5"> Shop Now</button>
</div>


<div className="p-10 ml-10">
   
    <h1 className="font-bold mb-6">Secured Payment</h1>
    <p className="font-thin w-[14rem]">Guarantee 100 secure payment in our website </p>

    <button className="border border-[#AF7452] pt-2 mt-5 pb-2 pl-5 pr-5"> Shop Now</button>
</div>

<div className="p-10 ml-10">
   
    <h1 className="font-bold mb-6">Cashback Reward</h1>
    <p className="font-thin w-[14rem]">Collect and redeem any order that you purchase </p>

    <button className="border border-[#AF7452] pt-2 mt-5 pb-2 pl-5 pr-5"> Shop Now</button>
</div>
    </section>
    </div>
  ) 
}

export default Page 