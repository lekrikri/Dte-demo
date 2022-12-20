import * as THREE from 'three'
import { Color } from 'three'
import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF, useTexture, Environment, PresentationControls } from '@react-three/drei';
import { useSpring } from '@react-spring/three'
import Page from "../../components/Page";
import styled from "styled-components";
import France from './France';



const Container = styled.div``;

function TerritoryView() {
  return (
    <Container>
      <Page>
        <Page.Title>Territoire View</Page.Title>
      </Page>
      <Canvas dpr={[1, 2]} >
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" />
      <PresentationControls  zoom={20} rotation={[0, Math.PI / 10, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
      <France />
      </PresentationControls>
    </Canvas>
    </Container>
  );
};

export default TerritoryView;






