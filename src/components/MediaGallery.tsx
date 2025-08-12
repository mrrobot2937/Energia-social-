"use client";

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

export default function MediaGallery({ projects }: { projects: Project[] }) {
  const items = useMemo(() => {
    const merged: Array<MediaItem & { projectId: string; projectTitle: string } > = [];
    projects.forEach((p) => {
      p.media.forEach((m) => merged.push({ ...m, projectId: p.id, projectTitle: p.title }));
    });
    return merged;
  }, [projects]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m, idx) => {
        const colSpan = m.width && m.width >= 2 ? "sm:col-span-2" : "";
        const lgColSpan = m.width && m.width >= 3 ? "lg:col-span-3" : "";
        return (
          <figure
            key={`${m.projectId}-${idx}`}
            className={`group rounded-xl border border-black/5 bg-white ${colSpan} ${lgColSpan}`}
          >
            {m.type === "image" ? (
              <img
                src={m.url}
                alt={m.alt || m.projectTitle}
                className="w-full h-auto object-contain bg-muted"
                loading="lazy"
              />
            ) : (
              <video className="w-full h-auto bg-black" src={m.url} controls playsInline />
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
