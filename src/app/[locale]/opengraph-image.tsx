import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export const alt = "Louis Rotellini, AI Product Engineer";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage();
}
