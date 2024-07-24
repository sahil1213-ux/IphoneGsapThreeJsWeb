import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "../../componentts/ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../../utils/index.js";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../../constants/index.js";
import AnimateWithGsapTimeline from "./AnimateWithGsapTimeline.jsx";

const Model = () => {
  //  the stateS MADE for showing multiple phones SIZES (Bellow states are made three.js camera control)
  //   to use Three.js Step 1
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view Step 2
  const cameraControlSmall = useRef(null);
  const cameraControlLarge = useRef(null);

  //   we also have to maintain the state to keep track of the current model to access its properties whiile animating (model)
  // Step 3
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // track of rotation Step 4
  const [smallRotation, setsmallRotation] = useState(0);
  const [largeRotation, setlargeRotation] = useState(0);
  // Three.js camera control

  // Step 11 to align the phones row-vise with animation
  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      AnimateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }
    if (size === "small") {
      AnimateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
    // return () => {
    //   tl.kill();
    // };
  }, [size]); // size is the dependency necessary to run the animation
  // Step 11 to align the phones rowvise with animation

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  //   Now to bring animation of gsap while changing the size we have to use gsap timeline
  return (
    <section className=" common-padding">
      <div className=" screen-max-width">
        <h1 id="heading" className=" section-heading">
          Take a close look
        </h1>
        {/* content */}
        <div className=" flex flex-col items-center mt-5">
          <div className=" w-full h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] 2xl:h-[95vh] overflow-hidden">
            {/* Step 5 */}
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setsmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setlargeRotation}
              item={model}
              size={size}
            />
            {/* Step 5 */}

            {/* Step 6 */}
            <Canvas
              className=" w-full h-full "
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
            {/* Step 6 */}
            {/* Now show The Properties to modify image */}
          </div>
          {/* Step 7 */}
          <div className=" mx-auto w-full mt-20">
            <div className="flex-center">
              <ul className=" color-container">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className=" w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className=" size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn" // this is in index.css
                    style={{
                      backgroundColor:
                        size === value ? " white" : "transparent",
                      color: size === value ? " black" : " white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
            <p className=" text-sm font-light text-center mb-2">
              {model.title}
            </p>
          </div>
          {/* Step 7 */}
        </div>
      </div>
    </section>
  );
};

export default Model;
