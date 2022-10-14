import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

const Slider = (props) => {
  return (
    <Swiper
    breakpoints={{
    // when window width is >= 640px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    600:{
      slidesPerView: 1,
      spaceBetween: 20
    },
    1200: {
      slidesPerView:3,
      spaceBetween: 40
    }
    }}

    modules={[Navigation,Autoplay]}
    navigation
    spaceBetween = {1}
    centeredSlides={true}
    grabCursor={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction:false
    }}
  >
    {props.children}
   
  </Swiper>
  )
}

export default Slider