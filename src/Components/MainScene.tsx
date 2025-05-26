import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";
import { Environment, Lightformer } from "@react-three/drei";
import Texts from "./Texts";

const MainScene = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <color attach="background" args={["#000"]} />
        <Models />
        <Texts />
        <Environment preset="night">
          <Lightformer
            intensity={8}
            position={[10, 5, 0]}
            scale={[10, 50, 1]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
        {/* <EffectComposer>
          <N8AO aoRadius={1} intensity={2} />
          <Bloom mipmapBlur luminanceThreshold={0.8} intensity={2} levels={8} />
          <TiltShift2 blur={0.2} />
        </EffectComposer> */}
      </Canvas>
    </div>
  );
};

export default MainScene;
