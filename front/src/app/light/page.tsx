'use client'
import React from 'react'

const Page = () => {

    

function showReview(){
    const userTexts = document.getElementsByClassName('user-text');
    const userPics = document.getElementsByClassName("user-pic")
   /*  userPics.forEach((userPic:any)=>{
        userPic.classList.remove("active-pic")
    } )

    for(userPic of userPics){
        userPic.classList.remove("active-pic")
    }
    for(userText of userPics){
        userText.classList.remove("active-text")
    }

    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add('active-pic')
    userTexts[i].classList.add('active-text') */
}


  return (
    <div >
 <header className='sticky top-0 z-50' >
            <nav className='container flex justify-between items-center'>
    <div className=' py-5 text-color-secondary font-bold text-3xl'>
    <a href="#home"><span className='text-white'>Light</span>Code.</a>
    </div> 
    <div>
        <ul className='hidden lg:flex items-center space-x-6'>
        <li><a href="#home" className='hover:text-color-secondary ease-in duration-200'>Home</a></li>
        <li><a href="#features"  className='hover:text-color-secondary ease-in duration-200'>Features</a></li>
        <li><a href="#testimonial" className='hover:text-color-secondary ease-in duration-200'>Testimonial</a></li>
        <li><a href="#pricing" className='hover:text-color-secondary ease-in duration-200'>Pricing</a></li>
        <li><a href="#blog" className='hover:text-color-secondary ease-in duration-200'>Blog</a></li>
        <li><a href="#contact" className='hover:text-color-secondary ease-in duration-200'>Contact</a></li>

        <li><button className='bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200'>Free Trial</button></li>
        </ul>
    </div>

 {/*    mobile screen */}
 <div className='lg:hidden cursor-pointer z-50' id="hamburgers">
    <i className='fa-solid fa-bars'></i>
 </div> 

 <div id='menus' className='hidden bg-color-primary-dark h-[100vh] absolute inset-0'>
    <ul className='h-full grid place-items-center py-20'>
    <li className="nav__link"><a href="#home" className='hover:text-color-secondary ease-in duration-200'>Home</a></li>
        <li className="nav__link"><a href="#features"  className='hover:text-color-secondary ease-in duration-200'>Features</a></li>
        <li className="nav__link"><a href="#testimonial" className='hover:text-color-secondary ease-in duration-200'>Testimonial</a></li>
        <li className="nav__link"><a href="#pricing" className='hover:text-color-secondary ease-in duration-200'>Pricing</a></li>
        <li className="nav__link"><a href="#blog" className='hover:text-color-secondary ease-in duration-200'>Blog</a></li>
        <li className="nav__link"><a href="#contact" className='hover:text-color-secondary ease-in duration-200'>Contact</a></li>

        <li><button className='btn-light'>Free Trial</button></li>
        
    </ul>
 </div>
            </nav>
        </header>
        <main>


<section id='home' className='relative' >

<div className='blob1' />

<div className='blob2' />
<div className='container py-20'>

<div className='flex flex-col items-center z-20 md:flex-row'>
    <div className='text-center mb-12 md:text-left md:w-1/2 md:pr-10'>
        <h1 className='title'>
    <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
    Awesome 
        <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
        </svg>
    </span>
            
            App for Your Financial.</h1>
        <p className='leading-relaxed mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae mollitia dolorem rem natus, laudantium provident possimus amet quidem suscipit nostrum dolores minima nam iusto!</p>
        <button className='btn-light'> Download App</button>
        </div>

        <div className="md:w-1/2">
            <img src="/light/hero4.png" alt="" />
        </div>
    
</div>


</div>

</section>

<section id="features" className='bg-color-primary-light'>

<div className="container py-20">
    <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='font-bold text-color-secondary mb-4'> Our Feature</h4>
        <h1 className='title'>Easy To Manage Your All Payments By Our App</h1>
    </div>


    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:px-6 lg:px-8  gap-12 lg:gap-8 px-4 '>
       {/*  card 1 */}

       <div className='border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'>


        <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
            <i className='fa-solid fa-calendar-days text-4xl'></i>
        </div>

        <h3 className='text-xl font-bold py-4'>Expense Trackering</h3>
        <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>

       </div>



 {/*  card 2 */}

 <div className='bg-color-primary-dark border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'>


<div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
    <i className='fa-solid fa-chart-column text-4xl'></i>
</div>

<h3 className='text-xl font-bold py-4'>Finance Snapshot</h3>
<p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>

</div>


 {/*  card 3 */}

 <div className='border-2 border-solid border-color-gray text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'>


<div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
    <i className='fa-solid fa-phone text-4xl'></i>
</div>

<h3 className='text-xl font-bold py-4'>Support 24/24</h3>
<p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>

</div>

    </div>
</div>
 
</section>

<section id="saving-money">


    <div className="container py-20 relative">


<div className='blob1' />

<div className='blob2' />
        <div className='flex flex-col items-center justify-between md:flex-row '>

            <div className='mb-12 md:w-1/2'>
            
            <img src="/light/hero3.png" alt="" />
            
            </div>


            <div className='text-center md:text-left md:w-1/2 md:ml-20 '>
                
                <h4 className='font-bold text-color-secondary mb-4'> Saving Money</h4>
            <h1 className='title mb-4'>Best Financing App To Save Your Money</h1>
            <p className='leading-relaxed mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit officia error maxime iure autem magnam sunt accusantium nobis. Exercitationem nemo voluptatibus praesentium numquam eius repudiandae velit odit asperiores consequuntur placeat.</p>

            <button className='btn-light'> Read more</button>
        </div>
    </div>
    </div>
</section>


<section id="how-it-works" className="bg-color-primary-light">
    <div className="container py-20">

    <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='font-bold text-color-secondary mb-4'> How It Works</h4>
        <h1 className='title'>Grow Up Your Money Saving</h1> 
    </div>

<div className='flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
 {/*    card 1 */}
 <div className='text-center cursor-pointer'>
    <div className='relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200'>
    <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/light/line.png')] lg:after:absolute lg:after:top-10 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">1</p>
    </div>
  
    <h3 className='text-xl font-bold py-4'>Install The App</h3>
        <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
 </div>


  {/*    card 2 */}
  <div className='text-center cursor-pointer'>
    <div className='relative  inline-block px-6 py-3 rounded-lg cursor-pointer bg-color-secondary ease-in duration-200'>
    <p className="text-6xl lg:after:content-[''] lg:after:flex lg:after:bg-[url('/light/line-bottom.png')] lg:after:absolute lg:after:top-4 lg:after:left-32 2xl:after:left-52 lg:after:bg-no-repeat lg:after:h-7 lg:after:w-52">2</p>
    </div>
  
    <h3 className='text-xl font-bold py-4'>Setup Your Profile</h3>
        <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
 </div>


  {/*    card 3 */}
  <div className='text-center cursor-pointer'>
    <div className='relative bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200'>
    <p className='text-6xl '>3</p>
    </div>
  
    <h3 className='text-xl font-bold py-4'>Enjoy The Features</h3>
        <p className='leading-relaxed'>We use an application designed a testing gnose to keep away</p>
 </div>
</div>
    </div>
</section>


<section id="testimonial">
    <div className="container py-20">

    <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='font-bold text-color-secondary mb-4'> User Review</h4>
        <h1 className='title'>What Client Say about our App after using it</h1> 
    </div>

{/* review container */}
    <div className='mt-8'>
        <div className='flex items-center justify-center flex-wrap'>
            <img  src="/light/user1.jpg" alt="" className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic active-pic' />
            <img src="/light/user2.jpg" alt="" className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' />
            <img src="/light/user3.jpg" alt=""  className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic'/>
            <img src="/light/user4.jpg" alt="" className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' />
            <img src="/light/user5.jpg" alt="" className='h-20 w-20 rounded-full p-1 m-3 cursor-pointer user-pic' />

        </div>

        <div className='grid place-items-center text-center m-auto md:w:4/5 min-h-[40hv]'>
            <div className='user-text active-text'>
                <p className='md:text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum veritatis vel accusamus, quos ipsam deleniti provident. Illum, perspiciatis veniam?</p>
                <h4 className='font-bold text-color-secondary mb-1'>Martin Nesus</h4>
                <p>IOS Developer</p>
            </div>


            <div className='user-text'>
                <p className='md:text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum veritatis vel accusamus, quos ipsam deleniti provident. Illum, perspiciatis veniam?</p>
                <h4 className='font-bold text-color-secondary mb-1'>Leila Domnic</h4>
                <p>Angular Developer</p>
            </div>


            <div className='user-text'>
                <p className='md:text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum veritatis vel accusamus, quos ipsam deleniti provident. Illum, perspiciatis veniam?</p>
                <h4 className='font-bold text-color-secondary mb-1'>Mark Joe</h4>
                <p>React Developer</p>
            </div>


            <div className='user-text'>
                <p className='md:text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum veritatis vel accusamus, quos ipsam deleniti provident. Illum, perspiciatis veniam?</p>
                <h4 className='font-bold text-color-secondary mb-1'>Pirtle Karol</h4>
                <p>Android Developer</p>
            </div>

            <div className='user-text'>
                <p className='md:text-2xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum veritatis vel accusamus, quos ipsam deleniti provident. Illum, perspiciatis veniam?</p>
                <h4 className='font-bold text-color-secondary mb-1'>Martin Nesus</h4>
                <p>Flutter Developer</p>
            </div>

        </div>
    </div>
    </div>
</section>

<section id="pricing" className='bg-color-primary-light'>

    <div className="container py-20">

    <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='font-bold text-color-secondary mb-4'> Pricing</h4>
        <h1 className='title'>Get In Reasonable Price</h1> 

        {/* rounded swith */}

        <div className="mt-5 flex items-center justify-center gap-4">
            <p>Bill Monthly</p>
            <label  className='relative inline-block w-20 h-8 rounded-full cursor-pointer'>
                <input type="checkbox" id="toggleBtn" className='peer opacity-0 w-0 h-0 ' />
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary "></span>
            </label>

            <p>Bill Annually</p>
        </div>
    </div>

<div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>

{/* card 1 */}
<div className="card relative h-auto w-auto">
{/*  front side */}
<div id='card_1_front' className='front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full '>

    <div className="relative">
 <p className="text-6xl pl-2 font-bold before:content-['$']before:absolute before:text-sm before:top-0 before:left-0 ">20 <span className='text-sm font-normal tracking-widest'>/per month</span></p>
    </div>


    <div className="py-10">
        <h3 className='text-xl font-bold pb-3 '>Basic</h3>
        <p className='leading-relaxed'>For Beginner Who want to scale Business Globally</p>
    </div>

    <ul className='space-y-4 pb-10'>
        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Expense management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Card management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Bookmark Function</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Instance Statistics</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Accounting System</span>
        </li>
    </ul>
    <button className='card_btn'> Get Started</button>
</div>


{/* back side */}
<div id='card_1_back' className='back bg-color-primary-dark rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0'>
  


<div className="relative">
 <p className="text-6xl pl-2 font-bold before:content-['$']before:absolute before:text-sm before:top-0 before:left-0 "> 120 <span className='text-sm font-normal tracking-widest'>/per month</span></p>
    </div>


    <div className="py-10">
        <h3 className='text-xl font-bold pb-3 '>Premium</h3>
        <p className='leading-relaxed'>For Beginner Who want to scale Business Globally</p>
    </div>

    <ul className='space-y-4 pb-10'>
        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Expense management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Card management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Bookmark Function</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Instance Statistics</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Accounting System</span>
        </li>
    </ul>
    <button className='card_btn'> Get Started</button>
</div>

</div>


{/* card 2 */}
<div className="card relative h-auto w-auto">
{/*  front side */}
<div id='card_2_front' className='front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full '>

    <div className="relative">
        <p className="text-6xl pl-2 font-bold before:content-['$']before:absolute before:text-sm before:top-0 before:left-0 "> 50 <span className='text-sm font-normal tracking-widest'>/per month</span></p>
    </div>


    <div className="py-10">
        <h3 className='text-xl font-bold pb-3 '>Standard</h3>
        <p className='leading-relaxed'>For Beginner Who want to scale Business Globally</p>
    </div>

    <ul className='space-y-4 pb-10'>
        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Expense management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Card management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Bookmark Function</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Instance Statistics</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Accounting System</span>
        </li>
    </ul>
    <button className='card_btn'> Get Started</button>
</div>


{/* back side */}
<div id='card_2_back' className='back bg-color-primary-dark rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0'>
  


<div className="relative">
        <p className="text-6xl pl-2 font-bold before:content-['$']before:absolute before:text-sm before:top-0 before:left-0 "> 150 <span className='text-sm font-normal tracking-widest'>/per month</span></p>
    </div>


    <div className="py-10">
        <h3 className='text-xl font-bold pb-3 '>Standard</h3>
        <p className='leading-relaxed'>For Beginner Who want to scale Business Globally</p>
    </div>

    <ul className='space-y-4 pb-10'>
        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Expense management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Card management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Bookmark Function</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Instance Statistics</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Accounting System</span>
        </li>
    </ul>
    <button className='card_btn'> Get Started</button>
</div>

</div>

{/* card 3 */}
<div className="card relative h-auto w-auto">
{/*  front side */}
<div id='card_3_front' className='front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full '>

    <div className="relative">
        <p className="text-6xl pl-2 font-bold before:content-['$']before:absolute before:text-sm before:top-0 before:left-0 "> 100 <span className='text-sm font-normal tracking-widest'>/per month</span></p>
    </div>


    <div className="py-10">
        <h3 className='text-xl font-bold pb-3 '>Basic</h3>
        <p className='leading-relaxed'>For Beginner Who want to scale Business Globally</p>
    </div>

    <ul className='space-y-4 pb-10'>
        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Expense management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Card management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Bookmark Function</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Instance Statistics</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Accounting System</span>
        </li>
    </ul>
    <button className='card_btn'> Get Started</button>
</div>


{/* back side */}
<div id='card_3_back' className='back bg-color-primary-dark rotate-y-180 px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0'>
  


<div className="relative">
        <p className="text-6xl pl-2 font-bold before:content-['$']before:absolute before:text-sm before:top-0 before:left-0 "> 500 <span className='text-sm font-normal tracking-widest'>/per month</span></p>
    </div>


    <div className="py-10">
        <h3 className='text-xl font-bold pb-3 '>Premium</h3>
        <p className='leading-relaxed'>For Beginner Who want to scale Business Globally</p>
    </div>

    <ul className='space-y-4 pb-10'>
        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Expense management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-secondary'></i>
        <span className='pl-4'>Card management</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Bookmark Function</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Instance Statistics</span>
        </li>

        <li> <i className='fa-solid fa-bookmark text-color-gray'></i>
        <span className='pl-4'>Accounting System</span>
        </li>
    </ul>
    <button className='card_btn'> Get Started</button>
</div>

</div>
</div>
    </div>
</section>


<section id="blog">
    <div className="container py-20">


    <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='font-bold text-color-secondary mb-4'> Innovation And Quality Improvement</h4>
        <h1 className='title'>Latest Updates, Solutions And Company News </h1> 

     
    </div>
    

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

{/* card one */}

<div>
    <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden'>
        <img src="/light/blog1.jpg" className='lg:h-full w-full hover:scale-125 duration-300 ease-in-out' alt="" />
    </div>


<div>
    <div className='flex items-center gap-5 py-5'>
    <p>20 August 2022</p>
    <p>1 min read</p>
    </div>
    <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'> Four ways to cheer yourself up on Blue Monday!</a>
    <p className='leading-relaxed my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, suscipit. Officiis exercitationem nulla est perspiciatis quasi eos...</p>

    <a href="#blog" className='inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out '><span className='tracking-wider capitalize underline hover:no-underline'>Read more</span></a>
</div>
    </div>


{/* card two */}

<div>
    <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden'>
        <img src="/light/blog2.jpg" className='lg:h-full w-full hover:scale-125 duration-300 ease-in-out' alt="" />
    </div>


<div>
    <div className='flex items-center gap-5 py-5'>
    <p>20 August 2022</p>
    <p>1 min read</p>
    </div>
    <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'> How to organize your budget for maximum productivity</a>
    <p className='leading-relaxed my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, suscipit. Officiis exercitationem nulla est perspiciatis quasi eos...</p>

    <a href="#blog" className='inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out '><span className='tracking-wider capitalize underline hover:no-underline'>Read more</span></a>
</div>
    </div>



{/* card three */}

<div>
    <div className='lg:h-[40vh] rounded-xl scale-100 overflow-hidden'>
        <img src="/light/blog3.jpg" className='lg:h-full w-full hover:scale-125 duration-300 ease-in-out' alt="" />
    </div>


<div>
    <div className='flex items-center gap-5 py-5'>
    <p>20 August 2022</p>
    <p>1 min read</p>
    </div>
    <a href="#blog" className='text-2xl font-bold underline hover:text-color-secondary hover:no-underline'> Should small Business be Entitled to System?</a>
    <p className='leading-relaxed my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, suscipit. Officiis exercitationem nulla est perspiciatis quasi eos...</p>

    <a href="#blog" className='inline-block font-bold hover:text-color-secondary transition-all duration-300 ease-in-out '><span className='tracking-wider capitalize underline hover:no-underline'>Read more</span></a>
</div>
    </div>
    </div>
    </div>
</section>


<section id="download-app" className="bg-color-primary-light">
    <div className="container h-[80vh] grid place-items-center">

        <div className='text-center md:w-2/3 m-auto'>
        <h1 className='title'>Download App Now And Save Your Money</h1>
        <p className='leading-relaxed pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, magni?</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10">
            <a href="#" className='bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70'>
                <img src="/light/ios-store-dark.png" alt="" />
            </a>
            <a href="#" className='bg-color-white h-16 w-44 grid place-items-center rounded-lg hover:opacity-70'>
                <img src="/light/g-play-dark.png" alt="" />
            </a>
        </div>
        </div>

    </div>
</section>

<section id="contact">
    <div className="container py-20">

    <div className='text-center m-auto mb-20 md:w-1/2'>
        <h4 className='font-bold text-color-secondary mb-4'> Have A Question</h4>
        <h1 className='title'>Get In Touch </h1> 
    </div>

    <form action="">
        <div className='w-full m-auto text-center md:w-2/3'>
            <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
                <input type="text" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary ' placeholder='Name' />

                <input type="email" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary ' placeholder='Email' />


                <input type="tel" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary ' placeholder='Phone' />


                <input type="text" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary ' placeholder='Company' />
                </div>

<textarea name="" id="" className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary ' placeholder='Message' rows={4}></textarea>
           
           <button className='btn-light mt-10'>Send Message</button>
        </div>
    </form>
    </div>
</section>

<section id="footer">

    <div className="bg-color-primary-dark relative">

        <div className="container py-10">

<div className="grid gap-10 md:grid-cols-3 pb-10">

<div className='space-y-6'> 
    <h4 className='font-bold text-lg'>About App</h4>
    <p className='leading-relaxed '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae sit sunt expedita mollitia ex. Molestias vero commodi fugiat ea voluptatem?</p>

    <div className='flex gap-5 items-center'>
<p>Follow Us</p>
<i className='fa-brands fa-facebook-f cursor-pointer hover:text-color-secondary'></i>

<i className='fa-brands fa-twitter cursor-pointer  hover:text-color-secondary'></i>

<i className='fa-brands fa-youtube cursor-pointer hover:text-color-secondary'></i>

<i className='fa-brands fa-instagram cursor-pointer hover:text-color-secondary'></i>
    </div>
    </div> 

<div className='flex justify-between md:justify-around'>
    <div className="space-y-6">
        <h4 className='font-bold text-lg'>Quick Links</h4>
        <ul className='space-y-3'>
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Home</a></li>
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Features</a></li>
       
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Pricing</a></li>
       
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Testimonial</a></li>
       
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Blog</a></li> 
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Contact</a></li>
       
        </ul>
    </div>

    <div className="space-y-6">
        <h4 className='font-bold text-lg'>Help</h4>
        <ul className='space-y-3'>
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">About Us</a></li>
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Partners</a></li>
       
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Career</a></li>
       
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Reviews</a></li>
       
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Terms & Condition</a></li> 
            <li className='underline hover:no-underline hover:text-color-secondary'><a href="#">Help</a></li>
       
        </ul>
    </div>
</div>

<div className='space-y-6'>

<h4 className='font-bold text-lg'>Newsletter</h4>
    <p className='leading-relaxed '>Subscribe with Emails and loads of news will be sent to you.</p>

<div className="flex items-center">
    <input type="text" className='w-3/4 text-color-gray bg-color-white p-2 lg:p-3 rounded-l-md focus:ouline-none' placeholder='Enter your email' />
    <button type='submit' className='bg-color-secondary px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90'>
<i className='fa-solid fa-chevron-right'> </i>

    </button>
</div>
</div>
</div>


<div className='flex justify-center pt-10 border-t bordper-color-gray'>
<p>2023 &copy; Lightcode. All Rights Reserved.</p>
</div>

        </div>
    </div>
</section>
        </main>
      
    </div>
  )
}

export default Page