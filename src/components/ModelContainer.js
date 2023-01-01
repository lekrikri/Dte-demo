import { useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { hover } from "@testing-library/user-event/dist/hover";

function ModelLoader(props) {
  let cameras = useThree((state) => state.cameras);
  let info;
  const gltf = useGLTF(props.url);
  const [infos, setInfos] = useState("");
  const [objectPosition, setObjectPosition] = useState("");
  const [clicked, setClicked] = useState(false);
  const [hovered, setHover] = useState(false);

  const click = (e) => {
    e.stopPropagation();
    console.log(e);
    setClicked(false);
    const userData = e.object.userData;
    const parentUserData = e.object.parent.userData;
    // console.log(userData);
    if (Object.keys(userData).length === 0) {
      info = Object.keys(parentUserData)
        .map((key) => `${key}: ${parentUserData[key]}\n`)
        .join("\n");
      console.log(info);
      setClicked(true);
      setInfos(info);
      setObjectPosition(e.object.parent.position);
    }
    if (Object.keys(userData).length > 1) {
      info = Object.keys(userData)
        .map((key) => `${key}: ${userData[key]}\n`)
        .join("\n");
      console.log(info);
      setClicked(true);
      setInfos(info);
      setObjectPosition(e.object.position);
    }
  };

  console.log(gltf);
  // Add cameras from model to global Three state

  if (gltf.cameras.length > 0) {
    gltf.cameras.forEach((cam) => cameras.push(cam));
  }

  let mixer;
  if (gltf.animations.length > 0) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }
  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  //   return <primitive object={gltf.scene} />;
  return (
    <primitive
      onClick={click}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
      object={gltf.scene}
    >
      {clicked ? (
        <Html position={objectPosition} distanceFactor={1}>
          <div className="content"> {infos} </div>
        </Html>
      ) : // <Box />
      null}
    </primitive>
  );
}

export default function ModelContainer({ url, changeVisibility }) {
  return (
    <Suspense>
      <ModelLoader url={url} />
    </Suspense>
  );
}
