import { Html } from "@react-three/drei";

const Loader = () => {
  // we have to wrap in html so that its get o know that it is not 3D
  return (
    <Html>
      <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className=" w-[10vw] h-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
