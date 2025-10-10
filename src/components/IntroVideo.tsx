import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type IntroVideoProps = {
  onFinish: () => void;
};

const IntroVideo: React.FC<IntroVideoProps> = ({ onFinish }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setIsLoaded(true);
      video.play(); // начать проигрывание, когда готово
    };

    video.addEventListener("canplaythrough", handleLoaded);
    return () => video.removeEventListener("canplaythrough", handleLoaded);
  }, []);

  const handleVideoEnd = () => {
    onFinish();
  };

  return (
    <VideoWrapper isLoaded={isLoaded}>
      {!isLoaded && <Loader>Loading...</Loader>}
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={handleVideoEnd}
        preload="auto"
      >
        <source src="/intro.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </VideoWrapper>
  );
};

export default IntroVideo;

// ---- Стили ----
const VideoWrapper = styled.div<{ isLoaded: boolean }>`
  position: fixed;
  inset: 0;
  background: black;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s ease;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  animation: ${({ isLoaded }) => isLoaded && "fadeOut 1s ease 3s forwards"};

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
      @media (max-width: 600px) {
        scale: 0.7;
      }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Loader = styled.div`
  position: absolute;
  color: white;
  font-size: 24px;
  font-family: monospace;
`;
