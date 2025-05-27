import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Vector3 } from 'three';

function ScrollControlledSisyphus() {
  const scroll = useScroll();
  const ref = useRef();
  const { scene } = useGLTF('/sisyphus.glb'); // Ensure this path is correct

  useFrame(() => {
    if (ref.current) {
      const t = scroll.offset;
      const position = new Vector3(
        Math.sin(t * Math.PI * 2) * 5,
        -1,
        Math.cos(t * Math.PI * 2) * 5
      );
      ref.current.position.copy(position);
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} />;
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <ScrollControls pages={3}>
        <Suspense fallback={null}>
          <ScrollControlledSisyphus />
        </Suspense>
      </ScrollControls>
      <OrbitControls />
    </Canvas>
  );
}


// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
// import { Suspense, useRef } from 'react';
// import { Vector3 } from 'three';

// function SisyphusModel() {
//   const { scene } = useGLTF('/sisyphus.glb'); // Adjust the path accordingly
//   return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
// }

// function ScrollControlledSisyphus() {
//   const scroll = useScroll();
//   const ref = useRef();
//   const { scene } = useGLTF('/sisyphus.glb');

//   useFrame(() => {
//     if (ref.current) {
//       const t = scroll.offset;
//       const position = new Vector3(Math.sin(t * Math.PI * 2) * 5, -1, Math.cos(t * Math.PI * 2) * 5);
//       ref.current.position.copy(position);
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.5} />;
// }

// export default function Scene() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <ScrollControls pages={3}>
//         <Suspense fallback={null}>
//           <ScrollControlledSisyphus />
//         </Suspense>
//       </ScrollControls>
//       <OrbitControls />
//     </Canvas>
//   );
// }


// import { useScroll } from '@react-three/drei';

// function ScrollControlledSisyphus() {
//   const scroll = useScroll();
//   const ref = useRef();
//   const { scene } = useGLTF('/sisyphus.glb');

//   useFrame(() => {
//     if (ref.current) {
//       const t = scroll.offset;
//       const position = new Vector3(Math.sin(t * Math.PI * 2) * 5, -1, Math.cos(t * Math.PI * 2) * 5);
//       ref.current.position.copy(position);
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={0.5} />;
// }


// import { OrbitControls } from '@react-three/drei';

// function EnhancedScene() {
//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       <ScrollControls pages={3}>
//         <Suspense fallback={null}>
//           <ScrollControlledSisyphus />
//         </Suspense>
//       </ScrollControls>
//       <OrbitControls />
//     </Canvas>
//   );
// }
