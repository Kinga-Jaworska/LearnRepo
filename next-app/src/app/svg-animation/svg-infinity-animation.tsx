'use client';

import { useState, useEffect } from "react";
import { twitter, git, facebook, pinterest } from "./paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import useFlubber, { getIndex } from "../hook/use-flubber";
// import getIndex from "./getIndex";

const paths = [twitter, git, facebook, pinterest, twitter];
const colors = ["#16d1f2", "#111111", "#3b5998", "#CD201F", "#16d1f2"];

export const SvgInfinitiveAnimation = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });
    return () => animation.stop();
  }, [pathIndex]);

  return (
    <svg width="300" height="300">
      <g transform="scale(10 10)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
};
