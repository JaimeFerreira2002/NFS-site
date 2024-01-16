import React, { useRef, Suspense } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import FSFenixModel from '../../assets/3DModels/FSFenix_Render.js';
import FSFenixModelV2 from '../../assets/3DModels/FSFenix_Render_v2.js';
import { OrbitControls } from '@react-three/drei';


// Main component to display the 3D model
const CarModelViewer = () => { 

  return (
    //this is three.js, every code inside the Canvas is Three.js code
    //canvas is used to render 3d stuff
    <Canvas camera={{
      position: [0, 4, 10],  
      fov: 35,              
    }}>
      <Suspense fallback={null}> 
        <FSFenixModelV2/>
        <OrbitControls autoRotate={true} 
                       autoRotateSpeed={0.5} 
                       enablePan={false} 
                       enableZoom = {false} 
                       enableRotate = {true} 
                       maxZoom={1}
                       minPolarAngle={Math.PI / 2.5} 
                       maxPolarAngle={Math.PI / 2.5} 
                       dampingFactor={0.2}
                       />

      </Suspense>
    </Canvas>
  );
};


export default CarModelViewer;


  