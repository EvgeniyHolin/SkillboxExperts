import Swiper from "swiper";
import { Navigation } from 'swiper/modules';

const expertsSlider = document.querySelector('.experts__swiper');
const expertsBtnNext = document.querySelector('.experts__button-next');
const expertsBtnPrev = document.querySelector('.experts__button-prev');

function initExpertsSlider() {
  if (!expertsSlider) {
    return;
  };

  new Swiper(expertsSlider, {
    modules: [Navigation],
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 8,
    watchOverflow: true,
    allowTouchMove: true,
    navigation: {
      nextEl: expertsBtnNext,
      prevEl: expertsBtnPrev,
    },
    breakpoints: {
      670: {
        spaceBetween: 24,
      }
    },
    on: {
      init: function (swiper) {
        const activeIndex = swiper.activeIndex;
        const slides = swiper.slides;
        const disabledSlides = slides.filter(item => item !== slides[activeIndex]);
        disabledSlides.forEach(disabledSlide => {
          const disabledLinks = disabledSlide.querySelectorAll('a');
          if (disabledLinks) {
            disabledLinks.forEach(link => {
              link.setAttribute('tabindex', '-1');
            });
          }
        });
      },
      slideChange: function (swiper) {
        const prevIndex = swiper.previousIndex;
        const activeIndex = swiper.activeIndex;
        const slides = swiper.slides;
        const activeLinks = slides[activeIndex].querySelectorAll('a');
        const disabledLinks = slides[prevIndex].querySelectorAll('a');

        disabledLinks.forEach(link => {
          link.setAttribute('tabindex', '-1');
        });

        activeLinks.forEach(link => {
          link.setAttribute('tabindex', '0');
        });
      }
    }
  });

}

export { initExpertsSlider };
