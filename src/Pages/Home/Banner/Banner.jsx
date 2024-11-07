// image banner
import banner1 from '../../../assets/banner/banner1.jpg';
import banner2 from '../../../assets/banner/banner2.jpg';
import banner3 from '../../../assets/banner/banner3.jpg';
import banner4 from '../../../assets/banner/banner4.jpg';
import banner5 from '../../../assets/banner/banner5.jpg';



import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="relative">
          <img src={banner1} alt="" />
          <div className="absolute top-0 left-0 lg:pl-28 md:pl-14 pl-8 pr-2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] text-white flex items-center">
            <div className="lg:space-y-7 space-y-1" >
            <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
            Learn, Share, Succeed with Study Buddies
            </h1>
            <p>
            <q>Unlock the power of collaboration with Study Buddies, your ultimate online study platform. Connect with peers from around the globe, share knowledge, and achieve academic excellence together. Our platform is designed to make learning interactive and fun.</q>
            </p>
            <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white ">
              Sign Up for Free
              </button>
            </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative">
          <img src={banner2} alt="" />
          <div className="absolute top-0 left-0 lg:pl-28 md:pl-14 pl-8 pr-2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] text-white flex items-center">
            <div className="lg:space-y-7 space-y-1" >
            <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
            Learn, Share, Succeed with Study Buddies
            </h1>
            <p>
            <q>Unlock the power of collaboration with Study Buddies, your ultimate online study platform. Connect with peers from around the globe, share knowledge, and achieve academic excellence together. Our platform is designed to make learning interactive and fun.</q>
            </p>
            <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white ">
              Sign Up for Free
              </button>
            </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative">
          <img src={banner3} alt="" />
          <div className="absolute top-0 left-0 lg:pl-28 md:pl-14 pl-8 pr-2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] text-white flex items-center">
            <div className="lg:space-y-7 space-y-1" >
            <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
            Learn, Share, Succeed with Study Buddies
            </h1>
            <p>
            <q>Unlock the power of collaboration with Study Buddies, your ultimate online study platform. Connect with peers from around the globe, share knowledge, and achieve academic excellence together. Our platform is designed to make learning interactive and fun.</q>
            </p>
            <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white ">
              Sign Up for Free
              </button>
            </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative">
          <img src={banner4} alt="" />
          <div className="absolute top-0 left-0 lg:pl-28 md:pl-14 pl-8 pr-2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] text-white flex items-center">
            <div className="lg:space-y-7 space-y-1" >
            <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
            Learn, Share, Succeed with Study Buddies
            </h1>
            <p>
            <q>Unlock the power of collaboration with Study Buddies, your ultimate online study platform. Connect with peers from around the globe, share knowledge, and achieve academic excellence together. Our platform is designed to make learning interactive and fun.</q>
            </p>
            <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white ">
              Sign Up for Free
              </button>
            </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative">
          <img src={banner5} alt="" />
          <div className="absolute top-0 left-0 lg:pl-28 md:pl-14 pl-8 pr-2 lg:w-1/2 md:w-1/2 sm:w-2/3 w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] text-white flex items-center">
            <div className="lg:space-y-7 space-y-1" >
            <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
            Learn, Share, Succeed with Study Buddies
            </h1>
            <p>
            <q>Unlock the power of collaboration with Study Buddies, your ultimate online study platform. Connect with peers from around the globe, share knowledge, and achieve academic excellence together. Our platform is designed to make learning interactive and fun.</q>
            </p>
            <div className="flex space-x-3">
              <button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white ">
              Sign Up for Free
              </button>
            </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
        
        
      </Swiper>
            
        </div>
    );
};

export default Banner;