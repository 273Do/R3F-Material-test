import { Billboard, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Texts = () => {
  const { size } = useThree();
  const marginRatio = 0.1;
  // 幅と高さの幾何平均を基準に
  const baseSize = Math.sqrt(size.width * size.height);
  const availableWidth = baseSize * (1 - marginRatio * 2);
  const fontSize = availableWidth / 410;
  return (
    <Billboard>
      <group position={[0, 0, 0]}>
        <Text
          position={[0, 0.75, -2]}
          anchorX="center"
          anchorY="middle"
          color={"white"}
          fontSize={1}
          fontWeight={700}
          letterSpacing={-0.025}
        >
          WELCOME TO
        </Text>

        <Text
          position={[0, -0.75, -2]}
          anchorX="center"
          anchorY="middle"
          color={"white"}
          fontSize={1}
          fontWeight={700}
          letterSpacing={-0.025}
        >
          PORTFOLIO
        </Text>
        <Text
          position={[0, 0.75, -2]}
          anchorX="center"
          anchorY="middle"
          color={"white"}
          // fontSize={fontSize}
          fontWeight={700}
          letterSpacing={-0.03}
          font="/model/Geist-Bold.ttf"
        >
          PORTFOLIO
        </Text>
      </group>
    </Billboard>
  );
};

export default Texts;
