import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Terrain(props) {
  const { nodes, materials } = useGLTF("./assets/models/gltf/nice_terrain2.glb");
  const terrainTexture = useTexture("./assets/textures/overlay.png")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Terrain.geometry}
        material={materials["overlay.002"]}
        opacity={0.8}
      >
    <meshStandardMaterial map={terrainTexture} map-flipY={false} transparent={true} />

    </mesh>
    </group>
  );
}

export default Terrain;
