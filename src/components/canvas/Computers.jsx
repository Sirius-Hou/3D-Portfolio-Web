import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useSpring, animated } from '@react-spring/three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotation }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <animated.mesh rotation={rotation}>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <spotLight
        position={[-20, 30, 10]} // Lowered the y value
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <pointLight intensity={1} position={[-3, 0, 0]}/>

      {/* Add a strong directional light from above */}
      <directionalLight
        intensity={2.5} // Adjust intensity as needed
        position={[0, 10, 0]} // Positioned above the setup
        castShadow
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </animated.mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { rotation } = useSpring({
    rotation: [0, -Math.min(scrollY / 200, 1) * Math.PI / 3, 0], // Rotate up to -90 degrees (π/2 radians)
    config: { mass: 1, tension: 170, friction: 26 }, // Adjust the config for smoother animation
  });

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 3, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotation={rotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;