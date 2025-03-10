import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import { Outlet, useLoaderData } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ExtraSection from '../../components/ExtrtaSection/ExtraSection';
import Leader from '../../components/Leader/Leader';
import { Fade, Slide } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const reviews = useLoaderData();
    return (
        <div>
          <Helmet><title> Chill Gamer || Home</title></Helmet>
          {/*  slider */}
          <div>
          <Slider></Slider>
          </div>
         {/* review card */}
         <div className='my-10 w-11/12 mx-auto'>
         
         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <Slide>
          {
         reviews.map(review=><ReviewCard review={review} key={review._id}></ReviewCard>)
         }
          </Slide>
      
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