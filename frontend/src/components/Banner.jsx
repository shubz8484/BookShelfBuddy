import React from 'react'
import BannerCard from '../Pages/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-yellow-200 flex item-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
       
       
       
        {/* leftside */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books
            <span className='text-blue-700'>For The Best Price</span>
            </h2>
        <p className='md:w-4/5'>Words are the building blocks of worlds, 
        and in the vast library of human imagination, every page is a 
        portal to new adventures. Welcome to our book haven, where each 
        story is a treasure waiting to be discovered, and every reader is an intrepid explorer. 
        Lose yourself in the magic of prose, where the only limit is your own imagination. 
        Step into our world of wonder and let the journey begin.</p>
       {/* <div>
        <input type="search" name="search" id="search" placeholder="Search a Book" className='py-2 px-2 round-s-sm outline-none' />
        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
        transtion-all ease-in duration-200'>Search</button>
       </div> */}
        </div>                                                                                                                  




        {/* rightside */}
        <div>
<BannerCard/>
        </div>
    </div>
    </div>
  )
}

export default Banner
