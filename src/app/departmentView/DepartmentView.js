import React, { useState, useRef } from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
  useAnimations,
} from "@react-three/drei";
import MapCesium from "./MapCesium";

const Container = styled.div``;

// function Morbihan(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(
//     "./assets/models/gltf/morbihan_with_animation.glb"
//   );
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <group
//           name="Camera"
//           position={[-525.4105835, -17.74341202, 2155.33032227]}
//         >
//           <PerspectiveCamera
//             name="Camera_Orientation"
//             makeDefault={false}
//             far={3000}
//             near={0.1}
//             fov={22.89519413}
//             rotation={[-Math.PI / 2, 0, 0]}
//           />
//         </group>
//         <group name="Path_1" />
//         <group name="Guide_1" />
//         <mesh
//           name="Ground"
//           castShadow
//           receiveShadow
//           geometry={nodes.Ground.geometry}
//           material={
//             materials["Mat_warped_src_T30TWT_20220615T110631_TCI_10m.jp2"]
//           }
//         />
//       </group>
//     </group>
//   );
// }

// export function Cube(props) {
//   const { nodes, materials } = useGLTF("./assets/models/gltf/cube.glb");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         name="Cube"
//         castShadow
//         receiveShado
//         geometry={nodes.Cube.geometry}
//         material={materials.Material}
//       />
//     </group>
//   );
// }

function DepartmentView() {
  // const state = useState();
  // const camera = useThree((state) => state.camera);
  // console.log(camera)
  return (
    <Container>
      <Page>
        <Page.Title>Globe View</Page.Title>
      </Page>

      <MapCesium />
    </Container>
  );
}

export default DepartmentView;
