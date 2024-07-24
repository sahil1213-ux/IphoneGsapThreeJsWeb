import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../componentts/Animations";
import { explore1Img, explore2Img, exploreVideo } from "../../utils/index";
import { useRef } from "react";
import gsap from "gsap";

const Features = () => {
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart", // onEnter, onLeave, onEnterBack, onLeaveBack
        start: " -10% bottom", // when the top of the trigger hits the top of the viewport means
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 5.5,
      }
    );

    animateWithGsap(".g_grow", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  //   video Ref
  const videoRef = useRef(null);

  return (
    <section className=" h-full common-padding bg-zinc relative overflow-hidden">
      <div className=" screen-max-width">
        <div className=" mb-12 w-full">
          <h1 id="features_title" className=" section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className=" flex flecol justify-center items-center overflow-hidden">
          <div className=" mt32 mb-24 pl-24">
            <h2 className=" text-5xl lg:7xl font-semibold"> iPhone.</h2>
            <h2 className=" text-5xl lg:7xl font-semibold">
              {" "}
              Forged in titanium
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className=" relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className=" w-full h-full object-cover"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            {/* Images */}
            <div className=" relative w-full flex flex-col">
              <div className=" feature-video-container">
                <div className=" overflow-hidden flex-1 h-[5ovh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className=" feature-video g_grow"
                  />
                </div>
                <div className=" overflow-hidden flex-1 h-[5ovh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className=" feature-video g_grow"
                  />
                </div>
              </div>

              <div className=" feature-text-container">
                <div className=" flex-1 flex-center">
                  <p className=" feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className=" text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design.{" "}
                    </span>
                    using the same alloy that spacecrafts are made of, the
                    iPhone 15 Pro is the most durable iPhone ever.
                  </p>
                </div>
                {/* 2nd Para */}
                <div className=" flex-1 flex-center">
                  <p className=" feature-text g_text gap-3">
                    Titanium has a unique look and feel that sets it apart from
                    other materials. It’s also highly resistant to corrosion, so
                    it will maintain its beauty for years to come.{" "}
                    <span className=" text-white">
                      you can choose from four stunning finishes: Space Gray,
                      Silver, Gold, and Midnight Black.{" "}
                    </span>
                    lightweight and strong, titanium is the perfect material for
                    an iPhone that’s both beautiful and durable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
