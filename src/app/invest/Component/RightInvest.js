"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import MobileInvestment from './MobileInvestment'

const RightInvest = () => {

    const router = useRouter()

  const handleInvestClick = (investmentType) => {
    router.push(`/invest/${investmentType.toLowerCase().replace(/\s+/g, '-')}`)
  }
  return (
    <>
    {/* container 2 */}
     <div className='flex flex-col px-4 md:px-0'>
        {/* Search div */}
     <div className='bg-[#F9F9FA] relative w-full max-w-[420px] h-[36px] rounded-[16px] mx-auto mt-12'>
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
      
      {/* Active Investments */}
      <div className='w-full max-w-[972px] mx-auto md:mx-0 h-auto border border-[#000019] rounded-[12px] mt-10'>
        <div className='w-full font-bold my-4 mx-4 text-[20px] md:text-[24px] text-[#000019]'>
           <h5> Active Investments </h5> 
        </div>
        
        {/* Mobile and Desktop Investment Rows Container */}
        <div className='w-full mt-6 md:mt-12 pb-4'>
          {/* Desktop view - hidden on mobile */}
          <div className='hidden md:block w-[933px] mx-auto space-y-2'>
            {/* First row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                {/* first item */}
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Chicken Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                {/* Second item */}
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>
                {/* Third item */}
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>
                 {/* Fourth item */}
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>
                 {/* Fifth item */}
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>
                {/* withdraw button */}
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
            
            {/* Second row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Meat-Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
            
            {/* Third row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Cassava Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
            
            {/* Fourth row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                <div className='flex flex-col w-[210px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Garri Processing Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
            
            {/* Fifth row */}
            <div className='flex flex-row w-[914px] h-[56px] text-white rounded-[12px] mx-auto py-1 bg-[#000019]'>
                <div className='flex flex-col w-[196px] h-[48px] border-r ml-6 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[16px]'> Cocoa Farm Investment </p>
                    <p className='text-[12px]'> Invested: 1,000.00 USDT </p>
                </div>
                <div className='flex flex-col w-[135px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 26 Feb, 2023 11:37 PM </p>
                    <p className='text-[12px]'> Start Date </p>
                </div>
                <div className='flex flex-col w-[137px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 05 Feb, 2024 11:38 PM </p>
                    <p className='text-[12px]'>End Date </p>
                </div>
                <div className='flex flex-col w-[82px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 1,125 USDT</p>
                    <p className='text-[12px]'>Total Return</p>
                </div>
                <div className='flex flex-col w-[81px] h-[44px] border-r ml-6 mt-1 space-y-1 border-[#CCCCFF]'>
                    <p className='text-[12px]'> 234.8 USDT</p>
                    <p className='text-[12px]'> Net Profit </p>
                </div>
                <button className='w-[128px] h-[29px] rounded-[4px] text-[16px] mx-auto my-auto border border-[#F18500]'>
                    Withdraw Fund
                </button>
            </div>
          </div>

          <MobileInvestment/>
        </div>
      </div>

      {/* outer div */}
        <div className='w-full md:w-[860px] md:h-[364px] mt-8 overflow-hidden mx-auto md:mx-0'>
        {/*Explore investment  */}
        <div className='flex flex-row relative w-full max-w-[290px] md:w-[290px] h-[31px] ml-4 md:ml-5 mt-3'>
            <h5 className='text-[20px] md:text-[24px] font-bold w-[246px]'>Explore Investments</h5>
            <Image
            src="/Images/arrow-left.svg"
            alt=''
            width="24"
            height="24"
            className="absolute w-[24px] h-[24px] top-1 md:top-1.5 left-[220px] md:left-[16.5rem]"
            />

        </div>
        <div className='flex flex-col md:flex-row relative w-full md:w-[618px]
         md:h-[268px] h-full rounded-[12px] bg-white ml-0 md:ml-5 mt-7 p-4 md:p-0'>
            <Image
            src="/Images/Frame 227.svg" 
            alt=''
            width="200"
            height="200"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto md:absolute 
            md:top-7 md:left-4 mb-4 md:mb-0"
            /> 
            <div className='flex flex-col w-full md:absolute md:w-[260px] h-[44px] text-[#000019] md:left-[16rem] md:top-12'>
                <h6 className=' text-[18px] md:text-[20px] font-medium text-center md:text-left'>
                    Garri Processing Investment</h6>
                <p className='text-[12px] text-center md:text-left'> <span className='text-green-500'>20%</span> 
                  returns in 6 months</p>
            </div>

             <div className='flex flex-row w-full md:absolute md:w-[190px] h-[42px] text-[#010101] 
             justify-center md:justify-between md:left-[16rem] md:top-[8rem] gap-8 md:gap-0 my-4 md:my-0'>
                <div className='flex flex-col w-[76px] h-[41px] text-center md:text-left'>
                    <p className='text-[16px]'>500 USDT</p>
                    <p className='text-[12px]'>per units</p>
                </div>

                <div className='flex flex-col w-[50px] h-[41px] text-center md:text-left'>
                    <p className='text-[16px]'>1000 </p>
                    <p className='text-[12px]'>Investors</p>
                </div>
            </div>
              <button 
               onClick={() => handleInvestClick('Investment Type')}
               className='w-[72px] h-[24px] text-white bg-[#F18500] rounded-[8px] 
               mx-auto md:absolute md:left-[16rem] md:top-[12rem] hover:bg-[#E07700] transition-colors cursor-pointer'>
                Invest
             </button>
        </div>
        <div className='w-full h-[30px] md:w-[618px] md:h-[40px] rounded-[12px] bg-white mt-1 ml-0 md:ml-5'></div>
      </div>
      
      {/* Footer */}
      <footer className='flex flex-row text-[12px] text-[#010101] w-full max-w-[268px] h-[20px]
       gap-2 items-center justify-center md:justify-start my-6 mx-auto md:ml-[18rem]'>
          <Image
          src="/Images/Vector (4).svg"
          alt=""
          width="20"
          height="20"
          className='w-[20px] h-[20px]'
          />
          <p>2023</p>
          <p>GROWTOKEN</p>
          <p>All Rights Reserved</p>   
       </footer> 

 </div>
    </>
  )
}

export default RightInvest