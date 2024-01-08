import Card from "../components/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useState, useRef} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const cardItems = [
  {id:"1", no: "A.", type: "Monkey Icon", imagePath:"images/bayc-2.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"2", no: "B.", type: "Monkey Icon", imagePath:"images/bayc-3.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"3", no: "C.", type: "Monkey Icon", imagePath:"images/bayc-7.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"4", no: "D.", type: "Monkey Icon", imagePath:"images/bayc-8.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"5", no: "E.", type: "Monkey Icon", imagePath:"images/bayc-2.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"6", no: "F.", type: "Monkey Icon", imagePath:"images/bayc-3.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"7", no: "G.", type: "Monkey Icon", imagePath:"images/bayc-7.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
  {id:"8", no: "H.", type: "Monkey Icon", imagePath:"images/bayc-8.png", remainingTime: "12h:10m:23s", highestBid: "18.87"},
];

const Find = () => {
  return (
    
      <div className="w-full max-w-[100%] flex flex-col items-start gap-[40px] px-[120px] py-0">
        <div className="flex justify-between items-end self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start flex-[0_0_auto]">
            <div className="w-fit [font-family:'Inter-Bold', Helvetica] font-bold text-secondary text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
              Find your
            </div>
            <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[48.0px] whitespace-nowrap">
              Favourite character
            </div>
          </div>

          <div className="flex items-start gap-[10px]">
            <div className="relative items-center justify-center flex gap-[10px]">
              <img className="" alt="Ellipse" src="images/ellipse-15.svg" />
              <img className="absolute top-[15px] left-[17px]" alt="Vector" src="images/vector-left.svg" />
            </div>
            <div className="relative items-center justify-center flex gap-[10px]">
              <img className="" alt="Ellipse" src="images/ellipse-16.svg" />
              <img className="absolute top-[15px] left-[17px]" alt="Vector" src="images/vector-right.svg" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            // breakpoints={{
            //   800: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   1100: {
            //     slidesPerView: 3,
            //     spaceBetween: 30,
            //   },
            //   1500: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
              
            // }}
            modules={[Pagination]}
            className="mySwiper px-[200px]"
          >
            {cardItems.map((item) => {
              return (      
                <SwiperSlide key={item.id}>
                    <Card {...item} className="mx-auto sm:mx-[50px]"/>
                </SwiperSlide>             
              )
            })}
          </Swiper>
        </div>        
      </div>
    
  );
}

export default Find;