"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (name.trim() && email.trim() && message.trim() && isChecked) {
      setError('')
      setSubmitted(true)
      // Reset after 2 seconds
      setTimeout(() => {
        setSubmitted(false)
        setName('')
        setEmail('')
        setMessage('')
        setIsChecked(false)
      }, 2000)
    } else {
      setError('Please fill in all fields and check the verification box')
      // Clear error after 3 seconds
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }

  return (
    <>
    <section id='contacts' className='bg-contact-mobile md:bg-contact-gradient'>
           {/*main container */}
          <div className='mx-auto  h-[632px]
           md:flex-row  lg:w-[84.4rem] 2xl:w-[90rem] md:h-[449px]'>
             <h3 className='text-white text-[20px] pl-12 pt-6 md:text-[24px] md:pt-0 md:pl-25'>
            Contact
         </h3>
         {/* flex container */}
         <div className='flex flex-col ml-[3rem] w-fit lg:ml-[20rem] 2xl:ml-[23rem] gap-[1rem] lg:gap-[35px] md:flex-row'>
         {/* container 1*/}
         <div className='flex flex-col'>
         {/* Name div */}
         <div className='flex flex-col mt-10 text-white w-[320px] h-[85px]'>
            <p className='text-[16px]'>
                Name
            </p>
             <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} className='border-white border-b-1 text-[#F9F9F999] px-2 h-[40px]' />
            <p className='text-[12px] font-light' style={{color: '#F9F9F999'}}>
                Example: Jean Disney
            </p>

         </div>
            {/* Email div */}
          <div className='flex flex-col mt-10  w-[320px] h-[79px]'>
            <p className='text-[16px] text-white'>
                Email address
            </p>
            <input type="email" placeholder='your.email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} className='border-white border-b-1 h-[40px] px-2 text-[#F9F9F999]' />
            <p className='text-[12px] font-light' style={{color: '#F9F9F999'}}>
                Example: @gmail.com
            </p>

         </div>
         {/* Verification div */}
         <div className=' mt-10 w-[149px] mx-20 h-[54px] text-white md:mx-0'>
            <p className='text-[16px]'>
                Verification
            </p>
            <div className='flex flex-row w-[149px] h-[29px] gap-[8px] items-center cursor-pointer' onClick={() => setIsChecked(!isChecked)}>
                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={() => setIsChecked(!isChecked)} 
                  className='w-[18px] h-[18px] cursor-pointer'
                />
                <p className='text-[16px]'>
                    I&apos;m not a robot
                </p>

            </div>  
         </div>
        </div>
            
        <div className='flex flex-col gap-5 md:flex-row'>
            {/* container 2 */}
         <div className='hidden md:flex md:flex-row '>
           <Image
           src="/Images/Line 3.svg"
           alt=''
           width="8"
           height="8"
           className=''
           />
      </div>
      {/* container 3 */}
      <div className='w-[308px] h-[175px] text-white md:mt-10 md:mb-0'>
        <p className='text-[16px] text-white'>
            Message
        </p>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='border-white border-1 w-[308px] h-[120px] rounded-[8px] p-3 text-white  font-light bg-transparent' placeholder='Write text here...' style={{color: '#F9F9F999'}}></textarea>
        <div onClick={handleSubmit} className='mt-5 w-[96px] h-[32px] text-center py-1 bg-white 
        rounded-[10px] ml-[7rem] md:ml-[13.2rem] md:mt-18 text-[var(--color-growtoken-orange)] cursor-pointer hover:bg-gray-100 transition-colors'>
            {submitted ? 'Submitted' : 'Send'}
        </div>
        {error && (
          <p className='text-red-400 text-[12px] mt-2 text-center'>
            {error}
          </p>
        )}
      </div>
    </div>
     </div>
    </div>
    </section>
    </>
  )
}

export default Contact