import { Project } from "@/components/MediaGallery";
import { rawMediaFilenames } from "@/data/rawMediaFilenames";
import { realMediaUrls } from "@/data/realMediaUrls";

function toSlugId(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Dado que aún no tenemos hosting para imágenes propias, usamos placeholders variados
function pickRealUrl(idx: number) {
    return realMediaUrls[idx % realMediaUrls.length];
}

function inferTagsFromName(name: string): string[] {
    const lower = name.toLowerCase();
    const tags: string[] = [];
    if (lower.includes("cauca")) tags.push("Cauca");
    if (lower.includes("antioquia")) tags.push("Antioquia");
    if (lower.includes("amazonas")) tags.push("Amazonas");
    if (lower.includes("bogota")) tags.push("Bogotá");
    if (lower.includes("popayan")) tags.push("Popayán");
    if (lower.includes("marmato")) tags.push("Marmato");
    if (lower.includes("ituango")) tags.push("Hidroituango");
    if (lower.includes("cacao")) tags.push("Cacao");
    if (lower.includes("ganader")) tags.push("Ganadería");
    if (lower.includes("riesgo")) tags.push("Gestión del riesgo");
    if (lower.includes("educaci")) tags.push("Educación");
    if (lower.includes("minero")) tags.push("Minería");
    if (lower.includes("cartografia")) tags.push("Cartografía");
    return tags.length ? tags : ["Territorio"];
}

export const sampleProjects: Project[] = [
    {
        id: toSlugId("Transición energética comunitaria"),
        title: "Transición energética comunitaria",
        category: "Transición Energética",
        media: rawMediaFilenames.slice(0, 8).map((name, i) => ({
            type: "image",
            url: pickRealUrl(i),
            alt: name,
            tags: inferTagsFromName(name),
        })),
    },
    {
        id: toSlugId("Economía social y productiva"),
        title: "Economía social y productiva",
        category: "Economía Social",
        media: rawMediaFilenames.slice(8, 16).map((name, i) => ({
            type: "image",
            url: pickRealUrl(i + 8),
            alt: name,
            tags: inferTagsFromName(name),
        })),
    },
    {
        id: toSlugId("Gestión del riesgo y resiliencia"),
        title: "Gestión del riesgo y resiliencia",
        category: "Resiliencia",
        media: rawMediaFilenames.slice(16, 28).map((name, i) => ({
            type: "image",
            url: pickRealUrl(i + 16),
            alt: name,
            tags: inferTagsFromName(name),
        })),
    },
    {
        id: toSlugId("Cultura y derechos humanos"),
        title: "Cultura y derechos humanos",
        category: "Desarrollo Social",
        media: rawMediaFilenames.slice(28, 40).map((name, i) => ({
            type: "image",
            url: pickRealUrl(i + 28),
            alt: name,
            tags: inferTagsFromName(name),
        })),
    },
];
