import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stats, OrbitControls, Text } from "@react-three/drei";
import { Vector3, Mesh, Spherical } from "three";


export default function Tooltips(props, ref)  {
    const { camera } = useThree();
    const offset = 0.1;
    const [widthPanel, setWidthPanel] = useState(2 + 2 * offset);
    const [heightPanel, setHeightPanel] = useState(1 + 2 * offset);
    const [enableTooltip, setEnableTooltip] = useState(false);
    const panelRef = useRef;
    const textRef = useRef;
    const userData = e.object.userData;
    const parentUserData = e.object.parent.userData;
    const text = Object.keys(parentUserData)
    .map((key) => `'${key}': ${parentUserData[key]}`)
    .join('\n');
  
    useFrame(() => {
      panelRef.current.lookAt(camera.position);
      const offsetX = 1;
      const { x, y, z } = ref.current.position;
      panelRef.current.position.set(x + offsetX, y, z);
    });
  
    useEffect(() => {
      const checkTextRenderer = setInterval(() => {
        const { max, min } = textRef.current.geometry.boundingBox;
  
        const heightText = max.y - min.y;
        if (isFinite(heightText)) {
          clearInterval(checkTextRenderer);
          if (heightText > heightPanel - 2 * offset) {
            setHeightPanel(heightText + offset * 2);
          }
        }
      }, 200);
  
      return () => {
        clearInterval(checkTextRenderer);
      };
    }, [textRef]);
  
    useEffect(() => {
      if (panelRef && panelRef.current) {
        panelRef.current.visible = enableTooltip;
      }
    }, [enableTooltip]);
  
    const onPointerOver = () => {
      setEnableTooltip(true);
    };
  
    const onPointerLeave = () => {
      setEnableTooltip(false);
    };
  
    return (
      <>
        <mesh
          {...props}
          ref={ref}
          onPointerOver={onPointerOver}
          onPointerLeave={onPointerLeave}
        />
         
        <mesh ref={panelRef}>
          <planeGeometry args={[widthPanel, heightPanel]} />
          <meshStandardMaterial roughness={0.75} color="#202035" />
          <Text
            ref={textRef}
            color={"#EC2D2D"}
            fontSize={0.1}
            maxWidth={widthPanel - 2 * offset}
            lineHeight={1.5}
            letterSpacing={0.02}
            textAlign={"left"}
            position={[0, 0, 0.01]}
            overflowWrap="break-word"
            whiteSpace="overflowWrap"
          >
            {text}
          </Text>
        </mesh>
      </>
    );
  };

  Object.map((key) => `'${key}': ${userData[key]}`)