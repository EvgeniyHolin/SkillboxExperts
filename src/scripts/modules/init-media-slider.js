import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

const mediaSliderEls = document.querySelectorAll('.media__swiper');
const swiperInstances = [];
const currentSlideIdxs = [];

const initMediaSwiper = (idx) => {
  if (!mediaSliderEls) {
    return;
  }

  const nextBtn = mediaSliderEls[idx].querySelector('.media__button-next');
  const prevBtn = mediaSliderEls[idx].querySelector('.media__button-prev');

  if (swiperInstances[idx]) {
    swiperInstances[idx].destroy();
  }

  const swiper = new Swiper(mediaSliderEls[idx], {
    modules: [Navigation],
    slidesPerView: 'auto',
    allowTouchMove: true,
    breakpoints: {
      1024: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1280: {
        spaceBetween: 20,
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    }
  })

  swiperInstances[idx] = swiper;

  if (currentSlideIdxs[idx] !== undefined) {
    swiper.slideTo(currentSlideIdxs[idx], 0);
  }

  swiper.on('slideChange', () => {
    currentSlideIdxs[idx] = swiper.activeIndex;
  });
}

const tabInnerEls = document.querySelectorAll('.media__tab-inner');

const updateSwiper = () => {
  tabInnerEls.forEach((el, index) => {
    const initSwiperEnabled = el.classList.contains('is-active');
    if (initSwiperEnabled) {
      initMediaSwiper(index);
    } else {
      if (swiperInstances[index]) {
        setTimeout(() => {
          if (swiperInstances[index]) {
            swiperInstances[index].destroy();
            swiperInstances[index] = null;
          }
        }, 300);
      }
  }
  });
  ScrollTrigger.refresh();
}

const observer = new MutationObserver(() => {
  updateSwiper();
});

tabInnerEls.forEach(el => {
  observer.observe(el, { attributes: true });
});


export const mediaSlider = () => {
  updateSwiper();
}
