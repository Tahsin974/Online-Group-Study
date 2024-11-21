// image banner
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";

import banner4 from "../../../assets/banner/banner4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination} from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-w-screen ">
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
        
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={banner1} alt="" />
            <div className="absolute top-0 left-0  px-4  w-full h-full bg-black bg-opacity-65  flex items-center text-center justify-center">
              <div className="lg:space-y-7 space-y-2 text-white lg:w-3/4">
                <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
                  Learn, Share, Succeed with Study Buddies
                </h1>
                <p>
                  <q>
                    Unlock the power of collaboration with Study Buddies.
                    Connect with peers from around the globe, share
                    knowledge.Our platform is designed to make learning
                    interactive and fun.
                  </q>
                </p>
                <div className="flex justify-center">
                  <Link to="/login"><button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white lg:mt-10 md:my-10">
                    Sign Up for Free
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={banner2} alt="" />
            <div className="absolute top-0 left-0  px-4  w-full h-full bg-black bg-opacity-65  flex items-center text-center justify-center">
              <div className="lg:space-y-7 space-y-2 text-white lg:w-3/4">
                <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
                  Learn, Share, Succeed with Study Buddies
                </h1>
                <p>
                  <q>
                    Unlock the power of collaboration with Study Buddies.
                    Connect with peers from around the globe, share
                    knowledge.Our platform is designed to make learning
                    interactive and fun.
                  </q>
                </p>
                <div className="flex justify-center">
                  <Link to="/login"><button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white lg:mt-10 md:my-10">
                    Sign Up for Free
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={banner3} alt="" />
            <div className="absolute top-0 left-0  px-4  w-full h-full bg-black bg-opacity-65  flex items-center text-center justify-center">
              <div className="lg:space-y-7 space-y-2 text-white lg:w-3/4">
                <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
                  Learn, Share, Succeed with Study Buddies
                </h1>
                <p>
                  <q>
                    Unlock the power of collaboration with Study Buddies.
                    Connect with peers from around the globe, share
                    knowledge.Our platform is designed to make learning
                    interactive and fun.
                  </q>
                </p>
                <div className="flex justify-center">
                  <Link to="/login"><button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white lg:mt-10 md:my-10">
                    Sign Up for Free
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img src={banner4} alt="" />
            <div className="absolute top-0 left-0  px-4  w-full h-full bg-black bg-opacity-65  flex items-center text-center justify-center">
              <div className="lg:space-y-7 space-y-2 text-white lg:w-3/4">
                <h1 className=" lg:text-5xl md:text-3xl text-lg font-bold">
                  Learn, Share, Succeed with Study Buddies
                </h1>
                <p>
                  <q>
                    Unlock the power of collaboration with Study Buddies.
                    Connect with peers from around the globe, share
                    knowledge.Our platform is designed to make learning
                    interactive and fun.
                  </q>
                </p>
                <div className="flex justify-center">
                  <Link to="/login"><button className="btn lg:btn-md md:btn-md btn-sm btn-outline  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-cyan-400  hover:text-white lg:mt-10 md:my-10">
                    Sign Up for Free
                  </button></Link>
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
