import Card from "../components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cardItems = [
  {
    id: "1",
    no: "A.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0724.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "2",
    no: "B.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0725.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "3",
    no: "C.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0726.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "4",
    no: "D.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0727.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "5",
    no: "E.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0724.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "6",
    no: "F.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0725.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "7",
    no: "G.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0727.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "8",
    no: "H.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0726.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "9",
    no: "A.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0724.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "10",
    no: "B.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0725.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "11",
    no: "C.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0726.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "12",
    no: "D.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0727.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "13",
    no: "E.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0724.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "14",
    no: "F.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0725.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "15",
    no: "G.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0727.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "16",
    no: "H.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0726.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "18",
    no: "A.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0724.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "19",
    no: "B.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0725.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "20",
    no: "C.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0726.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "21",
    no: "D.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0727.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "22",
    no: "E.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0724.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "23",
    no: "F.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0725.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "24",
    no: "G.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0727.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
  {
    id: "25",
    no: "H.",
    type: "Monkey Icon",
    imagePath: "images/IMG_0726.jpg",
    remainingTime: "12h:10m:23s",
    highestBid: "18.87",
  },
];

const Find = () => {
  return (
    <div id="character" className="w-full max-w-[1300px] flex flex-col items-center gap-[40px] px-4 py-0">
      <div className="flex justify-between items-end self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start flex-[0_0_auto]">
          <div className="w-fit [font-family:'Inter-Bold', Helvetica] font-bold text-secondary text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
            Find your
          </div>
          <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[48.0px] whitespace-nowrap">
            Favourite character
          </div>
        </div>

        <div className="hidden sm:flex items-start gap-[10px]">
          <div className="relative items-center justify-center flex gap-[10px]">
            <img className="" alt="Ellipse" src="images/ellipse-15.svg" />
            <img
              className="absolute top-[15px] left-[17px]"
              alt="Vector"
              src="images/vector-left.svg"
            />
          </div>
          <div className="relative items-center justify-center flex gap-[10px]">
            <img className="" alt="Ellipse" src="images/ellipse-16.svg" />
            <img
              className="absolute top-[15px] left-[17px]"
              alt="Vector"
              src="images/vector-right.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mx-auto"
        >
          {cardItems.map((item) => {
            return (
              <SwiperSlide key={item.id} className="flex justify-center items-center">
                <Card {...item}/>
                {/* slide1 */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
