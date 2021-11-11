import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Earth } from '../earth';

const CanvasContainer = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
