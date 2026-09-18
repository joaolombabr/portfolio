import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "João Paulo Lomba — AI Automation Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("en");
}
