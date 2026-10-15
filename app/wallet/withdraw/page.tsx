import type { Metadata } from "next";
import WithdrawalPreview from "@/components/WithdrawalPreview";

export const metadata: Metadata = { title: "Withdraw | SIVO", description: "SIVO withdrawal request interface preview." };

export default function WithdrawPage() { return <WithdrawalPreview />; }