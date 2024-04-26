"use client";

import { useEffect, useRef, useState } from "react";
import { initParticlesAnimation, loop } from "../particle.utils";

export function ParticleAnimation() {
  const [resizing, setResizing] = useState(false);
  const animationIdRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const debounce = () => {
      setResizing(true);
      return setTimeout(() => {
        // function
        setResizing(false);
        clearTimeout(resizeTimer);
      }, 1000);
    };

    // const handleResize = () => {
    //   setResizing(true);
    //   clearTimeout(resizeTimer);
    //   resizeTimer = setTimeout(() => {
    //     setResizing(false);
    //   }, 500);
    // };

    const handleAnimation = (context: CanvasRenderingContext2D) => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      if (resizing) {
        cancelAnimationFrame(animationIdRef.current);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        return;
      }

      //   context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      animationIdRef.current = requestAnimationFrame(() =>
        loop(
          window.innerWidth,
          window.innerHeight,
          initParticlesAnimation(window.innerWidth, window.innerHeight),
          context
        )
      );
    };

    window.addEventListener("resize", debounce);

    if (context) {
      handleAnimation(context);
    }

    return () => {
      window.removeEventListener("resize", debounce);
      //   clearTimeout(resizeTimer);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [resizing]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute z-20 flex h-full w-full opacity-50"
      //   id="canvas"
    />
  );
}

export default ParticleAnimation;
