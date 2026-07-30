"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lightweight YouTube embed: shows only the thumbnail until clicked,
 * then swaps in the real iframe (keeps the landing fast).
 */
export function YouTubeLite({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-black">
        <iframe
          className="size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        className="size-full object-cover transition duration-300 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
        <span className="grid size-14 place-items-center rounded-full bg-white/95 shadow-lg transition group-hover:scale-110">
          <Play className="ml-0.5 size-6 fill-primary text-primary" />
        </span>
      </span>
    </button>
  );
}
