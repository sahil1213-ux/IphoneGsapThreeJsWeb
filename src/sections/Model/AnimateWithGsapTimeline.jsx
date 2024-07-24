// Step 12 final step
// here u can see name can be different but position must be correct
const AnimateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 2,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<" // this will make ensure that to insert the animation at the start of Previous animation
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<" // this will make ensure that to insert the animation at the start of Previous animation
  );

  return <div>AnimateWithGsapTimelinne</div>;
};

export default AnimateWithGsapTimeline;
