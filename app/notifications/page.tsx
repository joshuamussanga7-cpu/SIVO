import type { Metadata } from "next";
import PreviewPage from "@/components/PreviewPage";

export const metadata: Metadata = { title: "Notifications | SIVO" };

export default function NotificationsPage() { return <PreviewPage kind="notifications" />; }