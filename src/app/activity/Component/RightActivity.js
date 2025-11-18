import React from 'react'
import Image from 'next/image'
import FirstInvestment from './FirstInvestment'
import SecondInvestment from './SecondInvestment'

const RightActivity = () => {
  return (
    <>
     {/* container 2 */}
        <div className='flex flex-col px-4 md:px-0'>
          <div className='bg-[#F9F9FA] relative w-full max-w-[420px] md:w-[420px] h-[36px] rounded-[16px] mx-auto mt-15'>
            <Image
            src="/Images/Vector (7).svg"
            alt=""
            width="20"
            height="20"
            className='absolute top-2 left-3 w-[20px] h-[20px]'
            />
            <div className='text-[#838181] text-[12px] font-medium w-[38px] h-[16px] ml-12 mt-2.5'>
              Search
            </div>
          </div>
        
          {/* Outer div */}
          <div className='w-full max-w-[970px] md:w-[970px] md:h-[840px] mt-4 mx-auto md:mx-0'>
             {/* Activity 1 */}
            <div className='w-full max-w-[754px] md:w-[754px] md:h-[393px] mx-auto mt-4'>
              <div className='flex flex-row w-full max-w-[729px] md:w-[729px] h-[29px] mb-3 justify-between px-2 md:px-0'>
                <p className='mt-2 text-[#000019]'>
                  Today
                </p>
                <Image
                src="/Images/calendar.svg"
                alt=''
                width="24"
                height="24"
                className='w-[24px] h-[24px] mt-1'
                />
              </div>

              {/* Desktop View - Hidden on Mobile */}
              <div className='hidden md:block space-y-3'>
                {/* First Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  {/* inner div */}
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[618px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Garri Processing Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        20th, June 2023 | 6:05 PM
                      </p>
                    </div>
                    <p className='my-3.5'>
                      5000 USDT
                    </p>
                    <p className='my-3.5'>
                      Bought
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Second Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[630px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Sugar-Cane Farm Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        20th, June 2023 | 2:05 PM
                      </p>
                    </div>
                    <p className='my-3.5'>
                      6000 USDT
                    </p>
                    <p className='my-3.5'>
                      Withdrawn
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Third Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[606px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Sugar Processing Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        20th, June 2023 | 2:05 PM
                      </p>
                    </div>
                    <p className='my-3.5 mr-4'>
                      6000 USDT
                    </p>
                    <p className='my-3.5'>
                      Sold
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Fourth Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[623px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Cassava Farm Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        20th, June 2023 | 9:05 AM
                      </p>
                    </div>
                    <p className='my-3.5 mr-1'>
                      12000 USDT
                    </p>
                    <p className='my-3.5'>
                      Bought
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Fifth Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[614px] h-[49px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Farm Health Insurance
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        20th, June 2023 | 6:05 AM
                      </p>
                    </div>
                    <p className='my-3.5 mr-4'>
                      6000 USDT
                    </p>
                    <p className='my-3.5'>
                      Paid
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>
              </div>

              <FirstInvestment />
            </div>

             {/* Activity 2 */}
             <div className='w-full max-w-[754px] md:w-[754px] md:h-[393px] mx-auto mt-6'>
              <div className='w-full max-w-[89px] md:w-[89px] h-[29px] py-2 px-2 mb-3'>
              <p className='w-[73px] h-[21px] text-[16px] text-[#000019] font-medium'>
                Yesterday
              </p>
              </div>

              {/* Desktop View - Hidden on Mobile */}
              <div className='hidden md:block space-y-3'>
                {/* First Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[618px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Garri Processing Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        19th, June 2023 | 6:05 PM
                      </p>
                    </div>
                    <p className='my-3.5'>
                      5000 USDT
                    </p>
                    <p className='my-3.5'>
                      Bought
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Second Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[630px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Sugar-Cane Farm Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        19th, June 2023 | 2:05 PM
                      </p>
                    </div>
                    <p className='my-3.5'>
                      6000 USDT
                    </p>
                    <p className='my-3.5'>
                      Withdrawn
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Third Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[606px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Sugar Processing Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        19th, June 2023 | 2:05 PM
                      </p>
                    </div>
                    <p className='my-3.5 mr-4'>
                      6000 USDT
                    </p>
                    <p className='my-3.5'>
                      Sold
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Fourth Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[623px] h-[48px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Cassava Farm Investment
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        19th, June 2023 | 9:05 AM
                      </p>
                    </div>
                    <p className='my-3.5 mr-1'>
                      12000 USDT
                    </p>
                    <p className='my-3.5'>
                      Bought
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>

                {/* Fifth Row */}
                <div className='bg-white relative h-[60px] p-2 rounded-[20px]'>
                  <div className='flex flex-row justify-between ml-6 text-[16px] text-[#000019] w-[614px] h-[49px]'>
                    <div className='flex flex-col space-y-2 justify-center w-[214px] h-[48px]'>
                      <p> 
                        Farm Health Insurance
                      </p>
                      <p className='text-[12px] text-[#737373]'>
                        19th, June 2023 | 6:05 AM
                      </p>
                    </div>
                    <p className='my-3.5 mr-4'>
                      6000 USDT
                    </p>
                    <p className='my-3.5'>
                      Paid
                    </p>
                  </div>
                   <Image
                  src="/Images/Vector (8).svg"
                  alt=''
                  width="24"
                  height="24"
                  className='absolute w-[24px] h-[24px] top-5 left-[44rem]'
                  />
                </div>
              </div>

              <SecondInvestment />
            </div>
          </div> 

          
          <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] md:w-[268px] h-[20px] 
          gap-2 items-center justify-center md:justify-start mt-5 my-4 md:my-0 mx-auto md:ml-[20rem]'>
            <Image
              src="/Images/Vector (4).svg"
              alt=""
              width="20"
              height="20"
              className='w-[20px] h-[20px]'
              />
              <p> 2023 </p>
              <p> GROWTOKEN </p>
              <p> All Rights Reserved </p>   
          </footer> 
        </div>
    </>
  )
}

export default RightActivity