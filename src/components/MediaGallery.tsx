"use client";

import Image from "next/image";
import { useMemo } from "react";

export type MediaItem = {
  type: "image" | "video";
  url: string;
  alt?: string;
  width?: number; // preferencia de tamaño (cols)
  height?: number; // preferencia de tamaño (rows)
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  location?: string;
  category?: string;
  media: MediaItem[];
};

export default function MediaGallery({
  projects,
  imageBaseSize = 240,
}: {
  projects: Project[];
  imageBaseSize?: number;
}) {
  const items = useMemo(() => {
    const merged: Array<MediaItem & { projectId: string; projectTitle: string } > = [];
    projects.forEach((p) => {
      p.media.forEach((m) => merged.push({ ...m, projectId: p.id, projectTitle: p.title }));
    });
    return merged;
  }, [projects]);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m, idx) => {
        const colSpan = m.width && m.width >= 2 ? "sm:col-span-2" : "";
        const lgColSpan = m.width && m.width >= 3 ? "lg:col-span-3" : "";
        const heightPx = imageBaseSize * (m.height && m.height > 0 ? m.height : 1);
        return (
          <figure
            key={`${m.projectId}-${idx}`}
            className={`group relative overflow-hidden rounded-xl border border-black/5 bg-white ${colSpan} ${lgColSpan}`}
          >
          {m.type === "image" ? (
            <div className="relative" style={{ height: heightPx, background: "#f8fafc" }}>
              <Image
                src={m.url}
                alt={m.alt || m.projectTitle}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
            </div>
          ) : (
            <div className="relative" style={{ height: heightPx }}>
              <video className="h-full w-full object-cover" src={m.url} controls playsInline />
            </div>
          )}
          <figcaption className="p-3 text-sm text-gray-800">
            <div className="font-medium line-clamp-1">{m.projectTitle}</div>
            {m.tags && m.tags.length > 0 ? (
              <div className="mt-1 flex flex-wrap gap-1">
                {m.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-muted text-xs text-gray-700 border border-black/5">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
