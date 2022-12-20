import * as THREE from 'three'
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"


const color = new THREE.Color()

 function France(props, ref) {
  const group = useRef()
  const { nodes, materials } = useGLTF("./assets/models/gltf/france.glb");
  const [hovered, set] = useState()
  const [dataMorbihan, setDataMorbihan] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  useEffect(() => void (hovered && group.current.getObjectByName(hovered).material.color.set("#008EBD")), [hovered])
  useFrame((state) => {
    group.current.children[0].children.forEach((child, index) => {
    child.material.color.lerp(color.set(hovered === child.name ? "#6988E8" : "#243E8D"), hovered ? 0.1 : 0.05)
    const et = state.clock.elapsedTime
    })
  })
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e) => (e.stopPropagation(), set(null))}>
      <mesh
        onPointerOver={() => setDataMorbihan(true)}
        onPointerOut={() => setDataMorbihan(false)}
        name="morbihan"
        castShadow
        receiveShadow
        geometry={nodes.morbihan.geometry}
        material={materials.morbihan}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.46}
      >
       <Html scale={100} rotation={[-90, 0 , 0]} distanceFactor={0.2} transform occlude style={{  display: dataMorbihan ? "block" : "none", fontSize: '0.5em' }} >
        <div className="annotation_morbihan">
        Morbihan
        
        </div>
      </Html>
      </mesh>
      <mesh
        name="alpes-maritime"
        castShadow
        receiveShadow
        geometry={nodes["alpes-maritime"].geometry}
        material={materials.alpes_maritimes}
        rotation={[Math.PI / 2, 0, 0]}
        scale={460}
      >
        <Html scale={100} rotation={[-90, 0 , 0]} position={[180, -350, 50]}   >
        <div className="annotation">
        alpes
        
        </div>
      </Html>
      </mesh>
      <mesh
        name="bretagne"
        castShadow
        receiveShadow
        geometry={nodes.bretagne.geometry}
        material={materials.bretagne}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.46}
      />
      <mesh
        name="paca"
        castShadow
        receiveShadow
        geometry={nodes.paca.geometry}
        material={materials.paca}
        rotation={[Math.PI / 2, 0, 0]}
        scale={460}
      />
      <mesh
        name="territories"
        castShadow
        receiveShadow
        geometry={nodes.territories.geometry}
        material={materials.territories}
        rotation={[Math.PI / 2, 0, 0]}
        scale={460}
      />
      </group>
    </group>
  );
}



export default France;