import React from "react";
import styled from "styled-components";
import SwiperCore from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]);

interface CarouselProps {
  items: string[];
}

const Container = styled.div`
  background: #fff;
  position: relative;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 50px;
  overflow: hidden;
  box-sizing: border-box;

  .swiper-slide {
    background-color: #fbfefd;
    filter: blur(4px);
    background-position: center;
    background-size: cover;
    height: 400px;
    width: 320px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    filter: blur(2px);
  }

  .swiper-slide-active {
    filter: blur(0px);
    background-color: #fff;
  }

  .swiper-pagination {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: white;
    border: 2px solid #5ae4a7;
    width: 12px;
    height: 12px;
    margin: 0 8px;
    flex-shrink: 0;
  }

  .swiper-pagination-bullet-active {
    background-color: #5ae4a7;
  }

  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;
  }
`;

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Container>
      <StyledSwiper
        effect={"coverflow"}
        coverflowEffect={{
          slideShadows: false,
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        slidesPerView={"auto"}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        grabCursor={true}
        centeredSlides={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

export default Carousel;
