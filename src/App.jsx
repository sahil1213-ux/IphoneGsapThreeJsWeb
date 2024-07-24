import {
  NavBar,
  Hero,
  Highlights,
  Model,
  Features,
  HowItWorks,
  Footer,
} from "./sections/index";
import * as Sentry from "@sentry/react";
function App() {
  return (
    <main className=" bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
