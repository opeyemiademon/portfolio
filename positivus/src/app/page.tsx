"use client"

import { useState } from "react";
//import dynamic from 'next/dynamic'

const  Home =()=> {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value:number) => setOpen(open === value ? 0 : value);
 
  const clients = [
    "/images/clients/client-1.svg",
    "/images/clients/client-2.svg",
    "/images/clients/client-3.svg",
    "/images/clients/client-4.svg",
    "/images/clients/client-5.svg",
    "/images/clients/client-6.svg",
  ]

 
  return (
    <>
 {/*    header section */}
    <header id="header" className="sticky top-0 right-0 left-0 z-50 bg-color-white" suppressHydrationWarning={true}>
      <nav className="container mx-auto py-5 relative">

        <div className="flex flex-row items-center justify-between px-4 lg:px-0">
          <div className="flex flex-row items-center justify-center">

            <img src="/images/logo.svg" alt="logo" className="md:w-6 md:h-6 h-5 w-5" />
            <h2 className="text-xl md:text-2xl tracking-wider ml-2">Positivus</h2>

          </div>

          <div >
            <ul className="hidden lg:flex flex-row gap-0 lg:gap-5 justify-around items-center">
              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">About Us</a></li>

              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Services</a></li>

              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Use Caes</a></li>

              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Pricing</a></li>
              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Blog</a></li>
              <li className="hover:bg-color-primary hover:rounded-md py-3 px-5 ease-in-out  duration-300 border rounded-md  border-color-dark "><a href="#" className="text-sm ">Request a quote</a></li>
            </ul>

<div id='hamburger' className="inline-block lg:hidden">
<i  className="fa-solid fa-bars text-xl  "></i>
</div>
            
           
          </div>

        </div>



        <div id="mobile_menu" className="mobile_menu hidden top-0 absolute bg-color-white w-full h-svh">
            <ul className="flex flex-col gap-5 justify-around items-center py-5">
              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">About Us</a></li>

              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Services</a></li>

              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Use Caes</a></li>

              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Pricing</a></li>
              <li className="hover:bg-color-primary hover:rounded-md p-3 ease-in-out  duration-300 "><a href="#" className="text-sm">Blog</a></li>
              <li className="hover:bg-color-primary hover:rounded-md py-3 px-5 ease-in-out  duration-300 border rounded-md  border-color-dark "><a href="#" className="text-sm ">Request a quote</a></li>
            </ul>

<div className=" absolute top-0 right-0 mr-4 mt-4">
            <i id='nav-close' className="fa-solid fa-xmark text-xl inline-block md:hidden"></i>
            </div>
          </div>
      </nav>
    </header>


    <main suppressHydrationWarning={true}>

  {/*     hero section */}
<section className="px-4 lg:px-0 lg:py-5">

        <div className="container mx-auto">
<div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 ">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight  lg:w-4/5">Navigating the digital landscape for success</h2>

            <div className="w-full flex md:hidden items-center justify-center">
            <img src="/images/illustration.svg" alt="item 1" className="" />
          </div>

            <p className="py-5 text-sm md:text-base tracking-wider lg:w-4/5 w-full">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="btn btn-secondary w-full lg:w-1/2">Book a consultation</button>
            </div>

          <div className="hidden md:w-1/2 md:flex items-center justify-center">
            <img src="/images/illustration.svg" alt="item 1" className="" />
          </div>
          </div>
        </div>
      </section>

      {/* client section  */}
      <section className="px-4 lg:px-0">
        <div className="container mx-auto py-10">

          <div className="flex flex-row flex-wrap gap-10 lg:gap-0 lg:justify-between">
            {clients.map((item:any, id:number)=> <img src={item} key={id}  alt="company logo" className="grayscale  w-20 h-12 " />
          )}


          </div>
        </div>
      </section>

      <section className="md:py-10 py-5 px-4 lg:px-0 ">
        <div className="container mx-auto">

          <div className="flex flex-col md:flex-row md:gap-5 gap-0  items-center">
            <h2 className="bg-color-primary w-max text-2xl  rounded-md p-1 font-semibold mb-8 md:mb-0">Services</h2>
            <p className="text-sm w-full  md:w-2/3 tracking-wide">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>


          

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2  md:gap-5 ">

            {/* card one */}
            <div className="flex flex-row justify-between p-10 bg-color-grey rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0">
              
              <div className="flex flex-col justify-between ">
              <div>

              <h3 className="bg-color-primary w-max-content text-xl rounded-md w-max px-1 ">Search engine</h3>
              <p className="bg-color-primary text-xl w-max rounded-md px-1">optimization</p>
              
              </div>

              
              <div className="flex flex-row gap-2  items-center">
              <div className="w-7 h-7 bg-color-dark rounded-full flex items-center justify-center -rotate-45 "> 
                <i className="fa fa-arrow-right text-color-primary text-xl"></i>
                </div>
              <a href="#" className="text-xs hidden md:block  hover:opacity-80 ease-in-out duration-200 ">Learn More</a>
              </div>
              </div>

              <div>
                <img src="/images/cards/card-1.svg" alt="item" className="h-40 " />
              </div>
             


            </div>

{/* card two */}

<div className="flex flex-row justify-between p-10 bg-color-primary rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0">
              
              <div className="flex flex-col justify-between ">
              <div>

              <h3 className="bg-color-grey w-max-content text-xl rounded-md w-max px-1 ">Pay-per-click</h3>
              <p className="bg-color-grey text-xl w-max rounded-md px-1">advertising</p>
              
              </div>

              
              <div className="flex flex-row gap-2  items-center">
              <div className="w-7 h-7 bg-color-dark rounded-full flex items-center justify-center -rotate-45 "> 
                <i className="fa fa-arrow-right text-color-primary text-xl"></i>
                </div>
              <a href="#" className="text-xs hidden md:block hover:opacity-80 ease-in-out duration-200 ">Learn More</a>
              </div>
              </div>

              <div className="">
                <img src="/images/cards/card-2.svg" alt="item" className="h-40 " />
              </div>
             


            </div>
 


{/*  card three */}

<div className="flex flex-row justify-between p-10 bg-color-dark rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0">
              
              <div className="flex flex-col justify-between ">
              <div>

              <h3 className="bg-color-grey w-max-content text-xl rounded-md w-max px-1 ">Social Media</h3>
              <p className="bg-color-grey text-xl w-max rounded-md px-1">Marketing</p>
              
              </div>

              
              <div className="flex flex-row gap-2  items-center">
              <div className="w-7 h-7 bg-color-grey rounded-full flex items-center justify-center -rotate-45 "> 
                <i className="fa fa-arrow-right text-color-dark text-xl"></i>
                </div>
              <a href="#" className="text-xs hidden md:block hover:opacity-80 ease-in-out duration-200 text-color-grey">Learn More</a>
              </div>
              </div>

              <div className="">
                <img src="/images/cards/card-3.svg" alt="item" className="h-40 " />
              </div>
             


            </div>



         {/*    card four  */}

         <div className="flex flex-row justify-between p-10 bg-color-grey rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0">
              
              <div className="flex flex-col justify-between ">
              <div>

              <h3 className="bg-color-primary w-max-content text-xl rounded-md w-max px-1 ">Email</h3>
              <p className="bg-color-primary text-xl w-max rounded-md px-1">Marketing</p>
              
              </div>

              
              <div className="flex flex-row gap-2  items-center">
              <div className="w-7 h-7 bg-color-dark rounded-full flex items-center justify-center -rotate-45 "> 
                <i className="fa fa-arrow-right text-color-primary text-xl"></i>
                </div>
              <a href="#" className="text-xs hidden md:block hover:opacity-80 ease-in-out duration-200 ">Learn More</a>
              </div>
              </div>

              <div className="">
                <img src="/images/cards/card-4.png" alt="item" className="h-40  " />
              </div>
             


            </div>


          {/*   card five  */}

          <div className="flex flex-row justify-between p-10 bg-color-primary rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0">
              
              <div className="flex flex-col justify-between ">
              <div>

              <h3 className="bg-color-grey w-max-content text-xl rounded-md w-max px-1 ">Content</h3>
              <p className="bg-color-grey text-xl w-max rounded-md px-1">Creation</p>
              
              </div>

              
              <div className="flex flex-row gap-2  items-center">
              <div className="w-7 h-7 bg-color-dark rounded-full flex items-center justify-center -rotate-45 "> 
                <i className="fa fa-arrow-right text-color-primary text-xl"></i>
                </div>
              <a href="#" className="text-xs hidden md:block hover:opacity-80 ease-in-out duration-200 ">Learn More</a>
              </div>
              </div>

              <div className="">
                <img src="/images/cards/card-5.svg" alt="item" className="h-40 " />
              </div>
             


            </div>


           {/*  card six */}

           <div className="flex flex-row justify-between p-10 bg-color-dark rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0">
              
              <div className="flex flex-col justify-between ">
              <div>

              <h3 className="bg-color-grey w-max-content text-xl rounded-md w-max px-1 ">Analytics and</h3>
              <p className="bg-color-grey text-xl w-max rounded-md px-1">Tracking</p>
              
              </div>

              
              <div className="flex flex-row gap-2  items-center">
              <div className="w-7 h-7 bg-color-grey rounded-full flex items-center justify-center -rotate-45 "> 
                <i className="fa fa-arrow-right text-color-dark text-xl"></i>
                </div>
              <a href="#" className="text-xs hidden md:block hover:opacity-80 ease-in-out duration-200 text-color-white">Learn More</a>
              </div>
              </div>

              <div className="">
                <img src="/images/cards/card-6.svg" alt="item" className="h-40 " />
              </div>
             


            </div>

          </div>
        </div>
      </section>

      <section className="md:py-10 py-5  px-4 lg:px-0 ">

        <div className="container mx-auto">

  <div className="relative flex flex-col md:flex-row md:p-8 p-5 justify-between items-center bg-color-grey rounded-2xl">
       
        <div className="md:w-1/2 w-full">
          <h3 className="md:text-3xl text-xl font-semibold my-5 w-max ">Let's Make things happen</h3>
          <p className="text-base">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

          <button className="btn btn-secondary my-5 w-full lg:w-1/2">Get your free proposal</button>
        </div>

        <div className="hidden absolute md:flex w-1/2 justify-end items-end right-20">
          <img src="/images/proposal.svg" alt="logo" className="h-80" />
        </div>
        </div>

        </div>
      </section>



      <section id="case" className=" py-5  px-4 lg:px-0">
        <div className="container mx-auto">

        <div className="flex flex-col md:flex-row md:gap-5 gap-0  items-center">
            <h2 className="bg-color-primary w-max md:text-2xl text-xl  rounded-md p-1 font-semibold mb-5 md:mb-0">Case Studies</h2>
            <p className="text-center md:text-justify text-xs md:text-sm w-full  md:w-2/3 md:tracking-wide">Explore Real-Life Examples of Our proven Digital Marketing Success through Our Case Studies</p>
          </div>



          <div className="hidden  my-5 p-10 bg-color-dark rounded-2xl md:grid grid-cols-3 gap-3 ">
            <div className=" border-r-2 border-r-color-white pr-4">
              <p className="text-color-white text-sm mb-2">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
             
              <a href="#" className="text-color-primary opacity-100 hover:opacity-80 ease-in-out duration-200"> Learn More 
                <i className="fa fa-arrow-right text-color-primary ml-2  -rotate-45 opacity-100 hover:opacity-80 ease-in-out duration-200"></i>
                </a>
            </div>


            <div className="border-r-2 border-r-color-white px-4">
              <p className="text-color-white text-sm mb-2">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
             
              <a href="#" className="text-color-primary opacity-100 hover:opacity-80 ease-in-out duration-200"> Learn More 
                <i className="fa fa-arrow-right text-color-primary ml-2  -rotate-45 opacity-100 hover:opacity-80 ease-in-out duration-200"></i>
                </a>
            </div>


            <div className="pl-4">
              <p className="text-color-white text-sm mb-2">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            
              <a href="#" className="text-color-primary opacity-100 hover:opacity-80 ease-in-out duration-200"> Learn More 
                <i className="fa fa-arrow-right text-color-primary ml-2  -rotate-45 opacity-100 hover:opacity-80 ease-in-out duration-200"></i>
                </a>
            </div>

          </div>



<div className="mobile_case my-5 flex flex-row gap-3 justify-between overflow-x-auto no-scrollbar md:hidden ">


          <div className=" border-r-2 border-r-color-white pr-4 bg-color-dark rounded-3xl p-6 flex-shrink-0 w-4/5 ">
              <p className="text-color-white text-sm mb-2">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
             
              <a href="#" className="text-color-primary opacity-100 hover:opacity-80 ease-in-out duration-200"> Learn More 
                <i className="fa fa-arrow-right text-color-primary ml-2  -rotate-45 opacity-100 hover:opacity-80 ease-in-out duration-200"></i>
                </a>
            </div>


            <div className=" border-r-2 border-r-color-white pr-4 bg-color-dark rounded-3xl p-6 flex-shrink-0 w-4/5">
              <p className="text-color-white text-sm mb-2">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
             
              <a href="#" className="text-color-primary opacity-100 hover:opacity-80 ease-in-out duration-200"> Learn More 
                <i className="fa fa-arrow-right text-color-primary ml-2  -rotate-45 opacity-100 hover:opacity-80 ease-in-out duration-200"></i>
                </a>
            </div>


            <div className=" border-r-2 border-r-color-white pr-4 bg-color-dark rounded-3xl p-6 flex-shrink-0 w-4/5">
              <p className="text-color-white text-sm mb-2">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
             
              <a href="#" className="text-color-primary opacity-100 hover:opacity-80 ease-in-out duration-200"> Learn More 
                <i className="fa fa-arrow-right text-color-primary ml-2  -rotate-45 opacity-100 hover:opacity-80 ease-in-out duration-200"></i>
                </a>
            </div>

            </div>

        </div>
      </section>



      <section id="faq" className="py-5 md:mb-16 mb-5 px-4 lg:px-0">
        <div className="container mx-auto">

        <div className="flex flex-col md:flex-row md:gap-5 gap-0  items-center ">
            <h2 className="bg-color-primary w-max md:text-2xl text-xl  rounded-md p-1 font-semibold mb-5 md:mb-0">Our Working Process</h2>
            <p className="text-center md:text-justify text-xs md:text-sm w-full  md:w-2/3 md:tracking-wide">Step-by-Step Guide to Achieving
            Your Business Goals</p>
          </div>


<div>

 {/*  card one */}
 <div className="group cursor-pointer faq" onClick={()=>handleOpen(1)}>
          <div className="flex flex-col justify-between md:p-10 p-5 bg-color-grey md:rounded-3xl rounded-[2rem] border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 my-5  group-hover:bg-color-primary ease-in-out duration-300"> 


<div className="flex flex-row justify-between items-center mb-2">
  
  <div className="flex flex-row justify-center items-center gap-3">
            <h1 className=" text-2xl md:text-3xl font-semibold">01</h1>
            <h3 className="text-base font-semibold">Consultation</h3>
     </div>

            <div className="circle w-6 h-6 md:w-8 md:h-8 border group-hover:bg-color-primary ease-in-out duration-300 bg-color-grey flex justify-center items-center border-color-dark rounded-full group">
            <i className={`fa-solid  md:text-xl text-base ${open===1?'fa-minus':'fa-plus'}`}></i>
            </div>
</div>
<div className={`seperator  w-full border-t border-t-color-dark border-t-1 mb-2 mt-5 ${open===1?'':'hidden'}`} />

            <p className={`text-sm ${open===1?'':'hidden'}`}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

          </div>
</div> 


{/* card two  */}

<div className="group cursor-pointer faq" onClick={()=>handleOpen(2)}>
          <div className="flex flex-col justify-between md:p-10 p-5 bg-color-grey md:rounded-3xl rounded-[2rem] border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 my-5  group-hover:bg-color-primary ease-in-out duration-300"> 


<div className="flex flex-row justify-between items-center mb-2" >
  
  <div className="flex flex-row justify-center items-center gap-3">
            <h1 className=" text-2xl md:text-3xl font-semibold">02</h1>
            <h3 className="text-base font-semibold">Research and Strategy Development</h3>
     </div>

            <div className="circle w-6 h-6 md:w-8 md:h-8 border group-hover:bg-color-primary ease-in-out duration-300 bg-color-grey flex justify-center items-center border-color-dark rounded-full group">
            <i className={`fa-solid  md:text-xl text-base ${open===2?'fa-minus':'fa-plus'}`}></i>
            </div>
</div>
<div className={`seperator  w-full border-t border-t-color-dark border-t-1 mb-2 mt-5 ${open===2?'':'hidden'}`} />

            <p className={`text-sm ${open===2?'':'hidden'}`}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

          </div>
</div> 


<div className="group cursor-pointer faq" onClick={()=>handleOpen(3)}>
          <div className="flex flex-col justify-between md:p-10 p-5 bg-color-grey md:rounded-3xl rounded-[2rem] border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 my-5  group-hover:bg-color-primary ease-in-out duration-300"> 


<div className="flex flex-row justify-between items-center mb-2" >
  
  <div className="flex flex-row justify-center items-center gap-3">
            <h1 className=" text-2xl md:text-3xl font-semibold">03</h1>
            <h3 className="text-base font-semibold">Implementation</h3>
     </div>

            <div className="circle w-6 h-6 md:w-8 md:h-8 border group-hover:bg-color-primary ease-in-out duration-300 bg-color-grey flex justify-center items-center border-color-dark rounded-full group">
            <i className={`fa-solid  md:text-xl text-base ${open===3?'fa-minus':'fa-plus'}`}></i>
            </div>
</div>
<div className={`seperator  w-full border-t border-t-color-dark border-t-1 mb-2 mt-5 ${open===3?'':'hidden'}`}/>

            <p className={`text-sm ${open===3?'':'hidden'}`}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

          </div>
</div> 


<div className="group cursor-pointer faq" onClick={()=>handleOpen(4)}>
          <div className="flex flex-col justify-between md:p-10 p-5 bg-color-grey md:rounded-3xl rounded-[2rem] border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 my-5  group-hover:bg-color-primary ease-in-out duration-300"> 


<div className="flex flex-row justify-between items-center mb-2" >
  
  <div className="flex flex-row justify-center items-center gap-3">
            <h1 className=" text-2xl md:text-3xl font-semibold">04</h1>
            <h3 className="text-base font-semibold">Monitoring and Optimization</h3>
     </div>

            <div className="circle w-6 h-6 md:w-8 md:h-8 border group-hover:bg-color-primary ease-in-out duration-300 bg-color-grey flex justify-center items-center border-color-dark rounded-full group">
            <i className={`fa-solid  md:text-xl text-base ${open===4?'fa-minus':'fa-plus'}`}></i>
            </div>
</div>
<div className={`seperator  w-full border-t border-t-color-dark border-t-1 mb-2 mt-5 ${open===4?'':'hidden'}`} />

            <p className={`text-sm ${open===4?'':'hidden'}`}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

          </div>
</div> 


<div className="group cursor-pointer faq" onClick={()=>handleOpen(5)}>
          <div className="flex flex-col justify-between md:p-10 p-5 bg-color-grey md:rounded-3xl rounded-[2rem] border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 my-5  group-hover:bg-color-primary ease-in-out duration-300"> 


<div className="flex flex-row justify-between items-center mb-2" >
  
  <div className="flex flex-row justify-center items-center gap-3">
            <h1 className=" text-2xl md:text-3xl font-semibold">05</h1>
            <h3 className="text-base font-semibold">Reporting and Communication</h3>
     </div>

            <div className="circle w-6 h-6 md:w-8 md:h-8 border group-hover:bg-color-primary ease-in-out duration-300 bg-color-grey flex justify-center items-center border-color-dark rounded-full group">
            <i className={`fa-solid  md:text-xl text-base ${open===5?'fa-minus':'fa-plus'}`}></i>
            </div>
</div>
<div className={`seperator  w-full border-t border-t-color-dark border-t-1 mb-2 mt-5 ${open===5?'':'hidden'}`} />

            <p className={`text-sm ${open===5?'':'hidden'}`}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

          </div>
</div> 



<div className="group cursor-pointer faq" onClick={()=>handleOpen(6)}>
          <div className="flex flex-col justify-between md:p-10 p-5 bg-color-grey md:rounded-3xl rounded-[2rem] border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 my-5  group-hover:bg-color-primary ease-in-out duration-300"> 


<div className="flex flex-row justify-between items-center mb-2" >
  
  <div className="flex flex-row justify-center items-center gap-3">
            <h1 className=" text-2xl md:text-3xl font-semibold">06</h1>
            <h3 className="text-base font-semibold">Continual Improvement</h3>
     </div>

            <div className="circle w-6 h-6 md:w-8 md:h-8 border group-hover:bg-color-primary ease-in-out duration-300 bg-color-grey flex justify-center items-center border-color-dark rounded-full group">
            <i className={`fa-solid  md:text-xl text-base ${open===6?'fa-minus':'fa-plus'}`}></i>
            </div>
</div>
<div className={`seperator  w-full border-t border-t-color-dark border-t-1 mb-2 mt-5 ${open===6?'':'hidden'}`}/>

            <p className={`text-sm ${open===6?'':'hidden'}`}>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>

          </div>
</div>  


          </div>
        </div>

      </section>

<section id="team" className="px-4 lg:px-0">
<div className="container mx-auto">
<div className="flex flex-col md:flex-row md:gap-5 gap-0 items-center ">
            <h2 className="bg-color-primary w-max md:text-2xl text-xl  rounded-md p-1 font-semibold mb-5 md:mb-0">Team</h2>
            <p className="text-center md:text-justify text-xs md:text-sm w-full  md:w-2/3 md:tracking-wide">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
          </div>


<div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3">

{/* card one */} 
  <div className="p-8 md:p-5 rounded-3xl border border-b-4 border-color-dark group">
    <div className="flex flex-row justify-between">

<div className="flex flex-row gap-2 justify-end items-end">
      <div className="relative group ">
      <img src="/images/cards/vector.svg" className="w-[70px] h-[70px]   absolute group-hover:h-[60px] group-hover:w-[60px] ease-in-out duration-200  " alt="vector" />
      <img src="/images/staff/user1.png" className="w-14 h-14  mask  group" alt="profile" /> 

      </div>
 
 <div>
<p className="text-base font-semibold">Jane Doe</p>
<p className="text-sm">Director of Operations</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-color-dark flex items-center justify-center">
  <i className="fa-brands fa-linkedin-in text-color-primary text-xs"></i>
</div>

</div>



<div className="border-t border-t-color-dark w-full my-4"></div>

<p className="text-sm">

<span className="text-base">7+</span>  years of experience in project management and team leadership. Strong organizational and communication skills
</p>

  </div>


{/* card two */} 


<div className="p-8 md:p-5 rounded-3xl border border-b-4 border-color-dark group">
    <div className="flex flex-row justify-between">

<div className="flex flex-row gap-2 justify-end items-end">
      <div className="relative group ">
      <img src="/images/cards/vector.svg" className="w-[70px] h-[70px]   absolute group-hover:h-[60px] group-hover:w-[60px] ease-in-out duration-200  " alt="vector" />
      <img src="/images/staff/user2.png" className="w-14 h-14  mask  group" alt="profile" /> 

      </div>
 
 <div>
<p className="text-base font-semibold">John Smith</p>
<p className="text-sm">CEO and Founder</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-color-dark flex items-center justify-center">
  <i className="fa-brands fa-linkedin-in text-color-primary text-xs"></i>
</div>

</div>



<div className="border-t border-t-color-dark w-full my-4"></div>

<p className="text-sm">

<span className="text-base">10+</span> years of experience in digital marketing. Expertise in SEO, PPC, and content strategy lorem
</p>

  </div>



{/*   card three  */}


<div className="p-8 md:p-5 rounded-3xl border border-b-4 border-color-dark group">
    <div className="flex flex-row justify-between">

<div className="flex flex-row gap-2 justify-end items-end">
      <div className="relative group ">
      <img src="/images/cards/vector.svg" className="w-[70px] h-[70px]   absolute group-hover:h-[60px] group-hover:w-[60px] ease-in-out duration-200  " alt="vector" />
      <img src="/images/staff/user3.png" className="w-14 h-14  mask  group" alt="profile" /> 

      </div>
 
 <div>
<p className="text-base font-semibold">John Smith</p>
<p className="text-sm">Senior SEO Specialist</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-color-dark flex items-center justify-center">
  <i className="fa-brands fa-linkedin-in text-color-primary text-xs"></i>
</div>

</div>



<div className="border-t border-t-color-dark w-full my-4"></div>

<p className="text-sm">

<span className="text-base">5+</span>  years of experience in SEO and content creation. Proficient in keyword research and on-page optimization
</p>

  </div>


 {/*  card four  */}


 <div className="p-8 md:p-5 rounded-3xl border border-b-4 border-color-dark group">
    <div className="flex flex-row justify-between">

<div className="flex flex-row gap-2 justify-end items-end">
      <div className="relative group ">
      <img src="/images/cards/vector.svg" className="w-[70px] h-[70px]   absolute group-hover:h-[60px] group-hover:w-[60px] ease-in-out duration-200  " alt="vector" />
      <img src="/images/staff/user4.png" className="w-14 h-14  mask  group" alt="profile" /> 

      </div>
 
 <div>
<p className="text-base font-semibold">Emily Johnson</p>
<p className="text-sm">PPC Manager</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-color-dark flex items-center justify-center">
  <i className="fa-brands fa-linkedin-in text-color-primary text-xs"></i>
</div>

</div>



<div className="border-t border-t-color-dark w-full my-4"></div>

<p className="text-sm">

<span className="text-base">3+</span>  years of experience in paid search advertising. Skilled in campaign management and performance analysis
</p>

  </div>




 {/*  card five  */}


 <div className="p-8 md:p-5 rounded-3xl border border-b-4 border-color-dark group">
    <div className="flex flex-row justify-between">

<div className="flex flex-row gap-2 justify-end items-end">
      <div className="relative group ">
      <img src="/images/cards/vector.svg" className="w-[70px] h-[70px]   absolute group-hover:h-[60px] group-hover:w-[60px] ease-in-out duration-200  " alt="vector" />
      <img src="/images/staff/user5.png" className="w-14 h-14  mask  group" alt="profile" /> 

      </div>
 
 <div>
<p className="text-base font-semibold">Brian Williams</p>
<p className="text-sm">Social Media Specialist</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-color-dark flex items-center justify-center">
  <i className="fa-brands fa-linkedin-in text-color-primary text-xs"></i>
</div>

</div>



<div className="border-t border-t-color-dark w-full my-4"></div>

<p className="text-sm">

<span className="text-base">4+</span> years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
</p>

  </div>



   {/*  card six  */}


 <div className="p-8 md:p-5 rounded-3xl border border-b-4 border-color-dark group">
    <div className="flex flex-row justify-between">

<div className="flex flex-row gap-2 justify-end items-end">
      <div className="relative group ">
      <img src="/images/cards/vector.svg" className="w-[70px] h-[70px]   absolute group-hover:h-[60px] group-hover:w-[60px] ease-in-out duration-200  " alt="vector" />
      <img src="/images/staff/user6.png" className="w-14 h-14  mask  group" alt="profile" /> 

      </div>
 
 <div>
<p className="text-base font-semibold">Sarah Kim</p>
<p className="text-sm">Content Creator</p>
</div>
</div>
<div className="w-5 h-5 rounded-full bg-color-dark flex items-center justify-center">
  <i className="fa-brands fa-linkedin-in text-color-primary text-xs"></i>
</div>

</div>



<div className="border-t border-t-color-dark w-full my-4"></div>

<p className="text-sm">

<span className="text-base">2+</span>years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries
</p>

  </div>


</div>

<div className="text-end ">
  <button className="btn btn-secondary md:px-10 w-full md:w-max
  "> See all team</button>
</div>
</div>
</section>

<section id="testimonial" className="py-10 md:py-5">
          <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-5 gap-0  items-center ">
            <h2 className="bg-color-primary w-max md:text-2xl text-xl  rounded-md p-1 font-semibold mb-5 md:mb-0">Testimonials</h2>
            <p className="text-center md:text-justify text-xs md:text-sm w-full  md:w-2/3 md:tracking-wide">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
          </div>
        




<div className="flex flex-col md:py-12 py-8 px-5 md:px-0 mx-4 md:mx-0 rounded-3xl bg-color-dark my-10">


<div className="flex flex-row gap-10 overflow-x-auto ">

<div className="md:w-2/5 w-full flex-shrink-0">


<div className="border border-color-primary rounded-3xl p-7 relative after:content-[''] after:absolute  after:w-7 after:h-7  after:left-7 after:-bottom-[15px] after:border-b-color-primary after:border-b after:rotate-45 after:bg-color-dark after:border-r after:border-r-color-primary ">
  
   <p className="text-color-white">"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
</div>

<div className="my-8 ml-8">
  <p className="text-color-primary">John Smith</p>
  <p className="text-color-white text-sm">Marketing Director at XYZ Corp</p>
</div>

</div>


{/* card two */}

<div className="md:w-2/5 w-full flex-shrink-0">

<div className="border border-color-primary rounded-2xl p-7 relative after:content-[''] after:absolute  after:w-7 after:h-7  after:left-7 after:-bottom-[15px] after:border-b-color-primary after:border-b after:rotate-45 after:bg-color-dark after:border-r after:border-r-color-primary ">


  <p className="text-color-white">" here We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
</div>

<div className="my-8 ml-8">
  <p className="text-color-primary">John Smith</p>
  <p className="text-color-white text-sm">Marketing Director at XYZ Corp</p>
</div>

</div>

<div className="md:w-2/5 w-full flex-shrink-0">

<div className="border border-color-primary rounded-2xl p-7 relative after:content-[''] after:absolute  after:w-7 after:h-7  after:left-7 after:-bottom-[15px] after:border-b-color-primary after:border-b after:rotate-45 after:bg-color-dark after:border-r after:border-r-color-primary ">


  <p className="text-color-white">" here We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</p>
</div>

<div className="my-8 ml-8">
  <p className="text-color-primary">John Smith</p>
  <p className="text-color-white text-sm">Marketing Director at XYZ Corp</p>
</div>

</div>
</div>



  {/* navigation */}

  
  <div className="flex flex-row items-center justify-center md:mt-10 mt-5 gap-[5rem]">
    <i className="fa fa-arrow-left text-color-white opacity-60"></i>

    <div className="flex flex-row gap-3">
      <div className="mask w-3 h-3 md:w-4 md:h-4 bg-color-primary cursor-pointer" />
      <div className="mask w-3 h-3 md:w-4 md:h-4 bg-color-white cursor-pointer" />
      <div className="mask w-3 h-3 md:w-4 md:h-4 bg-color-white cursor-pointer" />
      <div className="mask w-3 h-3 md:w-4 md:h-4 bg-color-white cursor-pointer" />
      <div className="mask w-3 h-3 md:w-4 md:h-4 bg-color-white cursor-pointer" />

    </div>
    <i className="fa fa-arrow-right text-color-white"></i>
  </div>
   



</div>
</div>
</section>


<section id="contact">
  <div className="container mx-auto">

  <div className="flex flex-col md:flex-row md:gap-5 gap-0  items-center ">
            <h2 className="bg-color-primary w-max md:text-2xl text-xl  rounded-md p-1 font-semibold mb-5 md:mb-0">Contact Us</h2>
            <p className="text-center md:text-justify text-xs md:text-sm w-full  md:w-2/3 md:tracking-wide">Connect with Us: Let's Discuss Your
            Digital Marketing Needs</p>
          </div>


<div className="mx-4 md:mx-0  px-5 lg:pr-0 my-10  py-10 bg-color-grey rounded-3xl flex flex-row justify-between gap-5">
          <div className="lg:w-1/2 w-full">


          <div className="flex items-center gap-5">
            <div className="flex flex-row items-center">
    <label className="relative flex items-center cursor-pointer" htmlFor="html">
      <input name="framework" type="radio"  className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-color-dark checked:border-color-dark transition-all bg-color-white" id="html" />
      <span className="absolute  bg-color-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      </span>
    </label>
    <label className="ml-2  cursor-pointer text-base" htmlFor="html">Say Hi</label>
    </div>
 
    <div className="flex flex-row items-center">
    <label className="relative flex items-center cursor-pointer" htmlFor="react">
      <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-color-dark bg-color-white checked:border-color-dark transition-all" id="react"  />
      <span className="absolute bg-color-primary w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      </span>
    </label>
    <label className="ml-2  cursor-pointer text-base" >Get a Quote</label>
  </div>
  </div>


            <div className="my-5">
              <label htmlFor="" >Name</label>
              <input type="text" placeholder="Name" className="w-full px-3 rounded-xl text-sm border text-black border-color-dark bg-color-white py-4 outline-none mt-2" />
            </div>


            <div className="my-5">
              <label htmlFor="" >Email <span>*</span></label>
              <input type="email" placeholder="Email" className="w-full px-3 rounded-xl text-sm border text-black border-color-dark bg-color-white py-4 outline-none mt-2" />
            </div>


            <div className="my-5">
              <label htmlFor="message">Message <span>*</span></label>
              <textarea name="" id="message" rows={10} placeholder="Message" className="w-full px-3 rounded-xl text-sm border text-black border-color-dark bg-color-white py-2 outline-none mt-2" ></textarea>
            </div>

            <button className="btn btn-secondary w-full">Send Message</button>

          </div>

          <div className="hidden w-1/2 relative overflow-hidden lg:inline-block">


<img src="/images/cards/star1.svg" alt="star 1" className="w-24 h-24 absolute bottom-[10rem] right-[15rem] z-10" />
<img src="/images/cards/star2.svg" alt="star 2" className="w-[10rem] h-[10rem] absolute top-[10rem]  right-[10rem] z-10" />
<img src="/images/cards/ring.svg" alt="star 3" className=" left-[300px] relative  -translate-y-52 top-[12rem] " /> 


</div>

          </div>

  </div>
</section>
    </main>
    <footer suppressHydrationWarning={true}>
      <section>

          <div className="container mx-auto">

            <div className="p-10 bg-color-black rounded-t-3xl">

<div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center  ">

<img src="/images/logo-white.svg" alt="logo" className="md:w-6 md:h-6 h-5 w-5" />
<h2 className="text-xl md:text-2xl tracking-wider ml-2 text-color-white">Positivus</h2>

</div>
              <div>
                <ul className="text-color-white flex flex-row gap-5">
                <li ><a href="#" className="border-b-[.5px]">About Us</a></li>
                <li><a href="#" className="border-b-[.5px]">Services</a></li>
                <li><a href="#" className="border-b-[.5px]">Use Case</a></li>
                <li><a href="#" className="border-b-[.5px]">Pricing</a></li>
                  <li><a href="#"  className="border-b-[.5px]">Blog</a></li>
                </ul>
              </div>

<div className="flex flex-row gap-2">
              <div className="w-5 h-5 rounded-full bg-color-white flex items-center justify-center cursor-pointer">
  <i className="fa-brands fa-linkedin-in text-color-bark text-xs"></i>
</div>

<div className="w-5 h-5 rounded-full bg-color-white flex items-center justify-center cursor-pointer">
  <i className="fa-brands fa-facebook-f text-color-bark text-xs"></i>
</div>

<div className="w-5 h-5 rounded-full bg-color-white flex items-center justify-center cursor-pointer">
  <i className="fa-brands fa-twitter text-color-bark text-xs"></i>
</div>
              </div>
</div>


<div className="flex flex-row justify-between p-10 items-center">

<div>
  <h3 className="bg-color-primary w-max md:text-xl text-base  rounded-md p-1 font-semibold mb-5 md:mb-0">Contact us:</h3>
  <p className="text-base text-color-white mt-5">Email: info@positivus.com</p>
  <p className="text-base text-color-white mt-4">Phone: 555-567-8901</p>
  <p className="text-base text-color-white mt-4">Address: 1234 Main St</p>
  <p className="text-base text-color-white">Moonstone City, Stardust State 12345</p>
</div>

<div className="bg-[#292A32] rounded-xl py-10 px-6 ">
  <div className="gap-5 flex flex-row">
  <input type="text" placeholder="Email" className="outline-none p-3 text-sm px-5 placeholder-white text-color-white rounded-xl border border-color-white bg-transparent" />
  <button className="btn btn-primary border-none">Subscribe to news</button>
  </div>
</div>
</div>

<div className="border-t border-color-white h-1 w-full"></div>

<div className="flex flex-row gap-10 mt-8">
  <p className="text-sm text-color-white">@ 2023 Positivus. All Rights Reserved.</p>
  <a href="#" className="border-b-[.5px] border-color-white text-color-white"> Pricacy Policy</a>
</div>
            </div>
          </div>

      </section>
    </footer>
    
    </>
  );
}
export default Home

//export default dynamic(() => Promise.resolve(Home), { ssr: false });