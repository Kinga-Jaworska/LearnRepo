'use client';

import { useMemo } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { ANIMATED_SVG } from './svgs.contants';
import { getIndex, useFlubber } from '../hook/use-flubber';


export function SVGAnimations() {

const services = ['llm', 'devOps', 'fullStackDevelopment']

  const paths = useMemo<string[]>(() => {
    return services.map((service) => {
      return ANIMATED_SVG[service].path;
    });
  }, []);

  const colors = useMemo<string[]>(() => {
    return services.map((service) => {
      return ANIMATED_SVG[service].color;
    });
  }, []);

  const progress = useMotionValue(0);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  const changeImage = (imageIndex: number) => {
    animate(progress, imageIndex, {
      duration: 0.2,
      ease: 'easeInOut',
    });
  };

  return (
    <div className="flex flex-col justify-center gap-6 tablet:flex-row tablet:gap-4 desktop:gap-10">
      <div className="flex flex-[422] flex-col tablet:max-w-[290px] desktop:max-w-[422px]">
        <div className="hidden items-center justify-center pt-32 tablet:flex desktop:pt-16">
          <div className="h-min w-min">
            <svg
              width="200"
              height="200"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path fill={fill} d={path} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
