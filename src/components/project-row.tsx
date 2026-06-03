"use client";

import { cn } from "@/lib/utils";
import { VideoLightbox } from "@/components/video-lightbox";
import { Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Markdown from "react-markdown";

// iOS exposes a non-standard fullscreen API on the video element itself.
interface IOSVideoElement extends HTMLVideoElement {
  webkitEnterFullscreen?: () => void;
}

const PALETTES = [
  {
    gradient: "from-violet-500/10 via-card to-fuchsia-500/5",
    border: "hover:border-violet-500/40",
    accent: "text-violet-500",
    titleHover: "group-hover:text-violet-500",
    tag: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
  {
    gradient: "from-sky-500/10 via-card to-cyan-500/5",
    border: "hover:border-sky-500/40",
    accent: "text-sky-500",
    titleHover: "group-hover:text-sky-500",
    tag: "bg-sky-500/10 text-sky-600 dark:text-sky-300",
  },
  {
    gradient: "from-amber-500/10 via-card to-orange-500/5",
    border: "hover:border-amber-500/40",
    accent: "text-amber-500",
    titleHover: "group-hover:text-amber-500",
    tag: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
  {
    gradient: "from-emerald-500/10 via-card to-teal-500/5",
    border: "hover:border-emerald-500/40",
    accent: "text-emerald-500",
    titleHover: "group-hover:text-emerald-500",
    tag: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
  {
    gradient: "from-rose-500/10 via-card to-pink-500/5",
    border: "hover:border-rose-500/40",
    accent: "text-rose-500",
    titleHover: "group-hover:text-rose-500",
    tag: "bg-rose-500/10 text-rose-600 dark:text-rose-300",
  },
];

interface Props {
  index: number;
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectRow({
  index,
  title,
  href,
  description,
  tags,
  image,
  video,
  links,
}: Props) {
  const hasMedia = Boolean(video || image);
  const palette = PALETTES[0];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const previewRef = useRef<HTMLVideoElement>(null);

  const handleEnlarge = () => {
    // On touch devices, hand off to the OS-native player instead of the
    // hover-based custom lightbox (which has no usable controls on mobile).
    const isTouch =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      const el = previewRef.current as IOSVideoElement | null;
      if (el) {
        el.muted = false;
        if (typeof el.webkitEnterFullscreen === "function") {
          el.webkitEnterFullscreen();
          return;
        }
        if (typeof el.requestFullscreen === "function") {
          el.requestFullscreen();
          return;
        }
      }
    }

    setLightboxOpen(true);
  };

  const mediaInner = (
    <div className="aspect-[16/10] w-full overflow-hidden">
      {video ? (
        <video
          ref={previewRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        image && (
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )
      )}
    </div>
  );

  return (
    <article
      className={cn(
        "group flex h-full scroll-mt-6 flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg",
        palette.border
      )}
    >
      {/* Media — full bleed top of the card */}
      {hasMedia &&
        (video ? (
          <button
            type="button"
            onClick={handleEnlarge}
            aria-label={`Play ${title} video`}
            className="relative block w-full cursor-pointer overflow-hidden bg-muted text-left"
          >
            {mediaInner}
            {/* Fullscreen affordance */}
            <span className="pointer-events-none absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <Maximize2 className="size-4" />
            </span>
          </button>
        ) : (
          <Link
            href={href || "#"}
            target={href ? "_blank" : undefined}
            className="relative block w-full overflow-hidden bg-muted"
          >
            {mediaInner}
          </Link>
        ))}

      {video && (
        <VideoLightbox
          src={video}
          title={title}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* Content */}
      <div className="flex w-full flex-1 flex-col p-3 md:p-4">
        <Link
          href={href || "#"}
          target={href ? "_blank" : undefined}
          className="inline-flex w-fit items-center gap-2"
        >
          <h3
            className={cn(
              "text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl",
              palette.titleHover
            )}
          >
            {title}
          </h3>
          <span
            aria-hidden
            className={cn(
              "translate-y-0.5 text-base text-muted-foreground transition-all duration-300 group-hover:translate-x-1",
              palette.titleHover
            )}
          >
            ↗
          </span>
        </Link>

        <Markdown className="prose mt-2 max-w-full text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>

        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
                  palette.tag
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="mt-4 flex flex-row flex-wrap items-center gap-3 pt-1">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.icon}
                <span className="border-b border-transparent transition-colors group-hover/link:border-foreground">
                  {link.type}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
