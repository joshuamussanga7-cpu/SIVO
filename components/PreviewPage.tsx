"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Bell, CircleDollarSign, Clock3, Compass, Gift, HelpCircle, Layers3, ShieldCheck, Sparkles, Trophy, Users, Wallet, Zap } from "lucide-react";

type ScreenKind = "earn" | "wallet" | "referrals" | "achievements" | "profile" | "support" | "notifications" | "activity" | "privacy" | "terms";

const screens: Record<ScreenKind, { title: string; description: string; items: { icon: typeof Compass; title: string; description: string; value?: string }[]; note: string }> = {
  earn: {
    title: "Find your next opportunity",
    description: "Explore sample opportunity cards and see how task details may be organized. Live tasks and real rewards are not connected yet.",
    items: [
      { icon: Compass, title: "Consumer habits survey", description: "Share feedback on everyday products. Sample estimate: 8–10 minutes.", value: "Sample $1.80" },
      { icon: Layers3, title: "Try a productivity app", description: "A partner offer example. Real offers will show eligibility and completion rules.", value: "Sample $3.50" },
      { icon: Sparkles, title: "Categorize a short data set", description: "An illustrative microtask with clear instructions and a review state.", value: "Sample $0.75" },
      { icon: CircleDollarSign, title: "Research panel questionnaire", description: "Example research task. Availability depends on location and profile.", value: "Sample $2.10" },
      { icon: Zap, title: "Explore a digital service", description: "A promotional task example; partner terms would be shown before starting.", value: "Sample $1.25" },
      { icon: BadgeCheck, title: "Profile eligibility check", description: "Keep your profile complete to help match eligible opportunities.", value: "Profile task" },
    ],
    note: "Important: these are placeholder examples, not live offers. Do not spend money or share sensitive information to complete tasks unless the real provider, costs, terms and data use have been clearly verified.",
  },
  wallet: {
    title: "Your wallet",
    description: "A clear overview of available, pending and lifetime reward totals. All values below are illustrative interface data only.",
    items: [
      { icon: Wallet, title: "Available balance", description: "Only approved, eligible rewards would be considered for withdrawal under the final policy.", value: "Sample $24.80" },
      { icon: Clock3, title: "Pending rewards", description: "Submitted rewards may remain pending while a provider validates completion.", value: "Sample $6.05" },
      { icon: CircleDollarSign, title: "Lifetime approved", description: "A historical total of approved rewards after reconciliation.", value: "Sample $82.40" },
    ],
    note: "Wallet accounting and payouts are not connected. No amount shown here is real, payable or withdrawable. The production wallet must use server-side ledger entries and reconciliation.",
  },
  referrals: {
    title: "Invite people you know",
    description: "Referral tracking is planned, with eligibility, anti-abuse rules and reward timing made clear before launch.",
    items: [
      { icon: Users, title: "Your invitations", description: "Track which invitations have been sent and accepted.", value: "Sample 0 invites" },
      { icon: Gift, title: "Eligible referrals", description: "Only referrals that meet published requirements may qualify.", value: "Sample 0 eligible" },
      { icon: ShieldCheck, title: "Fair-use checks", description: "Self-referrals, duplicate accounts and manipulated activity would be prohibited.", value: "Rules pending" },
    ],
    note: "No referral link or bonus is active yet. Referral rewards will not be promised until tracking, fraud controls and the applicable terms are implemented.",
  },
  achievements: {
    title: "Your progress, recognized",
    description: "Achievements can help make progress visible without promising guaranteed earnings.",
    items: [
      { icon: Sparkles, title: "First steps", description: "A sample milestone for completing onboarding.", value: "Planned" },
      { icon: Trophy, title: "Consistency streak", description: "A sample badge for consistent eligible activity.", value: "Planned" },
      { icon: BadgeCheck, title: "Quality contributor", description: "Recognition may depend on provider-approved task quality.", value: "Planned" },
    ],
    note: "Achievements are a design preview only. Any rewards linked to achievements must be defined in the final rules and verified server-side.",
  },
  profile: {
    title: "Your profile",
    description: "Manage account details, notification preferences and security options in one place.",
    items: [
      { icon: Users, title: "Personal details", description: "Profile information and account preferences.", value: "Not connected" },
      { icon: ShieldCheck, title: "Verification", description: "Identity checks may be requested when required by law, payment partners or risk controls.", value: "Not connected" },
      { icon: Bell, title: "Notifications", description: "Choose which account and task updates you receive.", value: "Not connected" },
    ],
    note: "Profile changes and verification are not connected. Do not submit identity documents through this prototype.",
  },
  support: {
    title: "How can we help?",
    description: "The support area will help users understand task reviews, account restrictions, payout status and appeal options.",
    items: [
      { icon: HelpCircle, title: "Task and reward questions", description: "Understand pending, rejected and approved reward states.", value: "Help center planned" },
      { icon: Wallet, title: "Withdrawal support", description: "Get clarity about payout eligibility, fees and processing status.", value: "Help center planned" },
      { icon: ShieldCheck, title: "Account review or appeal", description: "A structured route for account and reward decisions.", value: "Appeals flow planned" },
    ],
    note: "Support channels are not live yet. The final support and appeal process will be published before launch.",
  },
  notifications: {
    title: "Your updates",
    description: "Important account, task-review and payout updates will appear here when notification services are connected.",
    items: [
      { icon: Bell, title: "Task status updates", description: "See when a submitted task moves to pending, approved or rejected.", value: "Planned" },
      { icon: Wallet, title: "Wallet activity", description: "Receive updates about reward approvals and withdrawal requests.", value: "Planned" },
      { icon: ShieldCheck, title: "Account and security", description: "Get relevant notices about verification, sign-ins and account reviews.", value: "Planned" },
    ],
    note: "Notifications are not connected and no messages shown here represent actual account activity.",
  },
  activity: {
    title: "Your activity",
    description: "A single timeline for task submissions, reward decisions and payout updates. The entries below are examples, not real account activity.",
    items: [
      { icon: Compass, title: "Consumer habits survey", description: "Example task submission · Status: pending review", value: "Sample +$1.80" },
      { icon: BadgeCheck, title: "Productivity app offer", description: "Example provider confirmation · Status: approved", value: "Sample +$3.50" },
      { icon: Wallet, title: "Withdrawal request", description: "Example payout request · No payment service is connected", value: "Sample −$10.00" },
    ],
    note: "This activity timeline is illustrative. In production, each entry must be generated from verified server-side events and the wallet ledger, not client-submitted values.",
  },
  privacy: {
    title: "Privacy policy",
    description: "The SIVO privacy policy is not published yet. It will be adapted from the existing SAVI policy only after its exact text is reviewed and SIVO’s own providers, data flows and legal responsibilities are confirmed.",
    items: [],
    note: "This is not a privacy policy and must not be treated as legal notice or consent. Do not submit personal or sensitive information to this prototype.",
  },
  terms: {
    title: "Terms of service",
    description: "SIVO’s terms are still under review. The final document must describe eligibility, task provider rules, reward validation, withdrawal conditions, prohibited activity, account decisions and appeals accurately.",
    items: [],
    note: "This is not a binding terms document. The service must not launch to real users until the final terms and related policies have been reviewed and published.",
  },
};

export default function PreviewPage({ kind }: { kind: ScreenKind }) {
  const screen = screens[kind];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = useMemo(() => {
    if (kind !== "earn" || !searchTerm.trim()) return screen.items;
    const query = searchTerm.trim().toLowerCase();
    return screen.items.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(query));
  }, [kind, searchTerm, screen.items]);
  return (
    <main className="site-shell" style={{ minHeight: "100vh" }}>
      <div className="container" style={{ paddingBottom: 50 }}>
        <header className="topbar">
          <Link className="brand" href="/"><span className="brand-mark"><Zap size={20} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></Link>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link className="text-link" href="/dashboard" style={{ fontSize: 12 }}>Dashboard</Link>
            <Link className="btn btn-secondary" href="/"><ArrowLeft size={14} /> Back home</Link>
          </div>
        </header>
        <div className="secondary-screen">
          <div className="secondary-heading">
            <div className="section-kicker">SIVO · Interface preview</div>
            <h1>{screen.title}</h1>
            <p>{screen.description}</p>
          </div>
          {kind === "earn" && <div className="secondary-toolbar"><input className="secondary-search" aria-label="Search sample opportunities" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search sample opportunities..." /><span style={{ color: "#8290a7", fontSize: 11 }}>{filteredItems.length} sample {filteredItems.length === 1 ? "opportunity" : "opportunities"}</span></div>}
          {screen.items.length > 0 && <div className="secondary-grid">
            {screen.items.map((item) => {
              const Icon = item.icon;
              return <article className="secondary-item" key={item.title}>
                <div className="category-icon"><Icon size={21} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.value && <div className="task-reward">{item.value}</div>}
              </article>;
            })}
          </div>}
          <div className="secondary-note"><strong style={{ color: "#b7fff5" }}>Prototype notice: </strong>{screen.note}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 23 }}>
            <Link href="/dashboard" className="btn btn-primary">View dashboard <ArrowRight size={14} /></Link>
            {kind === "wallet" && <Link href="/wallet/withdraw" className="btn btn-secondary">Withdrawal preview <Wallet size={14} /></Link>}{kind !== "earn" && <Link href="/earn" className="btn btn-secondary">Explore opportunities <Compass size={14} /></Link>}{kind === "activity" && <Link href="/wallet" className="btn btn-secondary">Open wallet <Wallet size={14} /></Link>}
          </div>
        </div>
        <footer className="footer" style={{ marginTop: 60 }}>
          <Link className="brand" href="/" style={{ fontSize: 19 }}><span className="brand-mark" style={{ width: 28, height: 28, borderRadius: 9 }}><Zap size={16} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></Link>
          <span>© {new Date().getFullYear()} SIVO · Preview only</span>
          <div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link></div>
        </footer>
      </div>
    </main>
  );
}