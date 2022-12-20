import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

 function Roads(props) {
  const { nodes, materials } = useGLTF("./assets/models/gltf/roads.glb");
  return (
    <group {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.roads.geometry}
      material={materials.roads}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.01}
    />
  </group>
);
}

export default Roads;