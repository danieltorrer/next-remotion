import { AbsoluteFill, Sequence } from "remotion";

const Message: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={350}>
        <p>Hello</p>
      </Sequence>
    </AbsoluteFill>
  );
};

export { Message };
