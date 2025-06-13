import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FlatIcon = ({ imgUrl }) => {
  const [texture] = useTexture([imgUrl]);

  return (
    <mesh scale={[5, 5, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Optional: Add ambient light for consistency */}
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <FlatIcon imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
