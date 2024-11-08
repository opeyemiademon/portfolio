import React from 'react'

const Page =()=> {
  return (
    <div className='bg-white container mx-auto'>

        <nav>
            <ul className="flex justify-center items-center lg:flex md:block sm:block flex-wrap mt-10">

<li className='mt-5'>
     <a href="" className="ml-20 text-[#137548] font-bold border-b-2 border-[#137548] pb-2">Home</a>  </li>

     <li className='mt-5'>
     <a href="" className="ml-20 text-[#137548] hover:font-bold hover:border-b-2 hover:border-[#137548] hover:pb-2">Free Courses</a>  </li>

     <li className='mt-5'>
     <a href="" className="ml-20 text-[#137548] hover:font-bold hover:border-b-2 hover:border-[#137548] hover:pb-2">Meet The Founder</a>  </li>

     <li className='mt-5'>
     <a href="" className="ml-20 text-[#137548] hover:font-bold hover:border-b-2 hover:border-[#137548] hover:pb-2">Blogs</a>  </li>


            </ul>
        </nav>

        <header className='mt-40'>
            <div className="flex justify-center">
                <img src="/images/b.jpg" alt="" className='w-72 mr-10' />
                <h1 className='lg:text-5xl md:text-2xl sm:text-lg font-bold text-[#212221] mt-20'>
                    The <br /> <span className='text-[#137548]'> Photography</span>
                </h1>
            </div>


{/* second section */}
<div className="flex justify-center items-center">
    <p className='text-8xl text-[#212221]'>"</p>

    <p className='mt-10 md:text-2xl sm:text-lg mr-10 text-[#212221]'>
        <span className='text-[#137548] font-bold '> Photography</span>
        is the story <br/> i fail to put into words.
    </p>

    <img src="/images/c.jpg" alt="" className='w-72' />
</div>
        </header>


        <section className="mt-40 flex justify-around items-center flex-wrap">

            <p className='w-80 mb-20'>
                <span className='font-bold'> Photography</span>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cumque provident sed rerum a qui accusantium inventore obcaecati, asperiores pariatur voluptatum officia impedit odit in fugiat minus doloremque fugit magnam.</p>


<h1 className="text-5xl font-bold text-[#212221] mb-20"> What is <br /> <span className='text-[#137548]'>Photography</span></h1>
        </section>

        <section className='mt-52 flex justify-around flex-wrap '>

            <div className="flex justify-center items-center">

                <div className='bg-[#137548] bg-opacity-40 h-[25rem] w-[20rem] relative lg:block md:block sm:hidden'>

                    <img src="/images/c.jpg" alt="" className='w-80 absolute lg:left-20 lg:top-20 md:right-10 md:top-20' />
                </div>
            </div>


<div className="contentt">
    <h1 className="text-5xl font-bold text-[#212221] mb-10 "> About <span className='text-[#137548]'>Founder</span>

    </h1>

    <p className="w-80">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, rem iusto sit libero vitae impedit veniam sed at nisi eveniet aliquam placeat, dolorem saepe facilis amet explicabo, temporibus praesentium. Facere?</p>
</div>
        </section>


        <section className="mt-32">
            <h1 className="text-right mr-20 text-5xl font-bold mb-10">
                Recent Projects
            </h1>

            <div className="m-20 flex justify-around items-center flex-wrap mx-auto">

                <div className="w-64 m-10">
                    <img src="/images/d.jpg" alt="" />

                    <div className='text-[#137548] py-2'> Web Design</div>
                </div>

                <div className="w-64 m-10">
                    <img src="/images/c.jpg" alt="" />

                    <div className='text-[#137548] py-2'> Impact</div>
                </div>

                <div className="w-64 m-10">
                    <img src="/images/b.jpg" alt="" />

                    <div className='text-[#137548] py-2'> Personal</div>
                </div>
                <div className="w-64 m-10">
                    <img src="/images/d.jpg" alt="" />

                    <div className='text-[#137548] py-2'> Nature</div>
                </div>
                <div className="w-64 m-10">
                    <img src="/images/b.jpg" alt="" />

                    <div className='text-[#137548] py-2'> Fancy</div>
                </div>
                <div className="w-64 m-10">
                    <img src="/images/c.jpg" alt="" />

                    <div className='text-[#137548] py-2'> Luxury</div>
                </div>
            </div>
        </section>

        <footer className='py-10'>

<div className="flex justify-around items-center flex-wrap">
    <div className="card">
        <h1 className="font-bold mb-5">SITE MENU</h1>
        <p>About Us</p>
        <p>Photography</p>
        <p>Lens Database</p> 
        <p>Lens Index</p>
    </div>

    <div className="card">
        <h1 className="font-bold mb-5">REVIEWS</h1>
        <p>Review Archive</p>
        <p>Camera Review</p>
        <p>Lens Review</p>
        <p>Other Gear Reviews</p>
    </div>

    <div className="card">
        <h1 className="font-bold mb-5">MORE</h1>
        <p>Contact Us</p>
        <p>Subscribe</p>
        <p>Support Us</p>
        <p>Lens Index</p>
    </div>
</div>
        </footer>
    </div>
  )
}

export default Page 