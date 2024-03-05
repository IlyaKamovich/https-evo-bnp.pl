import { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
import MainInfo from './components/info/MainInfo';
import SliderButton from './components/slider/slider-button/SliderButton';
import ByuWithDiscount from '../shared/byu-with-discount/ByuWithDiscount';
import { imageData } from '../../constants/image-data';
import { SwiperRef } from '../../types/swiper';
import { Characteristics } from './components/characteristics';
import 'swiper/css';
import './main-section.scss';

const SWIPER_PARAMS = {
  class: 'swiper sw',
};

const MainSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperRef | null>(null);
  const discount = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    register();
    swiperRef.current?.swiper?.init();
    swiperRef.current?.swiper.on('slideChange', (swiper: Swiper) => {
      setActiveIndex(swiper.activeIndex);
    });
    return () => {
      swiperRef.current?.swiper.off('slideChange');
    };
  }, []);

  const nextSlide = () => swiperRef.current?.swiper.slideNext();
  const prevSlide = () => swiperRef.current?.swiper?.slidePrev();

  return (
    <section className="main">
      <div className="container">
        <div className="main-images">
          <swiper-container ref={swiperRef} {...SWIPER_PARAMS}>
            {Object.entries(imageData).map(([key, src]) => (
              <swiper-slide key={key}>
                <img src={src} alt="обувь" />
              </swiper-slide>
            ))}
          </swiper-container>
          <SliderButton rotate show={activeIndex > 0} onClick={prevSlide} />
          <SliderButton show={activeIndex + 1 < Object.entries(imageData).length} onClick={nextSlide} />
        </div>
        <div className="main-filters">
          <MainInfo />
          <Characteristics />
          <div ref={discount} className="discount-wrapper">
            <ByuWithDiscount />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
