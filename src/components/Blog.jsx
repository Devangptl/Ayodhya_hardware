import React from 'react'

export const Blog = () => {
    return (
        <div>

            <div className=' text-center pb-[20px] pt-[40px] '>
                <p className='font text-[25px]'>LATEST FROM BLOG</p>
                <p className=' text-[15px]  italic'>The freshest and most exciting news</p>
            </div>
            <div className=' grid grid-cols-3 gap-[32px] items-center justify-center px-[32px] '>
                <div>
                    <img className='img' src="https://clauem2.arrowtheme.com/media/mgs_blog/image_66_4.png" alt="" />
                    <div>
                        <h1 className=' font-bold '>Your small, calm and organized bedroom</h1>
                        <p className='text-[14px] text-justify'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists...</p>
                    </div>
                </div>

                <div>
                    <img className='img' src="https://clauem2.arrowtheme.com/media/mgs_blog/An_inviting_dining_space_to_connect_with_those_you_love.png" alt="" />
                    <div>
                        <h1 className=' font-bold '>Your small, calm and organized bedroom</h1>
                        <p className='text-[14px] text-justify'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists...</p>
                    </div>
                </div>

                <div>
                    <img className='img' src="https://clauem2.arrowtheme.com/media/mgs_blog/How_to_create_an_inspiring_workspace_at_home.png" alt="" />
                    <div>
                        <h1 className=' font-bold '>Your small, calm and organized bedroom</h1>
                        <p className='text-[14px] text-justify'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists...</p>
                    </div>
                </div>
              
               
               
            </div>
        </div>
    )
}
