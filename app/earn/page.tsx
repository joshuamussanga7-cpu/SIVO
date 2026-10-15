import type { Metadata } from "next";
import PreviewPage from "@/components/PreviewPage";

export const metadata: Metadata = { title: "Earn | SIVO" };

export default function Page() { return <PreviewPage kind="earn" />; }