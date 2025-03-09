import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import { Outlet, useLoaderData } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ExtraSection from '../../components/ExtrtaSection/ExtraSection';
import Leader from '../../components/Leader/Leader';

const HomePage = () => {
  const reviews = useLoaderData();
    return (
        <div>
          {/*  slider */}
          <div>
          <Slider></Slider>
          </div>
         {/* review card */}
         <div className='my-10 w-11/12 mx-auto'>
         
         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
         {
         reviews.map(review=><ReviewCard review={review} key={review._id}></ReviewCard>)
         }
         </div>
      
           {/* extra section  */}
           <ExtraSection></ExtraSection>
         </div>
         <div className='w-11/12 mx-auto'>
          <Leader></Leader>
         </div>
        </div>
    );
};

export default HomePage;