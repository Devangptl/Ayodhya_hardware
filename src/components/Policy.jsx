import React from 'react'
import { PiPoliceCar } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoIosRefresh } from "react-icons/io";
import { GoShieldLock } from "react-icons/go";

export const Policy = () => {
    return (
        <div className=' '>
        <div className=' bg-[#f6f6f8] px-[32px] py-[25px] w-full grid grid-cols-4 gap-5  items-center justify-around ' >
            <div className=' flex items-center justify-center gap-6'>
                <PiPoliceCar className=' text-[#9e9e9e] text-[80px] ' />
                <div className=' flex flex-col items-start justify-center gap-1'>
                    <p className=' text-[14px]  font-semibold font'> FREE SHIPPING</p>
                    <p className='text-[#9e9e9e]  text-[14px]'>Free shipping on all US order or order above ₹999</p>
                </div>
            </div>
            <div className=' flex items-center justify-center gap-6'>
                <LiaHandsHelpingSolid className=' text-[#9e9e9e] text-[80px] ' />
                <div className=' flex flex-col items-start justify-center gap-1'>
                    <p className=' font text-[14px]  font-semibold  font'> 	SUPPORT 24/7</p>
                    <p className='text-[#9e9e9e]  text-[14px]'>Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>
            <div className=' flex items-center justify-center gap-6'>
                <IoIosRefresh className=' text-[#9e9e9e] text-[80px] ' />
                <div className=' flex flex-col items-start justify-center gap-1'>
                    <p className=' font text-[14px]  font-semibold  font'> 30 DAYS RETURN</p>
                    <p className='text-[#9e9e9e]  text-[14px]'>Simply return it within 30 days for an exchange</p>
                </div>
            </div>
            <div className=' flex items-center justify-center gap-6'>
                <GoShieldLock className=' text-[#9e9e9e] text-[80px] ' />
                <div className=' flex flex-col items-start justify-center gap-1'>
                    <p className='  font text-[14px]  font-semibold'> 100% PAYMENT SECURE</p>
                    <p className='text-[#9e9e9e]  text-[14px]'>We ensure secure payment with PEV</p>
                </div>
            </div>
        </div>
        </div>
    )
}
