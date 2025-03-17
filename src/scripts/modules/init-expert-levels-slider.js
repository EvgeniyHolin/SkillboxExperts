import Swiper from "swiper";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const expertLevelsSwiper = new Swiper('.expert-levels-card__swiper', {
    modules: [Pagination, Autoplay, EffectFade],
    allowTouchMove: true,
    effect: 'fade',
    init: false,
    speed: 800,
    breakpoints: {
        1024: {
            allowTouchMove: false,
        }
    },
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.expert-levels-card__bullets',
        clickable: true,
        bulletClass: 'expert-levels-card__bullet',
        bulletActiveClass: 'expert-levels-card__bullet--active',
        renderBullet: function (index, className) {
            return `<button class="${className}" type="button" aria-label="Выбрать фотографию"></button>`;
        },
    },
    on: {
        init: function () {
        this.pagination.bullets.map(bullet => {
                bullet.style.setProperty("--progress", 0);
            });
        },
        autoplayTimeLeft(s, time, progress) {
            const currentBullet = s.pagination.bullets[s.realIndex];
            currentBullet.style.setProperty("--progress", 1 - progress);
        },
        slideChange: function() {
            const swiper = this;
            const currentIndex = swiper.realIndex;
            const bullets = swiper.pagination.bullets;

            bullets.slice(currentIndex).map(bullet => {
                bullet.style.setProperty("--progress", 0);
            });

            bullets.slice(0, currentIndex).map(bullet => {
                bullet.style.setProperty("--progress", 1);
            });
        }
    }
});

const expertLevelsCards = document.querySelectorAll('.expert-levels-card');

function updateAutoplay() {
    expertLevelsCards.forEach((el, index) => {
        const autoplayEnabled = el.classList.contains('is-active');

        if (autoplayEnabled) {
            if (!expertLevelsSwiper[index].initialized) {
                expertLevelsSwiper[index].init();
                return
            }
            expertLevelsSwiper[index].autoplay.start();
        } else if (expertLevelsSwiper[index].initialized) {
            expertLevelsSwiper[index].autoplay.stop();
        }
    });
}

const observer = new MutationObserver(() => {
  updateAutoplay();
  ScrollTrigger.refresh();
});

expertLevelsCards.forEach(card => {
    observer.observe(card, { attributes: true });
});

export function initExpertLevelsSlider() {
    updateAutoplay();
}
