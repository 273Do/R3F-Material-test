import { MeshTransmissionMaterial, useGLTF, Edges } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { LayerMaterial, Depth, Fresnel } from "lamina";

export const Models = () => {
  const { nodes } = useGLTF("./model/logo2.glb");

  const { camera, mouse } = useThree(); // ビューポートの幅を取得
  const gradient = 0.5; // グラデーションの強さを調整する値
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
        {/* <MeshTransmissionMaterial
          roughness={0.25}
          backside
          backsideThickness={1}
          thickness={0.1}
          distortion={0.5}
          temporalDistortion={0.03}
        /> */}
        {/* <Edges linewidth={1} scale={1} threshold={10} color="white" /> */}
        <meshStandardMaterial wireframe />

        {/* <LayerMaterial toneMapped={false}>
          <Depth
            colorA="#ff0080"
            colorB="black"
            alpha={1}
            mode="normal"
            near={0.5 * gradient}
            far={0.5}
            origin={[0, 0, 0]}
          />
          <Depth
            colorA="blue"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={2 * gradient}
            far={2}
            origin={[1, 1, 1]}
          />
          <Depth
            colorA="green"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={3 * gradient}
            far={3}
            origin={[-1, -1, -1]}
          />
          <Depth
            colorA="white"
            colorB="red"
            alpha={1}
            mode="overlay"
            near={1.5 * gradient}
            far={1.5}
            origin={[1, -1, -1]}
          />
          <Fresnel
            mode="add"
            color="white"
            intensity={0.75}
            power={2}
            bias={0.05}
          />
        </LayerMaterial> */}
      </mesh>

      <pointLight position={[-1, 0, 0]} intensity={100} color={"white"} />
      <pointLight position={[1, 0, 0]} intensity={100} color={"white"} />
      <directionalLight position={[0, 0, -1]} color="white" intensity={10} />
    </>
  );
};
