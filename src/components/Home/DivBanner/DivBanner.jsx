
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

import banner1 from '../../../assets/banner/banner-1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'

const DivBanner = () => {
    return (
       <div >
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
        
    );
};

export default DivBanner;



{/* <Parallax  className=' h-[660px]'
        bgImage={banner3}
        bgImageAlt="the story"
        strength={-200}>
    <div>
    <div className=" ml-40 mt-32">
      <h1 className="mb-5 text-5xl font-bold">Prepare for anything <br /> with ERP</h1>
      
      <p className="mb-5">Whether adopting your first ERP or migrating from an <br /> existing one, choose a  complete, modular solution that <br /> meets every business need.</p>
      <br />
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
    <div style={{ height: '500px' }} />
</Parallax> */}