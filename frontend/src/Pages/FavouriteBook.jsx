import React from 'react'

import  FavBook  from '../assets/FavBook.png';
import { Link } from 'react-router-dom';



const FavouriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
   <div className='md:w-1/2'>
<img src={FavBook} alt="" className='rounded md:w-10/12'/>
   </div>
   <div className='md:w-1/2 space-y-6'>
    <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
        Find Your Favourite <span className='text-blue-700' >Book here!</span>
    </h2>
    <p className='mb-10 text-lg md:w-5/6'>Indulge in a personalized journey of discovery with our intuitive tools and recommendations.
     Whether it's finding the perfect book, the ideal vacation spot, or the next must-have gadget, we're here to help you uncover 
     what resonates most with you. Embrace the joy of finding your favorites effortlessly. 
    Begin your exploration now!</p>

     {/* stats */}


     <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
      <div>
        <h3 className='text-3xl font-bold'>800+</h3>
        <p className='text-base'>Book Listing</p>
        </div>  
     
     <div>
      <div>
        <h3 className='text-3xl font-bold'>550+</h3>
        <p className='text-base'>Register Users</p>
        </div>  
     </div>
     <div>
      <div>
        <h3 className='text-3xl font-bold'>1100+</h3>
        <p className='text-base'>Pdf Download</p>
        </div>  
     </div>
   </div>

   <Link to='/shop' className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
   hover:bg-black transition-all duration-300'>Explore More</button></Link>
   </div>
    </div>
  )
}

export default FavouriteBook
