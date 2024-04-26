import Image from "next/image";
import { ParticleAnimation } from "./modules/particle-animation/particle-animation";
import { DebounceThrottle } from "./modules/debounce-throttle/debounce-throttle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* <ParticleAnimation /> */}
      <DebounceThrottle />
    </main>
  );
}
