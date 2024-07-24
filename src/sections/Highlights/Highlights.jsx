import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../../utils";
import VideoCarousal from "../../componentts/VideoCarousal";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const scrollRef = useRef();
  const scrollRef2 = useRef();
  useGSAP(
    () => {
      const links = gsap.utils.toArray(scrollRef2.current.children);
      links.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "bottom bottom",
            end: "bottom 20%",
            scrub: 1,
            markers: true,
          },
        });
      });
    },
    { scope: scrollRef2 }
  );

  useGSAP(
    () => {
      const heading = gsap.utils.toArray(scrollRef.current.children);
      heading.forEach((el) => {
        console.log("the content of el", el);
        gsap.to(el, {
          opacity: 1,
          y: -40,
          delay: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "bottom bottom",
            end: "bottom 20%",
            scrub: 1,
            // markers: true,
          },
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <section
      id="highlights"
      className=" w-screen
   bg-zinc common-padding overflow-hidden h-full"
    >
      <div className=" screen-max-width">
        <div
          ref={scrollRef}
          className=" mb-10 w-full items-center justify-between md:flex "
        >
          <h1 id="title" className="section-heading ">
            Get the highlights
          </h1>
          <div
            ref={scrollRef2}
            className=" flex flex-wrap space-x-3 items-center"
          >
            <p className="link gap-1.5">
              watch the film
              <img src={watchImg} alt="watch" className="w-6 h-6" />
            </p>
            <p className="link gap-1.5">
              watch the event
              <img src={rightImg} alt="watch" className="w-6 h-6" />
            </p>
          </div>
        </div>
        {/* Carousal Slider */}
        <VideoCarousal />
      </div>
    </section>
  );
};

export default Highlights;
