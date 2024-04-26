import { PARTICLE_SPEED, VELOCITY } from './particle.constants';
import { Coordinate, Velocity } from './particle.types';
import { getRandomFloat } from './particle.utils';

export class Particle {
  x: number;
  y: number;
  velocity: Velocity;
  color: string;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: getRandomFloat(-20, 20) / 100,
      y: getRandomFloat(-20, 20) / 100,
      min: getRandomFloat(2, 10),
      max: getRandomFloat(10, 100) / 10,
    };
    this.color = 'rgba(235, 235, 240, 0.05)';
  }

  testBorder(windowWidth: number, windowHeight: number): void {
    if (this.x > windowWidth) {
      this.setPosition(this.x, 'x');
    } else if (this.x < 0) {
      this.setPosition(windowWidth, 'x');
    }
    if (this.y > windowHeight) {
      this.setPosition(this.y, 'y');
    } else if (this.y < 0) {
      this.setPosition(windowHeight, 'y');
    }
  }

  update(windowWidth: number, windowHeight: number): void {
    const forceDirection = {
      x: getRandomFloat(-1, 1),
      y: getRandomFloat(-1, 1),
    };

    if (Math.abs(this.velocity.x + forceDirection.x) < this.velocity.max) {
      this.velocity.x += forceDirection.x;
    }
    if (Math.abs(this.velocity.y + forceDirection.y) < this.velocity.max) {
      this.velocity.y += forceDirection.y;
    }

    this.x += this.velocity.x * PARTICLE_SPEED;
    this.y += this.velocity.y * PARTICLE_SPEED;

    if (Math.abs(this.velocity.x) > this.velocity.min) {
      this.velocity.x *= VELOCITY;
    }
    if (Math.abs(this.velocity.y) > this.velocity.min) {
      this.velocity.y *= VELOCITY;
    }

    this.testBorder(windowWidth, windowHeight);
  }

  setPosition(pos: number, coordinate: Coordinate) {
    if (coordinate === 'x') {
      this.x = pos;
    } else if (coordinate === 'y') {
      this.y = pos;
    }
  }

  render(context: CanvasRenderingContext2D | null): void {
    if (context) {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x, this.y, 1, 0, Math.PI * 2);
      context.fill();
    }
  }
}
