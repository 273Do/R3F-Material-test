import { Billboard, Text } from "@react-three/drei";

const Texts = () => {
  return (
    <Billboard>
      <group position={[0, 0, 0]}>
        <Text
          position={[0, 1.2, -2]}
          anchorX="center"
          anchorY="middle"
          color={"white"}
          fontSize={1.2}
          fontWeight={500}
          letterSpacing={-0.025}
        >
          WELCOME TO
        </Text>

        <Text
          position={[0, -1.2, -2]}
          anchorX="center"
          anchorY="middle"
          color={"white"}
          fontSize={1.2}
          fontWeight={500}
          letterSpacing={-0.025}
        >
          PORTFOLIO
        </Text>
      </group>
    </Billboard>
  );
};

export default Texts;
