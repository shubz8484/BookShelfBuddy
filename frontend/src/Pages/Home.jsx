import React from 'react'
import Banner from './../components/Banner';
import BestSellerBooks from './BestSellerBook';
import FavouriteBook from './FavouriteBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';


const Home = () => {
  return (
  <div>
    <Banner/>
    <BestSellerBooks/>
   <FavouriteBook/>
   <PromoBanner/>
   <OtherBooks/>
   <Review/>
  </div>
  )
}

export default Home
