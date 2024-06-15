import React from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { VscAccount } from "react-icons/vsc"
import { HiOutlineShoppingBag } from "react-icons/hi"

export const Navbar = () => {
    return (
        <div className=' z-20 fixed w-full'>
            <div className='  h-16 text-[13px]  flex items-center justify-between px-6 text-white bg-opacity-85 bg-[#111517] w-full '>
                <div className='font  text-[17px]'>
                    Ayodhya <span className=' text-[10px]'>Hardware</span>
                </div>

                <div className=' font flex items-center justify-center gap-5'>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Products</Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Hot Sale</Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Offices</Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Bed Room</Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Living Room</Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Dining Room</Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Pages</Link>
                </div>

                <div className='text-[16px] flex items-center justify-center gap-3'>

                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'><div>
                        <input className=' font' type="text" />
                        <div class="close">
                            <span class="front"></span>
                            <span class="back"></span>
                        </div>
                    </div></Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'><VscAccount /></Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'><FiHeart /></Link>
                    <Link to={"/"} className='hover:text-[#fe9931] duration-300'><HiOutlineShoppingBag /></Link>
                </div>
            </div>
        </div>
    )
}
