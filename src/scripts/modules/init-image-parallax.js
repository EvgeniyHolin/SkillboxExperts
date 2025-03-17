import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const parallaxItems = document.querySelectorAll("[data-parallax-mouse]");

let mouseCords = {
  x: 0,
  y: 0
};

const handleMouseMove = (e) => {
  mouseCords.x = e.clientX - window.innerWidth / 2;
  mouseCords.y = e.clientY - window.innerHeight / 2;
};

const updateParallax = (item) => {
  if (ScrollTrigger.isInViewport(item)) {
    const movement = item.dataset.movement ? item.dataset.movement : 1;
    const directionX = item.dataset.directionX ? item.dataset.directionX : 1;
    const directionY = item.dataset.directionY ? item.dataset.directionY : 1;

    gsap.to(item, {
      x: (mouseCords.x / movement / 3) * directionX,
      y: (mouseCords.y / movement / 3) * directionY,
      duration: item.dataset.duration ? item.dataset.duration : 0.5,
      ease: "power1.out"
    });
  }
};

const resetStyle = () => {
  parallaxItems.forEach((item) => {
    gsap.killTweensOf(item);
    gsap.set(item, {
      clearProps: "all"
    });
  });
}

const parallaxEffect = () => {
  const mm = gsap.matchMedia();

  mm.add({isDesktop: "(min-width: 1024px)"}, () => {
    const parallaxTriggers = [];

    parallaxItems.forEach(item => {
      const parallax = {
        active: false,
        start: () => {
          if (!parallax.active) {
            parallax.active = true;
            gsap.ticker.add(() => updateParallax(item));
          };
        },
        kill: () => {
          if (parallax.active) {
            parallax.active = false;
            gsap.ticker.remove(() => updateParallax(item));
          };
        },
      };

      const trigger = ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        invalidateOnRefresh: true,
        onEnter: () => parallax.start(),
        onLeave: () => parallax.kill(),
        onEnterBack: () => parallax.start(),
        onLeaveBack: () => parallax.kill()
      });

      parallaxTriggers.push(trigger);
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      parallaxTriggers.forEach((trigger) => trigger.kill());
      parallaxTriggers.length = 0;
      resetStyle();
    }
  })
};

const initParallax = () => {
  parallaxEffect();
};

export {initParallax};
