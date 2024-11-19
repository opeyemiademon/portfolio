import Image from "next/image";

export default function Home() {

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
    <header id="header" className="sticky top-0 right-o left-0 z-50 bg-color-white">
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


    <main>

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

      <section className="py-10 px-4 lg:px-0 ">
        <div className="container mx-auto">

          <div className="flex flex-col md:flex-row md:gap-5 gap-0 justify-center items-center">
            <h2 className="bg-color-primary w-max text-2xl  rounded-md p-1 font-semibold mb-8 md:mb-0">Services</h2>
            <p className="text-sm w-full  md:w-2/3 tracking-wide">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          </div>


          

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2  md:gap-5 ">

            {/* card one */}
            <div className="flex flex-row justify-between p-10 bg-color-grey rounded-3xl border border-b-4 border-color-dark shadow-md mb-5 md:mb-0 ">
              
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

      <section className="py-10">

        <div className="container mx-auto">

  <div className="flex flex-col md:flex-row p-10 justify-center">
        <div>
          <h3>Let's Make things happen</h3>
          <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>

          <button className="btn btn-secondary">Get your free proposal</button>
        </div>

        <div>
          <img src="/images/proposal.svg" alt="logo" />
        </div>
        </div>

        </div>
      </section>
    </main>
    <footer>
      <section></section>
    </footer>
    
    </>
  );
}
