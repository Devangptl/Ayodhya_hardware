import React from 'react'
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <div>
        <div className=' text-white'>
            <div  className=" bg-cover bg-no-repeat  h-screen bg-[url('https://clauem2.arrowtheme.com/media/wysiwyg/slider/image_64.png')]">
                
            <div className=' flex flex-col gap-2 items-center justify-center h-screen  '>
                <p className='logoFont tracking-[6px] text-[20px]'>Spring - Summer 2024</p>
                <h1 className='font1 tracking-[4px] text-[50px] font-extrabold'>BEST OF COLLECTION</h1>
                <p className=' logoFont text-[15px] tracking-[2px]  w-[50%] text-center'>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident</p>
                <Link to={""} className=' mt-3 font border px-3 py-1 hover:border-white hover:bg-[#1e272e] duration-700'>Shop Now</Link>
            </div>
            </div>

        </div>

        
    </div>
  )
}
