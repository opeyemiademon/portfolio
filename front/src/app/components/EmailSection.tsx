"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 md:my-12 py-24 gap-4 relative'>
<div className='bg-primary-900  from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>

<div className='z-10'>
    <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
    <p className='text-[#ADB7BE] mb-4 max-w-md'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum error nostrum iure labore deleniti. Temporibus error in ducimus natus iste</p>

    <div className="socials flex flex-row gap-2">

        <Link href="/github.com"> 
        <Image src="/images/logo/github.svg" alt="" width={30} height={30} />
        </Link>

        <Link href="/github.com"> 
        <Image src="/images/logo/linkedin.svg" alt="" width={30} height={30} /></Link>
    </div>
</div>

<div >
    <form className=' flex flex-col'>

<div className='mb-6'>
<label htmlFor="email" className='text-white block mb-2 text-md'>Your Email</label>
<input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 outline-none text-sm rounded-lg block w-full p-2.5 ' type='email' id='email' required placeholder='ope@gmail.com' />
</div>


<div className='mb-6'>
<label htmlFor="subject" className='text-white block mb-2 text-md'>Your Subject</label>
<input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 outline-none text-sm rounded-lg block w-full p-2.5 ' type='text' id='subject' required placeholder='Just saying hi' />
</div>


<div className='mb-6'>
<label htmlFor="message" className='text-white block mb-2 text-md'>Message</label>
<textarea name="" id="message" defaultValue={""} className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 outline-none text-sm rounded-lg block w-full p-2.5' placeholder="let's talk about ..."></textarea>
</div>

<button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
    </form>
</div>
    </section>
  )
}

export default EmailSection