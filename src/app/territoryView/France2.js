import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { Tooltip } from 'antd';

function Sphere({ geometry, x, y, z, s }) {
    const [active, set] = useState(false)
    return (
      <mesh
        onPointerOver={() => set(true)}
        onPointerOut={() => set(false)}
        position={[x, y, z]}
        scale={[s, s, s]}
        geometry={geometry}
        userData={{ active }}>
        <meshStandardMaterial attach="material" color="hotpink" roughness={1} />
      </mesh>
    )
  }

 function France(props) {
  const { nodes, materials } = useGLTF("./assets/models/gltf/france.glb");
  const [hover, setHover] = useState(false)
  return (
    <group {...props} dispose={null}>
      <group name="carte_france" rotation={[Math.PI / 2, 0, 0]} position-y={0.75} scale={35}>
        <mesh
          name="france"
          castShadow
          receiveShadow
          geometry={nodes.france.geometry}
          material={materials.france}
        />
        <mesh
          name="france_1"
          castShadow
          receiveShadow
          geometry={nodes.france_1.geometry}
          material={materials.bretagne}
        >
         <Html distanceFactor={5}>
        <div class="content">
        Bretagne
        </div>
      </Html>    
        </mesh>
        <mesh
          name="france_2"
          castShadow
          receiveShadow
          geometry={nodes.france_2.geometry}
          material={materials.morbihan}
        />
        <mesh
          name="france_3"
          castShadow
          receiveShadow
          geometry={nodes.france_3.geometry}
          material={materials.paca}
        />
        
        <mesh
          name="france_4"
          castShadow
          receiveShadow
          geometry={nodes.france_4.geometry}
          material={materials.alpes_maritimes}
        >
         </mesh>   
      </group>
    </group>
    
  );
}

export default France;
