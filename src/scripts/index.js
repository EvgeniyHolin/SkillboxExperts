import {initTabs} from "./modules/init-tabs.js";
import {initAccordions} from "./modules/init-accordions.js";
import {mobileVhFix} from "@/scripts/utils/mobile-vh-fix.js";
import {initExpertsSlider} from "./modules/init-experts-slider.js";
import {mediaSlider} from "./modules/init-media-slider.js";
import {initParallax} from "./modules/init-image-parallax.js";
import {transformFields} from "./utils/transform-fields.js";
import {initExpertLevelsSlider} from "./modules/init-expert-levels-slider.js";
import {initOpportunitesSlider} from "./modules/init-opportunites-slider.js"


mobileVhFix();
window.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initAccordions();
  initExpertsSlider();
  mediaSlider();
  transformFields();
  initExpertLevelsSlider();
  initParallax();
  initOpportunitesSlider();
}, true);
