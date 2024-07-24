import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../../utils/index";
import { useEffect, useState } from "react";

// flex-center = display:flex; justify-content:center; align-items:center;
const Hero = () => {
  // to detact size of screen
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", {
      delay: 2,
      opacity: 1,
      // ease: "power4.out",
    });
    gsap.to("#cta", {
      y: -50,
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <section className=" w-full nav-height bg-black relative">
      <div className=" h-5/6 flex w-full flex-center flex-col">
        <p id="hero" className=" hero-title">
          iPhone 15 Pro
        </p>
        <div className=" md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className=" pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* button */}
      <div
        className=" flex flex-col items-center opacity-0 translate-y-20"
        id="cta"
      >
        <a href="#highlights" className="btn">
          Buy{" "}
        </a>
        <p
          className=" font-normal
         text-xl"
        >
          From $199/month or $999
        </p>
      </div>
    </section>
  );
};

export default Hero;
