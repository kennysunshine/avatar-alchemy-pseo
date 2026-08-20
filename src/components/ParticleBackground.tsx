'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    // Brand colors matching the screenshot (dark blues, glowing blues, fuchsia)
    const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#1E3A8A', '#ffffff'];

    class Particle {
      x: number;
      y: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Calculate vector away from center
        const dx = this.x - w / 2;
        const dy = this.y - h / 2;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1; // avoid division by zero
        
        // Speed increases as it gets further away (warp liftoff effect)
        const speed = Math.max(0.5, distance / 150); 
        
        this.x += (dx / distance) * speed;
        this.y += (dy / distance) * speed;

        // Reset if it goes off screen
        if (this.x > w || this.x < 0 || this.y > h || this.y < 0) {
            // Respawn near center to create continuous outward flow
            const angle = Math.random() * Math.PI * 2;
            const spawnRadius = Math.random() * 50; 
            this.x = w/2 + Math.cos(angle) * spawnRadius;
            this.y = h/2 + Math.sin(angle) * spawnRadius;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.min(1, this.size / 2); // smaller = more transparent
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.floor((w * h) / 8000); // Responsive amount of particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Clear with a slight trailing effect
      ctx.fillStyle = 'rgba(7, 11, 20, 0.2)'; 
      ctx.fillRect(0, 0, w, h);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
