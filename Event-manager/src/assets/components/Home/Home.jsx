import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



function Home() {
  return (
    <div className="w-full flex flex-col items-center mt-20 text-center">
      <h1 className="text-6xl font-bold text-blue-900">What's Happening Today<span className="text-blue-400">?</span>!</h1>
      <p className="text-2xl text-blue-700 p-5">
        Explore Events, News, Updates and more... <br />
        Don’t miss out the Funn!!
      </p>

      
    </div>

    /*swiper cards for contents*/
    
   
  );
}

export default Home;
