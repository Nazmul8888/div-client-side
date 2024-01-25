
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';


// import { Pagination } from 'swiper/modules';

// import banner1 from '../../../assets/banner/79731568097599.5b50bca477735.jpg'
// // import banner4 from '../../../assets/banner/5152885.jpg'

const DivBanner = () => {
    return (
       <div className='  py-10' >
        {/* <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={banner4} alt="" /></SwiperSlide> */}
       
        
      {/* </Swiper> */}


{/* second option */}


<div className="hero min-h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/hyLRrSq/ai-site-helping-with-software-production.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-[#FE7A36]">Your Vision, Our Code</h1>
      <p className="mb-5  text-2xl text-white">Divine Innovations, Limitless Solutions</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


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