"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Maximize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  src: string;
  title?: string;
  open: boolean;
  onClose: () => void;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoLightbox({ src, title, open, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => setMounted(true), []);

  // Lock scroll + close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Autoplay when opened
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (open) {
      video.currentTime = 0;
      video.play().then(
        () => setPlaying(true),
        () => setPlaying(false)
      );
    } else {
      video.pause();
      setPlaying(false);
    }
  }, [open]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }, []);

  const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * video.duration;
  }, []);

  const requestFullscreen = useCallback(() => {
    videoRef.current?.requestFullscreen?.();
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <X className="size-5" />
          </button>

          <motion.div
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="group/player relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
          >
            <video
              ref={videoRef}
              src={src}
              loop
              playsInline
              onClick={togglePlay}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                setCurrent(v.currentTime);
                setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
              }}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              className="block max-h-[80vh] w-full cursor-pointer object-contain"
            />

            {/* Center play indicator */}
            <AnimatePresence>
              {!playing && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={togglePlay}
                  aria-label="Play"
                  className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  <Play className="size-7 translate-x-0.5 fill-current" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Controls */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-300 group-hover/player:opacity-100">
              <div className="pointer-events-auto flex flex-col gap-2">
                {/* Progress */}
                <div
                  onClick={seek}
                  className="group/bar relative h-1 w-full cursor-pointer rounded-full bg-white/25"
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    style={{ width: `${progress}%` }}
                  />
                  <div
                    className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-hover/bar:opacity-100"
                    style={{ left: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center gap-4 text-white">
                  <button
                    onClick={togglePlay}
                    aria-label={playing ? "Pause" : "Play"}
                    className="transition-opacity hover:opacity-80"
                  >
                    {playing ? (
                      <Pause className="size-5 fill-current" />
                    ) : (
                      <Play className="size-5 fill-current" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="transition-opacity hover:opacity-80"
                  >
                    {muted ? (
                      <VolumeX className="size-5" />
                    ) : (
                      <Volume2 className="size-5" />
                    )}
                  </button>

                  <span className="font-mono text-xs tabular-nums text-white/80">
                    {formatTime(current)} / {formatTime(duration)}
                  </span>

                  {title && (
                    <span className="ml-1 hidden truncate text-sm font-medium text-white/90 sm:block">
                      {title}
                    </span>
                  )}

                  <button
                    onClick={requestFullscreen}
                    aria-label="Fullscreen"
                    className={cn("ml-auto transition-opacity hover:opacity-80")}
                  >
                    <Maximize2 className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
