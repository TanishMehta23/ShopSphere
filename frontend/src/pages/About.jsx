import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to ShopSphere — your one-stop destination for premium fashion and lifestyle products. Founded with a passion for style and quality, we bring together a carefully curated collection of clothing, accessories, and more, catering to men, women, and kids across the globe.</p>
          <p>At ShopSphere, we believe that great style should be accessible to everyone. That's why we work with trusted brands and artisans to deliver products that blend contemporary design with everyday comfort — all at prices that make sense. From our easy-to-navigate catalog to our seamless checkout experience, every detail is built around you.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to redefine online shopping by delivering an exceptional, personalized experience. We are committed to offering high-quality products, transparent pricing, and world-class customer support — making ShopSphere the brand you trust, every time you shop.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Quality Assurance: </p>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Convenience: </p>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p>Exceptional Customer Service: </p>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About