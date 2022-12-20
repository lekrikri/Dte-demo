import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Buildings_undefined(props) {
  const { nodes, materials } = useGLTF(
    "./assets/models/gltf/nice_buildings_undefined.glb"
  );
  const buildingTexture = useTexture("./assets/textures/matcaps/9.png");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nice_buildings_undefined.geometry}
        material={materials.undefined}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        opacity={0.2}
      >
        <meshMatcapMaterial
          map={buildingTexture}
          map-flipY={false}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

export default Buildings_undefined;
