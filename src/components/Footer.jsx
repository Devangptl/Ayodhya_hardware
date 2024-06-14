import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";

export const Footer = () => {
    return (
        <div className=' py-[32px] grid grid-cols-3  text-center  '>
          
            <div className='   flex flex-col items-start pl-[32px] justify-start gap-5'>
            <div className='font  text-[17px]'>
                Ayodhya <span className=' text-[10px]'>Hardware</span>
            </div>
                <div className=' flex flex-col items-start justify-center gap-1'>
                    <p className='logoFont flex items-center justify-center gap-2  text-[15px] '> <span><TfiLocationPin/></span>184 Main Rd E, St Albans
                    VIC 3021, Australia</p>
                    <p className='logoFont flex items-center  justify-center gap-2  text-[15px]'><span><AiOutlineMail/></span>contact@ayodhyahardware.com</p>
                    <p className='logoFont flex items-center justify-center gap-2  text-[15px]'><span><HiOutlinePhone/></span>+001 2233 456</p>

                    <div className=' flex py-2  items-start justify-center gap-2 '>
                        <Link className='hover:text-[#fe9931] duration-300' to={"/"}><RiFacebookFill/></Link>
                        <Link className='hover:text-[#fe9931] duration-300' to={"/"}><BsTwitterX/></Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'><FiInstagram/></Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'><FaPinterestP/></Link>
                    </div>
                </div>

             

            </div>

            <div className=' grid grid-cols-3 text-center gap-4 '>
                <div className=' font flex flex-col items-start justify-center gap-5'>
                    <div>
                        <p>Categories</p>
                    </div>
                    <div className='logoFont flex flex-col items-start justify-center gap-2  text-[15px]'>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Products</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Hot Sale</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Offices</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Bed Room</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Living Room</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Dining Room</Link>
                    </div>
                </div>

                <div className=' font flex flex-col items-start justify-center gap-5'>
                    <div>
                        <p >Infomation</p>
                    </div>
                    <div className='logoFont flex flex-col items-start justify-center gap-2  text-[15px]'>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>About Us</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Contact Us</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Terms & Conditions</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Returns & Exchanges</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Shipping & Delivery</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Privacy Policy</Link>
                    </div>
                </div>

                <div className=' font flex flex-col items-start justify-center gap-5'>
                    <div>
                        <p>Quick Links</p>
                    </div>
                    <div className='logoFont flex flex-col items-start justify-center gap-2  text-[15px]'>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Store Location</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>My Account</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Accessories</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Orders Tracking</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>Size Guide</Link>
                        <Link to={"/"} className='hover:text-[#fe9931] duration-300'>FAQs</Link>
                    </div>
                </div>
            </div>

            <div className='   flex flex-col items-center justify-start gap-5'>
                <div className='font'>
                    <p>Quick Links</p>
                </div>
                <div>
                    <p className='logoFont flex flex-col items-start justify-center gap-2  text-[15px]'>Subscribe to our newsletter and get 10% off your first purchase</p>
                </div>

                <div className=' flex items-center justify-center gap-1'>
                    <input className=' border border-black rounded-3xl rounded-r-none px-3 py-2 ' type="email" placeholder='Your email address' name="" id="" />
                    <button className='font border border-black rounded-3xl rounded-l-none px-3 py-2 hover:bg-black hover:text-white duration-500  '>Subscribe</button>
                </div>

            </div>
        </div>
    )
}
