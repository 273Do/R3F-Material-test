import { MeshTransmissionMaterial, useGLTF, Edges } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export const Models = () => {
  const { nodes } = useGLTF("./model/logo2.glb");

  const { camera, mouse } = useThree(); // ビューポートの幅を取得

  const ref = useRef<THREE.Mesh>(null!);
  // useFrameでカメラ位置をマウスに合わせて動かす
  useFrame(() => {
    // mouse.x, mouse.yは-1〜1の範囲
    const targetX = -mouse.x * 1; // 振れ幅は調整可
    const targetY = -mouse.y * 1;
    // 緩やかに追従させる
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return (
    <>
      <mesh
        castShadow
        receiveShadow
        scale={20}
        geometry={(nodes.mesh as THREE.Mesh).geometry}
        rotation={[2, 0.3, 0.25]}
        position={[-1.5, -1.2, 0]}
        ref={ref}
      >
        <MeshTransmissionMaterial
          roughness={0.25}
          backside
          backsideThickness={1}
          thickness={0.1}
          distortion={0.5}
          temporalDistortion={0.03}
        />
        <Edges linewidth={1} scale={1} threshold={10} color="white" />
        {/* <meshStandardMaterial wireframe /> */}
      </mesh>

      <pointLight position={[-1, 0, 0]} intensity={100} color={"white"} />
      <pointLight position={[1, 0, 0]} intensity={100} color={"white"} />
      <directionalLight position={[0, 0, -1]} color="white" intensity={10} />
    </>
  );
};
