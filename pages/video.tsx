import React from "react";
import { Player, PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import { Header, LinkVideo } from "../components";

const Video: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    if (playerRef.current) {
      console.log(playerRef.current.getCurrentFrame());
    }
  }, []);

  return (
    <>
      <Header />

      <main>
        <Player
          ref={playerRef}
          component={LinkVideo}
          compositionWidth={1080}
          compositionHeight={1920}
          controls
          durationInFrames={350}
          fps={30}
          inputProps={{
            hasSwipeAnim: false,
          }}
        ></Player>
      </main>
    </>
  );
};

export default Video;
