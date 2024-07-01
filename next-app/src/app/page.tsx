// import { SVGAnimations } from "./svg-animation/svg-animation";

import { ServiceIcon } from "./svg-animation/service-icon";
import { SVGBody } from "./svg-animation/svg-body";
import { SvgInfinitiveAnimation } from "./svg-animation/svg-infinity-animation";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* <ParticleAnimation /> */}
      {/* <DebounceThrottle /> */}
      {/* <SVGAnimations /> */}
      {/* <SvgInfinitiveAnimation /> */}
      <SVGBody />
    </main>
  );
}
