import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleFLOKA({ pointCount = 25000 }) {
  const pointsRef = useRef();
  const { viewport, mouse: rawMouse } = useThree();

  const { positions, initialPositions, velocities, colors } = useMemo(() => {
    const pos = new Float32Array(pointCount * 3);
    const initial = new Float32Array(pointCount * 3);
    const vels = new Float32Array(pointCount * 3);
    const cols = new Float32Array(pointCount * 3); 

    const color1 = new THREE.Color("#00f2fe"); 
    const color2 = new THREE.Color("#4facfe"); 
    const color3 = new THREE.Color("#ff00f7");

    for (let i = 0; i < pointCount; i++) {
      let x, y, z;
      const charSelector = Math.random();

      if (charSelector < 0.2) {
        const s = Math.random();
        x =
          s < 0.4
            ? (Math.random() - 0.5) * 0.6 - 4
            : (Math.random() - 0.5) * 2 - 3.3;
        y = s < 0.4 ? (Math.random() - 0.5) * 5 : s < 0.7 ? 2.2 : 0;
      } else if (charSelector < 0.4) {
        const s = Math.random();
        x =
          s < 0.7
            ? (Math.random() - 0.5) * 0.6 - 1.5
            : (Math.random() - 0.5) * 2 - 0.8;
        y = s < 0.7 ? (Math.random() - 0.5) * 5 : -2.2;
      } else if (charSelector < 0.6) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + (Math.random() - 0.5) * 0.5;
        x = Math.cos(angle) * radius + 1.2;
        y = Math.sin(angle) * radius;
      } else if (charSelector < 0.8) {
        const s = Math.random();
        y = (Math.random() - 0.5) * 5;
        x = s < 0.4 ? 3.5 : 3.5 + Math.abs(y) * 0.6;
        x += (Math.random() - 0.5) * 0.5;
      } else {
        const s = Math.random();
        if (s < 0.8) {
          const slant = 0.4;
          y = (Math.random() - 0.5) * 5;
          const side = Math.random() < 0.5 ? -1 : 1;
          x = 7.5 + side * slant * y + side * 1;
        } else {
          // Crossbar
          x = 7.5 + (Math.random() - 0.5) * 2;
          y = 0;
        }
        x += (Math.random() - 0.5) * 0.4;
      }

      z = (Math.random() - 0.5) * 0.5;
      x -= 1.5;

      pos[i * 3 + 0] = initial[i * 3 + 0] = x;
      pos[i * 3 + 1] = initial[i * 3 + 1] = y;
      pos[i * 3 + 2] = initial[i * 3 + 2] = z;
      vels[i * 3 + 0] = vels[i * 3 + 1] = vels[i * 3 + 2] = 0;

      const mixedColor = Math.random() < 0.5 ? color1 : color3;
      cols[i * 3 + 0] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return {
      positions: pos,
      initialPositions: initial,
      velocities: vels,
      colors: cols,
    };
  }, [pointCount]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const mouseX = (rawMouse.x * viewport.width) / 2;
    const mouseY = (rawMouse.y * viewport.height) / 2;

    for (let i = 0; i < pointCount; i++) {
      const ix = i * 3,
        iy = i * 3 + 1;
      const dx = posAttr.array[ix] - mouseX;
      const dy = posAttr.array[iy] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 1.5) {
        const force = (1 - dist / 1.5) * 0.15;
        velocities[ix] += dx * force;
        velocities[iy] += dy * force;
      }

      velocities[ix] += (initialPositions[ix] - posAttr.array[ix]) * 0.05;
      velocities[iy] += (initialPositions[iy] - posAttr.array[iy]) * 0.05;
      velocities[ix] *= 0.92;
      velocities[iy] *= 0.92;
      posAttr.array[ix] += velocities[ix];
      posAttr.array[iy] += velocities[iy];
    }
    posAttr.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const ParticleScene = () => {
  return (
    <>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -80px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite alternate; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
        .animation-delay-8000 { animation-delay: 8s; }
      `}</style>

      <section className="h-[90vh] bg-[#020202] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#00f2fe]/10 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#00e676]/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-[#ff00f7]/10 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-[30rem] h-[30rem] bg-[#4facfe]/10 rounded-full blur-[110px] animate-blob animation-delay-6000"></div>
          <div className="absolute top-1/3 right-1/3 w-[30rem] h-[30rem] bg-[#ffab40]/5 rounded-full blur-[110px] animate-blob animation-delay-8000"></div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center">
          <h3 className="text-white/[0.008] text-[12vw] font-black uppercase tracking-[0.8em] ml-[0.8em]">
            FLOKA
          </h3>
        </div>

        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ParticleFLOKA pointCount={25000} />
        </Canvas>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] opacity-70 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default ParticleScene;
