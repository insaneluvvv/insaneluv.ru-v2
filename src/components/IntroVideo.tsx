import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

type IntroVideoProps = {
  onFinish: () => void;
};

const IntroVideo = ({ onFinish }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Если autoplay заблокирован — сразу переходим
        onFinish();
      });
    }

    const handleTimeUpdate = () => {
      if (!video.duration) return;

      // 🔹 Начинаем fade-out за 0.8 сек до конца
      if (video.duration - video.currentTime <= 0.8 && !isFadingOut) {
        setIsFadingOut(true);
      }
    };

    const handleEnded = () => {
      // Через 300мс после fade-out завершаем интро
      setTimeout(() => onFinish(), 300);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [onFinish, isFadingOut]);

  return (
    <VideoWrapper isFadingOut={isFadingOut}>
      <StyledVideo
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
      />
    </VideoWrapper>
  );
};

// 🔹 Плавное исчезновение видео
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; visibility: hidden; }
`;

const VideoWrapper = styled.div<{ isFadingOut: boolean }>`
  position: fixed;
  inset: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: ${({ isFadingOut }) => isFadingOut && fadeOut} 0.8s ease forwards;
  pointer-events: none;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default IntroVideo;
