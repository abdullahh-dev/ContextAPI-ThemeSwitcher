import React from 'react';
import img from '../assets/airpodsmax.png';
function Card() {
  return (
    <div className="w-full bg-white border border-[hsla(0,0%,100%,.10)] overflow-hidden rounded-lg shadow dark:bg-[#212121] dark:border-[hsla(0,0%,100%,.15)]">
      <div className="dark:bg-white relative flex justify-center group mb-2">
        <img
          className="px-8  z-10 py-3 group-hover:scale-[1.4] transition-all duration-700 group-hover:translate-y-[-50px] brightness-90"
          src={img}
          alt="product_image1"
        />
        <h1 className="absolute group-hover:translate-y-[50px] text-[#212121] dark:text-[#212121] translate-y-[-50px] text-3xl transition-all duration-300 font-bold tracking-wide group-hover:text-6xl">
          AirPods Max
        </h1>
      </div>
      <div className="px-5 pb-4">
        <div className="flex flex-col items-center">
          <h5 className="text-2xl font-medium text-[#212121] dark:text-white">
            Apple AirPods Max
          </h5>
          <div className="flex circles items-center gap-2 mt-2 mb-2">
            <div className="w-6 h-6   rounded-full ">
              <div className=" bg-[#fdfdfd] w-6 h-3 rounded-t-full"></div>
              <div className=" bg-[#bdbdc7] w-6 h-3 rounded-b-full"></div>
            </div>
            <div className="w-6 h-6  rounded-full  ">
              <div className=" bg-[#3c3d3a] w-6 h-3 rounded-t-full"></div>
              <div className=" bg-[#505050] w-6 h-3 rounded-b-full"></div>
            </div>
            <div className="w-6 h-6  rounded-full  ">
              <div className=" bg-[#2f506c] w-6 h-3 rounded-t-full"></div>
              <div className=" bg-[#91a6bb] w-6 h-3 rounded-b-full"></div>
            </div>
            <div className="w-6 h-6  rounded-full  ">
              <div className=" bg-[#e4544d] w-6 h-3 rounded-t-full"></div>
              <div className=" bg-[#d8a097] w-6 h-3 rounded-b-full"></div>
            </div>
            <div className="w-6 h-6  rounded-full  ">
              <div className=" bg-[#d2d3d4] w-6 h-3 rounded-t-full"></div>
              <div className=" bg-[#afbfab] w-6 h-3 rounded-b-full"></div>
            </div>
          </div>
          <h1 className="text-[18px] mb-2 text-[#212121] dark:text-white">
            $599
          </h1>
        </div>
        <div className="flex flex-col">
          <a
            href="/"
            className="text-white bg-[#212121] dark:text-[#212121] dark:bg-gray-100 dark:hover:bg-gray-100/70 transition-all duration-300 hover:bg-[#212121]/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
