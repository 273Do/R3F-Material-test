import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";
import {
  AsciiRenderer,
  Environment,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";

const MainScene = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{
          powerPreference: "high-performance",
          antialias: false, // アンチエイリアスを無効化してパフォーマンス向上
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <Models />

        {/* <Texts /> */}
        <Environment preset="night">
          <Lightformer
            intensity={3}
            position={[1, 6, 3.6]}
            scale={[10, 50, 1]}
            rotation={[Math.PI / 2, 0, 0]}
            // scale={[10, 10, 0]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
        {/* <AsciiRenderer
          invert={false}
          resolution={0.1}
          fgColor="white"
          bgColor="transparent"
        /> */}
        {/* <OrbitControls /> */}
        {/* <EffectComposer></EffectComposer> */}
      </Canvas>
    </div>
  );
};

export default MainScene;
