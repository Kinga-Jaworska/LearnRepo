import Image from "next/image";
import { ParticleAnimation } from "./modules/particle-animation/particle-animation";
import { DebounceThrottle } from "./modules/debounce-throttle/debounce-throttle";
import { SVGAnimations } from "./svg-animation/svg-animation";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* <ParticleAnimation /> */}
      {/* <DebounceThrottle /> */}
      <SVGAnimations />
    </main>
  );
}
