import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function HopitalLenval(props) {
  const { nodes, materials } = useGLTF("./assets/models/gltf/hopital_lenval.glb");
  const hopitalLenvalTexture = useTexture("./assets/textures/hopital_lenval.png")
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Hopital_Lenval"
        castShadow
        receiveShadow
        geometry={nodes.Hopital_Lenval.geometry}
        material={materials.hopital_lenval}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0}
      >
    <meshStandardMaterial map={hopitalLenvalTexture} map-flipY={false} transparent={false} />

    </mesh>
    </group>
  );
}

export default HopitalLenval;
