import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";

const MainScene = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Models />
      </Canvas>
    </div>
  );
};

export default MainScene;
