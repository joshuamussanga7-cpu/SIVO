import type { Metadata } from "next";
import PreviewPage from "@/components/PreviewPage";

export const metadata: Metadata = { title: "Activity | SIVO" };

export default function ActivityPage() { return <PreviewPage kind="activity" />; }