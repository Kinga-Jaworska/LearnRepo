import { Particle } from "./particle.class";
import { CIRCLE_WIDTH, NUMBER_PARTICLES_START } from "./particle.constants";

export const getRandomFloat = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const loop = (
  windowWidth: number,
  windowHeight: number,
  particles: Particle[],
  context: CanvasRenderingContext2D
) => {
  let i;
  const length = particles.length;

  for (i = 0; i < length; i++) {
    particles[i].update(windowWidth, windowHeight);
    particles[i].render(context);
  }
  requestAnimationFrame(() =>
    loop(windowWidth, windowHeight, particles, context)
  );
};

export const initParticlesAnimation = (
  windowWidth: number,
  windowHeight: number
) => {
  const particles: Particle[] = [];
  Array.from({ length: NUMBER_PARTICLES_START }, () => {
    const angle = Math.random() * 360;
    const x = windowWidth * 0.5 + Math.cos(angle) * CIRCLE_WIDTH;
    const y = windowHeight * 0.5 - Math.sin(angle) * CIRCLE_WIDTH;
    particles.push(new Particle(x, y));
  });

  return particles;
};
