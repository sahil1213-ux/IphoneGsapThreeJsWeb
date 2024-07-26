//  custom scroll Action
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target,
  animationProps,
  scrollProps,
  isRestart = true
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: isRestart
        ? "restart reverse restart reverse"
        : "play none none none none", // onEnter, onLeave, onEnterBack, onLeaveBack
      start: "top 80%", // when the top of the trigger hits the top of the viewport means
      ...scrollProps,
    },
  });
};
