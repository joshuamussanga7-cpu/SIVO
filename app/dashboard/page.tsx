"use client";

import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Bell, CheckCircle2, Clock3, Compass, HelpCircle,
  LayoutDashboard, Settings, ShieldCheck, Sparkles, Trophy, Users, Wallet, Zap
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard, active: true },
  { label: "Find opportunities", href: "/earn", icon: Compass },
  { label: "My wallet", href: "/wallet", icon: Wallet },
  { label: "Referrals", href: "/referrals", icon: Users },
  { label: "Achievements", href: "/achievements", icon: Trophy },
];
const recentTasks = [
  { icon: Compass, title: "Consumer habits survey", detail: "Survey · 8–10 min", reward: "$1.80", status: "Pending", pending: true },
  { icon: Zap, title: "Productivity app offer", detail: "Offer · Android", reward: "$3.50", status: "Approved", pending: false },
  { icon: Sparkles, title: "Quick data categorization", detail: "Microjob · 5 min", reward: "$0.75", status: "Pending", pending: true },
];

export default function DashboardPage() {
  return (
    <main className="app-layout">
      <aside className="app-sidebar">
        <Link className="brand" href="/"><span className="brand-mark"><Zap size={20} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></Link>
        <div style={{ width: "100%" }}>
          <div className="sidebar-label" style={{ marginBottom: 10 }}>Workspace</div>
          <nav className="sidebar-nav" aria-label="Dashboard navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              return <Link className={item.active ? "active" : ""} href={item.href} key={item.label}><Icon size={17} /><span>{item.label}</span></Link>;
            })}
          </nav>
        </div>
        <div style={{ width: "100%" }}>
          <div className="sidebar-label" style={{ marginBottom: 10 }}>Account</div>
          <nav className="sidebar-nav">
            <Link href="/profile"><Settings size={17} /><span>Profile & settings</span></Link>
            <Link href="/support"><HelpCircle size={17} /><span>Help & support</span></Link>
          </nav>
        </div>
        <div className="sidebar-bottom"><ShieldCheck size={17} style={{ color: "var(--cyan)", marginBottom: 8 }} /><br /><strong style={{ color: "#dce5f4" }}>Stay protected</strong><br />Use one account and follow each task provider’s rules to keep your account in good standing.</div>
      </aside>

      <section className="app-main">
        <div className="app-topbar">
          <div><h1>Welcome to your space <span style={{ color: "var(--cyan)" }}>↗</span></h1><p>Here’s a quick look at your SIVO activity.</p></div>
          <div className="app-top-actions"><button className="icon-button" aria-label="Notifications"><Bell size={17} /></button><span className="avatar" style={{ width: 38, height: 38 }}>S</span></div>
        </div>
        <div className="prototype-banner"><strong style={{ color: "#a7fff4" }}>Preview mode.</strong> Figures and tasks below are sample data for interface review only. They are not real balances, live offers or withdrawable earnings. Account, provider and payout services are not connected.</div>

        <div className="dash-grid">
          <div className="dash-card"><div className="dash-card-label">Illustrative available balance <span className="dash-card-icon"><Wallet size={17} /></span></div><div className="dash-card-value">$24.80</div><div className="dash-card-note">Sample UI value · Not withdrawable</div></div>
          <div className="dash-card"><div className="dash-card-label">Pending rewards <span className="dash-card-icon"><Clock3 size={17} /></span></div><div className="dash-card-value">$6.05</div><div className="dash-card-note">Sample status awaiting review</div></div>
          <div className="dash-card"><div className="dash-card-label">Tasks completed <span className="dash-card-icon"><CheckCircle2 size={17} /></span></div><div className="dash-card-value">12</div><div className="dash-card-note">Illustrative activity count</div></div>
        </div>

        <div className="dash-lower">
          <section className="dash-card">
            <div className="dash-panel-title"><span>Recent task activity</span><Link href="/earn">Explore tasks <ArrowRight size={12} style={{ display: "inline", verticalAlign: "middle" }} /></Link></div>
            {recentTasks.map((task) => {
              const Icon = task.icon;
              return <div className="dash-task" key={task.title}>
                <div className="task-icon"><Icon size={17} /></div>
                <div className="task-meta"><div className="task-title">{task.title}</div><div className="task-subtitle">{task.detail}</div></div>
                <div style={{ textAlign: "right" }}><div className="task-reward" style={{ marginBottom: 7 }}>{task.reward}</div><span className={task.pending ? "status-pill" : "status-pill approved"}>{task.pending ? <Clock3 size={10} /> : <CheckCircle2 size={10} />}{task.status}</span></div>
              </div>;
            })}
          </section>

          <section style={{ display: "grid", gap: 14, alignContent: "start" }}>
            <div className="dash-card">
              <div className="dash-panel-title"><span>Your weekly rhythm</span><span style={{ color: "#8e9bb1", fontSize: 10 }}>Sample</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 10 }}><strong style={{ font: "600 25px 'Space Grotesk', sans-serif" }}>4 of 7 days</strong><span style={{ color: "var(--cyan)", fontSize: 10 }}>57%</span></div>
              <div className="progress-track"><span style={{ width: "57%" }} /></div>
              <p style={{ color: "#8794aa", fontSize: 10, lineHeight: 1.7, margin: "12px 0 0" }}>A sample progress component. Real activity tracking will be connected later.</p>
            </div>
            <div className="dash-referral">
              <Sparkles size={20} style={{ color: "#b9a6ff" }} />
              <h3>Grow together.</h3>
              <p>Referral rewards can be added after referral rules and tracking are implemented.</p>
              <Link href="/referrals" className="btn btn-secondary" style={{ padding: "10px 12px", fontSize: 10 }}>Referral preview <ArrowUpRight size={13} /></Link>
            </div>
          </section>
        </div>
        <footer style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap", color: "#6f7d94", fontSize: 10, marginTop: 30, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
          <span>© {new Date().getFullYear()} SIVO · Prototype interface</span>
          <span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/support">Support</Link></span>
        </footer>
      </section>
    </main>
  );
}