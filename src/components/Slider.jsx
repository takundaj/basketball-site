// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, fadeEffect } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//images
import SlideOne from '../images/slide1.png'
import SlideTwo from '../images/slide2.png'
import SlideThree from '../images/slide3.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="slider"
      autoplay={{enabled: true, delay: 3000}}
      loop={{infinite:true}}
      fadeEffect
      speed={2500}

    >
      <SwiperSlide>
        <img className='slide-image' src={SlideOne} alt="" />
        <div className='slider-title'>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nesciunt adipisci nulla porro illo quas dicta nobis voluptatum ullam eum?</p>
          <button>Shop now</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className='slide-image' src={SlideTwo} alt="" />
        <div className='slider-title'>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nesciunt adipisci nulla porro illo quas dicta nobis voluptatum ullam eum?</p>
          <button>Shop now</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className='slide-image' src={SlideThree} alt="" />
        <div className='slider-title'>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nesciunt adipisci nulla porro illo quas dicta nobis voluptatum ullam eum?</p>
          <button>Shop now</button>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};