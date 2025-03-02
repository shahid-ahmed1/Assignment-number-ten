import React from 'react';
import slider1 from '../Header/assets/slider-5.avif'
import slider2 from '../Header/assets/slider-6.avif'
import slider3 from '../Header/assets/slider-4.avif'
import slider4 from '../Header/assets/slider-2.jpeg'
const Slider = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
        <div className="carousel  ">
<div id="slide1" className="carousel-item relative w-[100%] h-[500px]">
 <img
   src={slider1}
   class="w-full rounded-xl" />
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
   <a href="#slide4" className="btn btn-circle">❮</a>
   <a href="#slide2" className="btn btn-circle">❯</a>
 </div>
</div>
<div id="slide2" className="carousel-item relative w-[100%] h-[500px]">
 <img
   src={slider2}
   class="w-full rounded-xl" />
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
   <a href="#slide1" className="btn btn-circle">❮</a>
   <a href="#slide3" className="btn btn-circle">❯</a>
 </div>
</div>
<div id="slide3" className="carousel-item relative w-[100%] h-[500px]">
 <img
   src={slider3}
   class="w-full rounded-xl" />
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
   <a href="#slide2" className="btn btn-circle">❮</a>
   <a href="#slide4" className="btn btn-circle">❯</a>
 </div>
</div>
<div id="slide4" className="carousel-item relative w-[100%] h-[500px]">
 <img
   src={slider4}
   class="w-full rounded-xl" />
 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
   <a href="#slide3" className="btn btn-circle">❮</a>
   <a href="#slide1" className="btn btn-circle">❯</a>
 </div>
</div>
</div>
     </div>
 );
};
   

export default Slider;