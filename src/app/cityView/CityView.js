import * as THREE from "three";
import React, { useState, useRef, Suspense } from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  useGLTF,
  Environment,
  PresentationControls,
  Bounds,
  useBounds,
  CycleRaycast,
} from "@react-three/drei";
import ModelContainer from "../../components/ModelContainer";
import SelectToZoom from "./SelectToZoom";
import NiceVille from "./NiceVille";
import Terrain from "./Terrain";
import Nikaia from "./Nikaia";

const Container = styled.div``;

function CityView() {
  return (
    <Container>
      <Page>
        <Page.Title>City View</Page.Title>
      </Page>
      <Suspense fallback={<span>loading...</span>}>
        <Canvas
          dpr={[1, 2]}
          orthographic
          shadows
          camera={{ position: [389.19, 1234.85, 15.14], zoom: 6 }}
          far={100000000000}
          near={0.0001}
          fov={50}
          rotation={5}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" />
          <ambientLight intensity={1} />
          <Bounds fit clip observe eps={12} damping={12} margin={1.2}>
            <SelectToZoom>
              <NiceVille />
              {/* <ModelContainer url="./assets/models/gltf/nice_buildings.glb"
      scale={active ? 1.5 : 1} onDoubleClick={() => setActive(!active)}
       />  */}
              {/* <ModelContainer url="./assets/models/gltf/nice_buildings_undefined.glb" />   */}
            </SelectToZoom>
          </Bounds>

          <ModelContainer url="./assets/models/gltf/nice_buildings_undefined.glb" />
          <ModelContainer url="./assets/models/gltf/nice_roads.glb" />
          <Terrain />
          {/* <Buildings_undefined /> */}

          <OrbitControls
            makeDefault
            rotateSpeed={1}
            minPolarAngle={0.5}
            maxPolarAngle={Math.PI / 2.5}
            zoomSpeed={6}
            enableDamping={true}
            dampingFactor={0.5}
          />
        </Canvas>
      </Suspense>
    </Container>
  );
}

export default CityView;
