"use client"
import React from 'react'
import { Bars3Icon, XMarkIcon, MoonIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ScrollReveal from 'scrollreveal'

const Page = () => {
    

    
  return (
    <>

<header className='bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50' id='header'>
  <nav className='container relative h-14 flex justify-between items-center'>
    <div><a href="" className='text-2xl uppercase font-oswald'>Bur<span className='text-secondaryColor '>ger</span></a></div>
     
     <div className='dark:bg-darkColor  hidden absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto ' id="nav-menu"> 
        
        <ul className='flex flex-col text-center gap-5 md:flex-row'>
        <li><a href="#home" className='nav__link ease-in duration-200 hover:text-secondaryColor text-secondaryColor' >Home</a></li>
        <li><a href="#about" className='nav__link ease-in duration-200 hover:text-secondaryColor'>About Us</a></li>
        <li><a href="#menu" className='nav__link ease-in duration-200 hover:text-secondaryColor'>Menu</a></li>
        <li><a href="#review" className='nav__link ease-in duration-200 hover:text-secondaryColor'>Review</a></li>
        <li><a href="#contact" className='nav__link ease-in duration-200 hover:text-secondaryColor'>Contact</a></li>
    </ul>
    
    <div className='absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden' id="nav-close">
    <XMarkIcon className='h-5 w-5 ' /> 
    
    </div>
    </div>


    <div className=' flex items-center gap-5'> 
    <i className="fa-solid fa-moon h-5 w-5 cursor-pointer text-xl ml-4" id='theme-toggle'></i>
   
 
 <div className='md:hidden' id='hamburger'>
        <Bars3Icon className='h-5 w-5 cursor-pointer text-xl ' />
        </div>
    </div>
  </nav>
</header>
<main>

    {/* home section  */}
<section id='home'>

<div className='container flex flex-col items-center gap-10 md:flex-row '>

    <div className='mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY home_image'>
        <img src="img/home-image.png" alt="burger" className='w-60 md:w-full' />
    </div>

    <div className='home_contact text-center md:basis-1/2 md:text-start lg:basis-3/5 '>
        <h1 className='home__title'>HAPPY TUMMY WITH TASTY BURGER</h1>

        <div className='seperator mx-auto md:mx-0' />

        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero distinctio molestiae sit praesentium delectus assumenda accusamus adipisci libero laboriosam neque earum corrupti nam reiciendis aspernatur, laborum quasi suscipit quibusdam</p>

        <div className='text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20 '>
            <div className='text-center'>
            <i className='fa-solid fa-utensils text-secondaryColor text-4xl' />
            <br />
            Delicious
            </div>

            <div className='text-center'>
            <i className='fa-solid fa-droplet  text-secondaryColor text-4xl' />
            <br />
           Fresh
            </div>

            <div className='text-center'>
            <i className='fa-brands fa-envira  text-secondaryColor text-4xl' />
            <br />
           Organic
            </div>
        </div>

        <a href="#" className='btn btn-primary'> learn more</a>
    </div>
</div>

</section>

{/* category section */}

<section id="category">
    <div className='container flex flex-col gap-5 md:flex-row'>
    {/*     card 1 */}
    <div className='category_card bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
        <div className='basis-1/3 relative '>
            <img src="/img/burger-1.png" alt="burger" className='absolute w-28 -bottom-4 -left-4' />

            </div>
            <div>
                <div className='mb-2'>
                    <h4 className='card__title'>Food</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit.</p>
                </div>

                <a href="#" className='text-blackColor cursor-pointer'>Buy Online</a>
            </div>
      
    </div>
{/* card 2 */}

    <div className='category_card bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
        <div className='basis-1/3 relative '>
            <img src="/img/snack-1.png" alt="burger" className='absolute w-28 -bottom-4 -left-4' />

            </div>
            <div>
                <div className='mb-2'>
                    <h4 className='card__title'>Food</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit.</p>
                </div>

                <a href="#" className='text-secondaryColor  cursor-pointer'>Buy Online</a>
            </div>
      
    </div>

{/* card 3 */}
    <div className=' category_card bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
        <div className='basis-1/3 relative '>
            <img src="/img/beverage-2.png" alt="burger" className='absolute w-28 -bottom-4 -left-4' />

            </div>
            <div>
                <div className='mb-2'>
                    <h4 className='card__title'>Food</h4>
                    <p className='text-sm'>Lorem ipsum dolor sit.</p>
                </div>

                <a href="#" className='text-secondaryColor cursor-pointer'>Buy Online</a>
            </div>
      
    </div>

    </div>
</section>

{/* Promo section  */}

<section id="promo">
    <div className='container flex flex-col gap-5 lg:gap-10 lg:flex-row ' >
        {/* card 1 */}
        <div className='promo__card-1 dark:bg-darkColorLight bg-primaryColorLight flex flex-col p-5 rounded-lg  md:flex-row md:items-center lg:flex-row-reverse ld:flex-1'>
            <img src="/img/promo-1.png" alt="promo" className='w-40 mx-auto hover:animate-movingY md:mx-5' />
            <div className='space-y-2 pt-5 md:pt-0'>
                <p className='text-xs text-secondaryColor'>Payday promo</p>
                <h3 className='card__title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className='text-xs text-secondaryColor'>Buy online</a>
            </div>
        </div>


        {/* card 2 */}
        <div className=' promo__card-2 dark:bg-darkColorLight bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse ld:flex-1'>
            <img src="/img/promo-2.png" alt="promo" className='w-40 mx-auto hover:animate-movingY md:mx-5' />
            <div className='space-y-2 pt-5 md:pt-0 '>
                <p className='text-xs text-secondaryColor'>Payday promo</p>
                <h3 className='card__title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#" className='text-xs text-secondaryColor'>Buy online</a>
            </div>
        </div>
    </div>
</section>

{/* About section */}
<section id="about">
    <div className='container flex flex-col gap-10 md:flex-row'>
        <div className='flex-1 about__img'>
            <img src="/img/about.jpg" alt="about" className='rounded-lg' />
            </div>

        <div className='flex-1 about__content'>
            <h2 className='section__title'>FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
            <div className="seperator"></div>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolore nam fugit deleniti aliquam ipsam nostrum minima, obcaecati illum quos delectus, voluptatum perspiciatis incidunt. </p>
            <ul className='grid grid-cols-2 py-5 space-y-1 '>
                <li className='text-xs text-paragraphColor'><i className='fa-solid fa-check text-secondaryColor'></i> Best Price</li>
                <li  className='text-xs text-paragraphColor'><i className='fa-solid fa-check text-secondaryColor'></i> Fresh Ingredent</li>
                <li className='text-xs text-paragraphColor'><i className='fa-solid fa-check text-secondaryColor'></i> Best Service</li>
                <li className='text-xs text-paragraphColor'><i className='fa-solid fa-check text-secondaryColor'></i> Health Protocol</li>
            </ul>

            <a href="#" className='btn btn-primary'>About Us</a>
        </div>
    </div>
</section>

{/* menu */}


<section id="menu">
    <div className="container">
        <div className='max-w-md mx-auto text-center'>
            <h2 className='section__title'>OUR BEST MENU</h2>
            <div className="seperator mx-auto"></div>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima consequatur odit quod reiciendis asperiores hic</p>

            <div className='tabs_wrap'>
                <ul className='flex flex-wrap justify-center gap-3 py-10'>
                    <li data-tabs='all' className='btn bg-primaryColorLight active dark:bg-darkColorLight'>All</li>
                    <li data-tabs='food' className='btn bg-primaryColorLight dark:bg-darkColorLight'>Food</li>
                    <li data-tabs='snack' className='btn bg-primaryColorLight dark:bg-darkColorLight'>Snack</li>
                    <li data-tabs='beverage' className='btn bg-primaryColorLight dark:bg-darkColorLight'>Beverage</li>
                </ul>
            </div>
        </div>

        <div className='menu__items'>
            <ul className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12'>

            {/*     food  */}
                <li className='item_wrap food'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/burger-1.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title"> REGULAR BEEF BURGER </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap food'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/burger-2.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title"> REGULAR BEEF BURGER </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap food'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/burger-3.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title"> REGULAR BEEF BURGER </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap food'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/burger-4.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title"> REGULAR BEEF BURGER </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap food'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/burger-5.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title"> REGULAR BEEF BURGER </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


{/* snack */}


<li className='item_wrap snack'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/snack-1.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">FRENCH FRIES </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap snack'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/snack-2.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">FRENCH FRIES </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>

                <li className='item_wrap snack'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/snack-3.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">FRENCH FRIES </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap snack'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/snack-4.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">FRENCH FRIES </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap snack'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/snack-5.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">FRENCH FRIES </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap snack'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/snack-6.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">FRENCH FRIES </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


               {/*  beverage */}

               <li className='item_wrap beverage'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/beverage-1.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">SWEET SMOOTHIE </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap beverage'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/beverage-2.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">SWEET SMOOTHIE </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>



                <li className='item_wrap beverage'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/beverage-3.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">SWEET SMOOTHIE </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>



                <li className='item_wrap beverage'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/beverage-4.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">SWEET SMOOTHIE </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>


                <li className='item_wrap beverage'> <div className='h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-liear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor'> <img src="/img/beverage-5.png" alt="food" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24 '  />
                </div>
                
                <div className='pt-5'>
                    <div className='mb-2'>
                        <h4 className="card__title">SWEET SMOOTHIE </h4>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <p className='text-secondaryColor'>$42.00</p>
                </div>
                </li>
            </ul>
        </div>
        
    </div>
</section>

{/* Review section */}

<section id="review" className='bg-primaryColorLight py-20 dark:bg-darkColorLight '>
<div className="container customer__review">

<div className='max-w-md mx-auto text-center'>
            <h2 className='section__title'>CUSTOMER REVIEW</h2>
            <div className="seperator mx-auto"></div>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima consequatur odit quod reiciendis asperiores hic</p>

        </div>

        <div className="swipper py-10 ">
{/*             <ul className="swipper-wrapper">
                <li className="swipper-slide">
                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-1.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div>
                </li>

                <li className="swipper-slide">
                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-2.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div>
                </li>


                <li className="swipper-slide">
                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-3.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div>
                </li>

                <li className="swipper-slide">
                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-4.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div>
                </li>

                <li className="swipper-slide">
                    <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-5.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div>
                </li>
            </ul> */}


            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,  A11y]}
      spaceBetween={30}
      speed={400}
      autoplay={{
        delay:3000,
        disableOnInteraction:false

      }}
      pagination={{
        el:'.swipper-pagination',
        clickable:true
      }}
      grabCursor={true}
      breakpoints={{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
      }}
      scrollbar={{ draggable: true }}
      /* onSwiper={(swiper) => console.log(swiper)} */
      /* onSlideChange={() => console.log('slide change')} */
    >
      <SwiperSlide className="swipper-slide">  
          <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-5.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide className="swipper-slide">  
          <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-5.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide className="swipper-slide">  
          <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-5.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div></SwiperSlide>

                    <SwiperSlide className="swipper-slide">  
          <div className='flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor'>
                        <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti itaque nihil, fugiat corporis ipsa magnam nisi at!</p>
                        <div className='flex  items-center'>
                            <img src="/img/review-5.jpg" alt="review" className='w-12 h-12 rounded-full' />
                            <div className='ml-2'>
                                <p className='font-oswald uppercase'>John Doe</p>
                                <p className='paragraph'>Designer</p>
                            </div>
                            <i className='fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto'></i>
                        </div>
                    </div></SwiperSlide>
    </Swiper>
    
            <div className="swipper-pagination " />

        </div>

</div>
</section>

{/* contact section */}

<section id="contact" className='bg-secondaryColor py-16'>
    <div className='container flex flex-col gap-5 md:items-center md:flex-row'>
        <div className='space-y-4 md:flex-1'>
            <h2 className='section__title text-blackColor'>GET EXCLUSIVE UPDATE</h2>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
<div className='flex flex-col gap-3 md:flex-row md:flex-1'>
    <input type="email" placeholder='subscribe' className='p-2 text-blackColor rounded-lg outline-none md:w-full'  />
    <a href="" className='flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75'><i className='fa-solid fa-paper-plane'>Subscribe</i></a></div>

    </div>
</section>
</main>

<footer>

<section className="footer">
    <div className="container">
        <ul className="grid grid-cols-1 item-center gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">

            <li>
                <div className="space-y-3"><a href="" className='text-4xl uppercase font-oswald'>Bur<span className='text-secondaryColor'>ger</span> </a>
                
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, inventore rerum. Praesentium illo inventore ipsum optio! Error, commodi?</p>
                </div>
            </li>

<li>
    <div className='flex flex-col gap-3'>
        <h3 className='text-lg uppercase font-oswald  '>SUPPORT</h3>
<a href="#" className="text-xs hover:text-secondaryColor "> FAQ's</a>

<a href="#" className="text-xs hover:text-secondaryColor "> Privacy Policy</a>
<a href="#" className="text-xs hover:text-secondaryColor "> Terms & Condition</a>
<a href="#" className="text-xs hover:text-secondaryColor "> Contact</a>
    </div>
</li>

<li className="space-y-8">
    <div className="space-y-2">
        <h3 className="text-lg uppercase font-oswald">Phone </h3>
        <p className="flex items-center gap-2 text-xs">
            <i className='fa-solid fa-phone text-lg text-secondaryColor'></i>
            +1 000 000 0000
        </p>
    </div>

    <div className="space-y-2">
        <h3 className="text-lg uppercase font-oswald">Email </h3>
        <p className="flex items-center gap-2 text-xs">
            <i className='fa-solid fa-envelope text-lg text-secondaryColor'></i>
            burger.info@email.com
        </p>
    </div>
</li>



<li className="space-y-8">
    <div className="space-y-2">
        <h3 className="text-lg uppercase font-oswald">Address </h3>
        <p className="flex items-center gap-2 text-xs">
            <i className='fa-solid fa-location-dot text-lg text-secondaryColor'></i>
           Address go here
        </p>
    </div>

    <div className="space-y-2">
        <h3 className="text-lg uppercase font-oswald">Follow Us </h3>
       
       <div className="space-x-3">

        <i className='fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 duration-200 ease-in'></i>
        <i className='fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1  duration-200 ease-in'></i>
        <i className='fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1  duration-200 ease-in'></i>
       </div>
    </div>
</li>
        </ul>

        <div className="flex flex-col items-center border-t border-primaryColorLight py-5 md:flex-row md:justify-between dark:border-darkColorLight ">

<p className='paragraph'>Lorem ipsum dolor sit amet.</p>
<p className='paragraph'>Lorem ipsum dolor sit, amet consectetur.</p>
        </div>
    </div>
</section>


</footer>

<a href="#" className='fixed right-4 bottom-4 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200 '><i className='fa-solid fa-arrow-up'></i></a>
    </>
  )
}

export default Page