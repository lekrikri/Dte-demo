import React, { useState, useRef } from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import ModelContainer from "../../components/ModelContainer";
import SelectToZoom from "../cityView/SelectToZoom";
import {
  OrbitControls,
  Html,
  useGLTF,
  useTexture,
  Environment,
  PresentationControls,
  Bounds,
  useBounds,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Container = styled.div``;

const EquipmentView = () => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Page>
        <Page.Title>Wind Turbine View</Page.Title>
      </Page>
      <Canvas dpr={[1, 2]} shadows>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" />
        <ModelContainer url="./assets/models/gltf/windTurbine.glb" />
        <OrbitControls makeDefault />
      </Canvas>
    </Container>
  );
};

export default EquipmentView;
