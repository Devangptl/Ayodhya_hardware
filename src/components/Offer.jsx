import React from 'react'

export const Offer = () => {
    return (
        <div className=' px-8 py-8'>
            <div className=' grid grid-cols-2 gap-[32px]'>

                <div className='  '>
                    <div className='   overflow-hidden '>
                        <img className=' h-[304px]  ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_70_1_.png" alt="" />

                    </div>
                    <div className=' relative'>
                        <div className=' font absolute -top-[150px] left-[200px]  text-white  '>
                            <div className=' text-center '>
                                <p className='font text-[20px] font-bold'>LOOKBOOK 2023</p>
                                <p className='  text-[12px] italic'>Make love this look</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='  '>
                    <div className='   overflow-hidden '>
                        <img className=' h-[304px]  ' src="https://clauem2.arrowtheme.com/media/mgs/fbuilder/promobanners/i/m/image_69_1__1.png" alt="" />

                    </div>
                    <div className=' relative'>
                        <div className=' relative'>
                            <div className=' font absolute -top-[150px] left-[200px]  text-white  '>
                                <div className=' text-center '>
                                    <p className='font text-[20px] font-bold'>SUMMER SALE</p>
                                    <p className='  text-[12px] italic'>UP TO 70%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
