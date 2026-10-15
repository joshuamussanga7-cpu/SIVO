import type { Metadata } from "next";
import PreviewPage from "@/components/PreviewPage";

export const metadata: Metadata = { title: "Privacy | SIVO" };

export default function Page() { return <PreviewPage kind="privacy" />; }