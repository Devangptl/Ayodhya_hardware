import React from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

export const Treding = () => {
    return (
        <div className=' px-8 '>

            <div className=' text-center '>
                <p className='font text-[25px]'>TRENDING PRODUCTS</p>
                <p className='  italic'>Top view in the week</p>
            </div>

            <div>
                <div className=" grid md:grid-cols-4 grid-cols-2   gap-[32px] ">

                    <div className=" group flex gap-2 flex-col  ">
                        <div className=" relative">
                            <p className=" group-hover:hidden flex items-center justify-center absolute  bg-[#db4444] top-6 left-2 text-[10px] md:text-[12px] w-[60px] text-center  z-10 font-semibold text-white    ">
                                - {20} %
                            </p>
                        </div>

                        <div className=" relative">
                            <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-5 -z-10 flex flex-col">
                                <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <GoHeart />
                                </Link>
                                <Link
                                    to={`/`}
                                    className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <IoEyeOutline />
                                </Link>
                            </div>
                        </div>

                        <div className=" group-hover:brightness-90 duration-500  h-[100%] w-[100%] relative overflow-hidden bg-gray-100   " >

                            <Link to={`/`}>
                                <img
                                    // width={300}
                                    className="  w-[150px] md:w-[300px]  py-4 px-5 hover:scale-125 duration-1000  "
                                    src={"https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/f/r/frame_1.png"}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className='  relative  -top-[70px] w-full  '>
                            <div className='   absolute duration-700 w-full   '>

                                <Link to={"/"} className='group-hover:flex items-center text-[14px] mx-16 rounded-2xl py-1   justify-center bg-white text-black hover:bg-black hover:text-white  duration-500 hover:border-black border  hidden font    '>Add To Cart</Link>
                            </div>


                        </div>


                    </div>
                    <div className=" group flex gap-2 flex-col  ">
                        <div className=" relative">
                            <p className=" group-hover:hidden flex items-center justify-center absolute  bg-[#db4444] top-6 left-2 text-[10px] md:text-[12px] w-[60px] text-center  z-10 font-semibold text-white    ">
                                - {20} %
                            </p>
                        </div>

                        <div className=" relative">
                            <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-5 -z-10 flex flex-col">
                                <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <GoHeart />
                                </Link>
                                <Link
                                    to={`/`}
                                    className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <IoEyeOutline />
                                </Link>
                            </div>
                        </div>

                        <div className=" group-hover:brightness-90 duration-500  h-[100%] w-[100%] relative overflow-hidden bg-gray-100   " >

                            <Link to={`/`}>
                                <img
                                    // width={300}
                                    className="  w-[150px] md:w-[300px]  py-4 px-5 hover:scale-125 duration-1000  "
                                    src={"https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/t/h/the_pk61_coffee_table-2.png"}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className='  relative  -top-[70px] w-full  '>
                            <div className='   absolute duration-700 w-full   '>

                                <Link to={"/"} className='group-hover:flex items-center text-[14px] mx-16 rounded-2xl py-1   justify-center bg-white text-black hover:bg-black hover:text-white  duration-500 hover:border-black border  hidden font    '>Add To Cart</Link>
                            </div>


                        </div>


                    </div>
                    <div className=" group flex gap-2 flex-col  ">
                        <div className=" relative">
                            <p className=" group-hover:hidden flex items-center justify-center absolute  bg-[#db4444] top-6 left-2 text-[10px] md:text-[12px] w-[60px] text-center  z-10 font-semibold text-white    ">
                                - {20} %
                            </p>
                        </div>

                        <div className=" relative">
                            <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-5 -z-10 flex flex-col">
                                <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <GoHeart />
                                </Link>
                                <Link
                                    to={`/`}
                                    className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <IoEyeOutline />
                                </Link>
                            </div>
                        </div>

                        <div className=" group-hover:brightness-90 duration-500  h-[100%] w-[100%] relative overflow-hidden bg-gray-100   " >

                            <Link to={`/`}>
                                <img
                                    // width={300}
                                    className="  w-[150px] md:w-[300px]  py-4 px-5 hover:scale-125 duration-1000  "
                                    src={"https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/a/l/allegory_desk_1.jpg"}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className='  relative  -top-[70px] w-full  '>
                            <div className='   absolute duration-700 w-full   '>

                                <Link to={"/"} className='group-hover:flex text-[14px] items-center mx-16 rounded-2xl py-1   justify-center bg-white text-black hover:bg-black hover:text-white  duration-500 hover:border-black border  hidden font    '>Add To Cart</Link>
                            </div>


                        </div>


                    </div>
                    <div className=" group flex gap-2 flex-col  ">
                        <div className=" relative">
                            <p className=" group-hover:hidden flex items-center justify-center absolute  bg-[#db4444] top-6 left-2 text-[10px] md:text-[12px] w-[60px] text-center  z-10 font-semibold text-white    ">
                                - {20} %
                            </p>
                        </div>

                        <div className=" relative">
                            <div className=" group-hover:z-10 duration-900 text-[15px] gap-2  absolute right-2 top-5 -z-10 flex flex-col">
                                <Link className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <GoHeart />
                                </Link>
                                <Link
                                    to={`/`}
                                    className=" hover:bg-[#db4444] duration-300 hover:text-white bg-white rounded-full p-2">
                                    <IoEyeOutline />
                                </Link>
                            </div>
                        </div>

                        <div className=" group-hover:brightness-90 duration-500  h-[100%] w-[100%] relative overflow-hidden bg-gray-100   " >

                            <Link to={`/`}>
                                <img
                                    // width={300}
                                    className="  w-[150px] md:w-[300px]  py-4 px-5 hover:scale-125 duration-1000  "
                                    src={"https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/h/b/hb_lounge_chair_-_leather-2.png"}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className='  relative  -top-[70px] w-full  '>
                            <div className='   absolute duration-700 w-full   '>

                                <Link to={"/"} className='group-hover:flex text-[14px] items-center mx-16 rounded-2xl py-1   justify-center bg-white text-black hover:bg-black hover:text-white  duration-500 hover:border-black border  hidden font    '>Add To Cart</Link>
                            </div>


                        </div>


                    </div>


                </div>

            </div>
        </div>


    )
}
