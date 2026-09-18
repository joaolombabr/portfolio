import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata: Metadata = buildMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
