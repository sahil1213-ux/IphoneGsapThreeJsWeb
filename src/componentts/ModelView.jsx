import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
import * as Three from "three";
import Loader from "./Loader";

/// Step 10 for Three js Step 8 and 9 is in Lights.jsx
const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` h-full w-full absolute 
        ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false} // means we can't move the camera
        rotateSpeed={0.4}
        target={new Three.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())} // to get the angle of the camera when we stop rotating
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;

// TODO:
/**
 * Suspense is used to provide the loader untill image loads and u can even progress bar.
 * Orbit Controls allows us to move the camera when we try to touch.
 *     //target means:  x,y,z positioned at center of the screen
 */
