import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Model() {
  const mesh = useRef();
  const { nodes } = useGLTF("/testCone.glb");
  const { viewport } = useThree();

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.z += 0.01;
  });

  return (
    <group scale={viewport.width / 5}>
      <Text fontSize={0.6} position={[0, 0, -0.5]}>
        Hello world!
      </Text>
      <mesh ref={mesh} {...nodes.Cone}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.08}
          backside={true}
        />
      </mesh>
    </group>
  );
}
