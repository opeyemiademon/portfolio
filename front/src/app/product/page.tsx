"use client"
import React from 'react'

const Page =()=> {
  return (
    <div>
<div className='container mx-auto'>


        {/* navigation */}

<nav>
    <ul className="flex mt-6">
        <li><a href="" className="pb-2 ml-[5rem] text-[#1BC8D3] border-[#1BC8D3] border-b-2">Home</a></li>

        <li><a href="" className=" ml-10 hover:pb-2 hover:text-[#1BC8D3] hover:border-[#1BC8D3] hover:border-b-2 ">Skills</a></li>


        <li><a href="" className=" ml-10 hover:pb-2 hover:text-[#1BC8D3] hover:border-[#1BC8D3] hover:border-b-2 ">Services</a></li>


        <li><a href="" className=" ml-10 hover:pb-2 hover:text-[#1BC8D3] hover:border-[#1BC8D3] hover:border-b-2 ">Works</a></li>

    </ul>
</nav>

{/* header */} 
<header className='hero flex lg:flex-row md:flex-col sm:flex-col justify-between items-center mt-28 '>

    <div>
        <img src="/images/a.jpg" alt="" className='w-[500px]'/>
        
        </div>

<div className="mr-10 ml-10 md:mt-0 sm:mt-[6rem]">

<h1 className="text-5xl font-bold mb-10">
    Web <span className='text-[#1BC8D3]'>Agency</span>
</h1>


<p className='w-96 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum corporis obcaecati a officiis ducimus eius perferendis at eos, itaque, impedit porro explicabo sed dolore repudiandae eveniet sint vel eligendi culpa!</p>

<div className="btns-container">
    <button className='bg-[#1BC8D3] text-white pt-2 pb-2 pl-10 pr-10 mr-5 mb-5'> Services</button>

    <button className='border-b-2 border-black font-bold p-2 ml-6 mb-5'> Learn More</button>
</div>



<div className="flex justify-around md:flex-row sm:flex-col">

<div className="flex flex-col justify-center items-center p-2 mr-5 mt-5 bg-[#1BC8D3]">

    <h1 className="mt-5">
        <span className="font-bold">5 Star</span> Experience
    </h1>


<p className="text-center w-60 p-2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum delectus possimus.
</p>
</div>


<div className="flex flex-col justify-center items-center p-2 mr-5 mt-5 bg-[#1BC8D3] bg-opacity-20">

<h1 className='mt-5'> Make <span className='font-bold'>Your</span> Offer</h1>


<p className="text-center w-60 p-2">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatum delectus possimus. 
</p>


</div>
</div>
</div>
</header>


<section className='mt-[10rem] ml-[5rem] flex justify-between items-center md:flex-row sm:flex-col md:text-left sm:text-center  '>


<div className="">
<h1 className="text-5xl font-bold mb-10"> OUR <br /> <span className='text-[#1BC8D3]'>Skills</span>

</h1>


<p className="w-96 mb-10">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta doloribus aspernatur laboriosam sunt. Alias veritatis beatae porro eveniet suscipit maxime officiis soluta atque rem rerum harum, tempore neque non! Ipsa?
</p>


<button className='bg-[#1BC8D3] text-white py-2 px-10 mr-5 mb-5'>Services</button>
</div>


<div className="image">
    <img src="images/b.jpg" alt="" className='w-[500px]' />
</div>
</section>

<section className="mt-40">

    <h1 className="ml-10 mb-10 text-4xl font-bold">Services</h1>
    <div className='md:h-[40rem] sm:h-auto md:w-60 sm:w-auto items-center bg-[#292A2B] flex md:flex-nowrap sm:flex-wrap'>

        <div className="one">
            <div className="relative w-[300px] ml-10 mb-10 bg-[#1BC8D3] left-20 top-10 p-10">

                <h1 className="font-bold mb-5">Web <br /> Development</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nobis mollitia soluta vero, dolorum autem culpa laudantium quo</p>
            </div>

            <div className="relative w-[300px] ml-10 mb-10 bg-[#1BC8D3] left-20 top-10 p-10">

                <h1 className="font-bold mb-5">Web <br /> Design</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nobis mollitia soluta vero, dolorum autem culpa laudantium quo </p>
            </div>
        </div>





        <div className="two">
            <div className="relative w-[300px] ml-10 mb-10 bg-[#292A2B] left-20 top-10 p-10  text-white">

                <h1 className="font-bold mb-5">Analytic</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nobis mollitia soluta vero, dolorum autem culpa laudantium quo</p>
            </div>

            <div className="relative w-[300px] ml-10 mb-10 bg-[#292A2B] text-white left-20 top-10 p-10">

                <h1 className="font-bold mb-5">SEO <br /> & SMM</h1>

<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nobis mollitia soluta vero, dolorum autem culpa laudantium quo </p>
            </div>
        </div>


    </div>
</section>


<section className='mt-32'>

<h1 className='text-right mr-20 text-5xl font-bold mb-10'> Recent Projects</h1>


<div className="m-20 flex justify-around items-center flex-wrap mx-auto">
    <div className="w-64 m-10">
        <img src="/images/c.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>

    <div className="w-64 m-10">
        <img src="/images/b.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>

    <div className="w-64 m-10">
        <img src="/images/c.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>

    <div className="w-64 m-10">
        <img src="/images/d.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>

    <div className="w-64 m-10">
        <img src="/images/c.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>
    <div className="w-64 m-10">
        <img src="/images/b.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>

    <div className="w-64 m-10">
        <img src="/images/c.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>
    <div className="w-64 m-10">
        <img src="/images/d.jpg" alt="" />

        <div className="text-white bg-[#1BC8D3]">
            Web Design
        </div>
    </div>

</div>
</section>
</div>
<footer className='bg-[#292A2B] py-10'>
    <div className="flex justify-around items-center flex-wrap">
        <div className="card">
            <h1 className="font-bold mb-5 text-white"> SITE MENU</h1>
            <p className='text-white'>About Us</p>
            <p className='text-white'>Photography</p>
            <p className='text-white'>Lens Index</p>
        </div>

        <div className="card"> 
            <h1 className="font-bold mb-5 text-white"> REVIEW</h1>
            <p className='text-white'>Review Archives</p>
            <p className='text-white'>Camera Reviews</p>
            <p className='text-white'>Lens Reviews</p>
            <p className='text-white'>Other Gear Review</p>
        </div>

        <div className="card">
            <h1 className="font-bold mb-5 text-white"> MORE</h1>
            <p className='text-white'>Contact Us</p>
            <p className='text-white'>Subscribe</p>
            <p className='text-white'>Workshops</p>
            <p className='text-white'>Support Us</p>
        </div>

    </div>


</footer>
    </div>
  )
}

export default Page