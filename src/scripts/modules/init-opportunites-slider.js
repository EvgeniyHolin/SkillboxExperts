import Swiper from "swiper";
import {Navigation} from 'swiper/modules';

const opportunitesSlider = document.querySelector('.opportunities__swiper');

const windowWidth = window.innerWidth;
const slideWidth = 420;
const spaceBetween = 9;
const containerOffset = 40;

function calculateSlidesPerView(screenWidth, slideWidth, spaceBetween, containerOffset) {
    const containerWidth = screenWidth - containerOffset;
    const totalAvailableWidth = containerWidth + spaceBetween;

    return parseFloat((totalAvailableWidth / (slideWidth + spaceBetween)).toFixed(2));
}

let slidesPerView = calculateSlidesPerView(windowWidth, slideWidth, spaceBetween, containerOffset);

export function initOpportunitesSlider() {
    if (!opportunitesSlider) {
        return
    }

    const opportunitesSliderBtnPrev = document.querySelector('.opportunities__swiper-btn--prev');
    const opportunitesSliderBtnNext = document.querySelector('.opportunities__swiper-btn--next');
    const opportunitesSwiper = new Swiper(opportunitesSlider, {
        modules: [Navigation],
        centeredSlides: true,
        speed: 500,
        loop: true,
        allowTouchMove: true,
        watchOverflow: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            390: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
            768: {
                spaceBetween: spaceBetween,
                slidesPerView: 'auto',
            },
            1024: {
                spaceBetween: spaceBetween,
                slidesPerView: slidesPerView,
            },
        },
        navigation: {
            nextEl: opportunitesSliderBtnNext,
            prevEl: opportunitesSliderBtnPrev,
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
            return
        }

        slidesPerView = calculateSlidesPerView(window.innerWidth, 420, 9, 40);
        opportunitesSwiper.params.slidesPerView = slidesPerView;
        opportunitesSwiper.update();
    });
}