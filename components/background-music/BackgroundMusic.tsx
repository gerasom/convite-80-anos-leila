"use client";

import { useEffect, useRef, useState } from "react";

type BackgroundMusicProps = {
  startMusic?: boolean;
};

export default function BackgroundMusic({
  startMusic = false,
}: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.18;
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

 useEffect(() => {
  if (!startMusic) return;

  const audio = audioRef.current;

  if (!audio) return;

  const startAudio = async () => {
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error(
        "Não foi possível iniciar a música:",
        error
      );
    }
  };

  startAudio();
}, [startMusic]);

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error(
        "Não foi possível reproduzir a música:",
        error
      );
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/fundo.mp3"
        preload="auto"
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying ? "Desligar música" : "Ligar música"
        }
        title={
          isPlaying ? "Desligar música" : "Ligar música"
        }
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfcee6] bg-white/90 text-[#80688f] shadow-[0_10px_30px_rgba(100,80,120,0.15)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <span className="text-lg">
          {isPlaying ? "♫" : "♪"}
        </span>

        {isPlaying && (
          <span className="absolute inset-0 animate-ping rounded-full border border-[#cdb8d8] opacity-20" />
        )}
      </button>
    </>
  );
}