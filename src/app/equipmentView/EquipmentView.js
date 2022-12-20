import React, { useState, useRef } from 'react'
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import ModelContainer from '../../components/ModelContainer';
import SelectToZoom from '../cityView/SelectToZoom';
import { OrbitControls, Html, useGLTF, useTexture, Environment, PresentationControls, Bounds, useBounds, } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const Container = styled.div``;

const EquipmentView = () => {
  const [active, setActive] = useState(false)
  return (
    <Container>
      <Page>
        <Page.Title>Equipment View</Page.Title>
      </Page>
      <Canvas dpr={[1, 2]} orthographic shadows  far={100} near={10} fov={50}  rotation={5} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" />
      <Bounds fit clip observe margin={1.2}>
      <SelectToZoom>
     <ModelContainer url="./assets/models/gltf/windTurbine.glb"
      scale={active ? 1.5 : 1} onDoubleClick={() => setActive(!active)}/> 
      </SelectToZoom> 
       </Bounds>
     <OrbitControls 
     rotateSpeed={1} 
     minPolarAngle={0.5} 
     maxPolarAngle={Math.PI / 2.5} 
     zoomSpeed={6}
     enableDamping={true}
    dampingFactor={0.5}
      />
     
    </Canvas>
    </Container>
  );
};


export default EquipmentView;
