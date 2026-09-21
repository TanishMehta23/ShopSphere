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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum distinctio fugiat aperiam temporibus non obcaecati provident illo quaerat doloremque in repellendus voluptates quo cumque iste dolorem numquam doloribus, aliquid odio perspiciatis vero animi pariatur ad ipsam autem. Harum, nihil aliquam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ex recusandae quia blanditiis sunt. Corporis, dolore? Molestias velit omnis obcaecati amet culpa minus. Autem deleniti veniam temporibus odio aspernatur architecto cumque sunt omnis vero. Non.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perspiciatis, autem vitae perferendis inventore ipsam explicabo, eligendi iure quos earum pariatur ratione eius omnis consectetur!</p>
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
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring yur satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About