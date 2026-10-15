import type { Metadata } from "next";
import AuthForm from "@/components/AuthForm";

export const metadata: Metadata = { title: "Reset password | SIVO", description: "SIVO password recovery interface preview." };

export default function ForgotPasswordPage() { return <AuthForm mode="reset" />; }