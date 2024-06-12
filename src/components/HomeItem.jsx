import React from 'react'
import { Link } from 'react-router-dom'

export const HomeItem = () => {
    return (
        <div className=' px-8 py-8'>
            <div className='  grid grid-cols-2 gap-[32px] h-screen '>
                <div className='  flex items-center justify-center'>
                    <div className='   overflow-hidden h-full w-full '>
                        <img className='h-screen   hover:scale-110 duration-700 ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_47.png" alt="" />
                        <div className=' relative'>

                            <p className=' font absolute -top-[70px] left-[230px] bg-white rounded-2xl  px-7 py-1 hover:bg-[#1e272e] duration-700 hover:text-white cursor-pointer  '>Office</p>

                        </div>
                    </div>
                </div>

                <div className='  grid grid-rows-2 gap-[32px]'>
                    <div className='  '>
                        <div className='   overflow-hidden '>
                            <img className=' h-[304px]  hover:scale-110 duration-700 ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_53_1_.png" alt="" />

                        </div>
                        <div className=' relative'>
                            <p className=' font absolute -top-[70px] left-[230px] bg-white rounded-2xl  px-7 py-1 hover:bg-[#1e272e] duration-700 hover:text-white cursor-pointer '>Living Room</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-2  gap-[32px] '>
                        <div className=' flex items-center justify-center'>
                            <div className='overflow-hidden '>
                                <img className=' h-[304px] w-[270px] hover:scale-110 duration-700  ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_51.png" alt="" />
                            </div>
                            <div className=' relative'>
                                <p className=' font absolute top-[80px] right-[60px] bg-white rounded-2xl  px-7 py-1 hover:bg-[#1e272e] duration-700 hover:text-white cursor-pointer '>BedRoom</p>
                            </div>
                        </div>
                        <div className=' flex items-center justify-center'>
                            <div className='overflow-hidden '>
                                <img className=' h-[304px] w-[270px] hover:scale-110 duration-700  ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_48.png" alt="" />
                            </div>
                            <div className=' relative'>
                                <p className=' font absolute right-[50px] top-[80px]  bg-white rounded-2xl  px-7 py-1 hover:bg-[#1e272e] duration-700 hover:text-white cursor-pointer '>DiningRoom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' py-[32px] grid grid-cols-3 gap-[32px]'>
                <div className='   flex items-center justify-center'>
                    <div className='   overflow-hidden h-full  w-full '>
                        <img className='  h-full  hover:scale-110 duration-700 ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_54.png" alt="" />
                        <div className=' relative -top-[160px] left-[20px]'>
                            <div className='absolute'>

                                <p className=' font   '>GET UP TO 50% OFF</p>
                                <p className='font  font-bold text-[30px] '>LOOKBOOK 2023</p>
                                <p className=' font text-[#4b4b4b] text-[14px]'>your world of fashion in numbers</p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='  flex items-center justify-center'>
                    <div className=' group   overflow-hidden h-full w-full '>
                        <img className=' group-hover:brightness-90 h-full group-hover:scale-110  duration-1000 ' src="https://clauem2.arrowtheme.com/media/catalog/product/cache/de6bec506494940b8fbc8b6822d59d20/t/h/the_ch327_dining_table-4.png" alt="" />
                        <div className=' group-hover:flex hidden relative  -top-[70px] left-[20px]'>
                            <div className='absolute duration-700   '>

                                <p className=' font   '>The CH327 dining table</p>
                                <p className=' font text-[#ea4545] text-[14px]  '> <span className='underline-offset-4  line-through text-[#8d8d8d]'>₹12999</span> ₹9999</p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className='  flex items-center justify-center'>
                    <div className=' group  overflow-hidden h-full w-full '>
                        <img className=' h-full  group-hover:scale-110 duration-700 ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/b/a/banner_sale_fnt_1.jpg" alt="" />
                        <div className=' relative -top-[190px] left-[20px]'>
                            <div className='absolute'>

                                <p className=' font   '>LAMP COLLECTIONS</p>
                                <p className='font1  font-bold text-[50px] '>UP TO 70%</p>
                                <Link to={"/"} className=' font border-2 border-black hover:bg-black hover:text-white duration-700 text-center px-6 py-1 rounded-2xl    text-[14px]'>Shop Now</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
