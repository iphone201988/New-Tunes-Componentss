import React from 'react'
import Artist_1 from '../../../assets/artist-1.png'
import Artist_2 from '../../../assets/artist-2.png'
import Artist_3 from '../../../assets/artist-3.png'
import Artist_4 from '../../../assets/artist-4.png'
import Artist_5 from '../../../assets/artist-5.png'

const ArtistsWeek = () => {
  return (
    <div className='bg-[#F9F0FF] py-[80px] max-mlg:py-[40px] '>
      <div className="px-[20px] max-w-[1600px] mx-auto">
            <h2 className='text-grad text-[48px] font-bold max-lg:text-[36px] max-sm:text-[26px]'>Artists of the Week</h2>
            <div className="flex gap-[25px] mt-[40px] max-lg:mt-[30px] max-lg:flex-col">
                <div className="w-[50%] relative max-lg:w-full ">
                    <img className='w-full h-full object-cover rounded-[24px]' src={Artist_1} alt="" />
                    <p className=' absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[20px] bottom-[20px] max-md:p-[8px] max-md:left-[10px] max-md:bottom-[10px]'>Name of  Artist</p>
                </div>
                <div className="w-[50%] flex flex-wrap gap-[25px] max-lg:w-full">
                    <div className="w-[calc(50%-13px)] relative max-md:w-full">
                    <img className='w-full h-full object-cover rounded-[24px]' src={Artist_2} alt="" />
                    <p className=' absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[10px] bottom-[10px] max-md:p-[8px]'>Name of  Artist</p>
                    </div>
                    <div className="w-[calc(50%-13px)] relative max-md:w-full">
                    <img className='w-full h-full object-cover rounded-[24px]' src={Artist_3} alt="" />
                    <p className=' absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[10px] bottom-[10px] max-md:p-[8px]'>Name of  Artist</p>
                    </div>
                    <div className="w-[calc(50%-13px)] relative max-md:w-full">
                    <img className='w-full h-full object-cover rounded-[24px]' src={Artist_4} alt="" />
                    <p className=' absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[10px] bottom-[10px] max-md:p-[8px]'>Name of  Artist</p>
                    </div>                   
                    <div className="w-[calc(50%-13px)] relative max-md:w-full">
                    <img className='w-full h-full object-cover rounded-[24px]' src={Artist_5} alt="" />
                    <p className=' absolute text-[#8A4DFF] bg-[#fff] font-bold p-[16px] rounded-[16px] left-[10px] bottom-[10px] max-md:p-[8px]'>Name of  Artist</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default ArtistsWeek
