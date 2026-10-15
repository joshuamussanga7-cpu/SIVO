"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Compass,
  Gift,
  Globe2,
  Layers3,
  LockKeyhole,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  Wallet,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Compass, title: "Surveys & research", text: "Share your opinions and help brands understand real people." },
  { icon: Layers3, title: "Apps & offers", text: "Explore eligible apps, trials and partner promotions." },
  { icon: Target, title: "Microjobs", text: "Take on clear, bite-sized digital tasks at your own pace." },
  { icon: Sparkles, title: "AI data tasks", text: "Help improve digital experiences through supported data tasks." },
];

const tasks = [
  { icon: BarChart3, title: "Consumer habits survey", detail: "8–10 min · Survey", reward: "$1.80", tint: "survey" },
  { icon: Zap, title: "Explore a productivity app", detail: "12 min · Offer", reward: "$3.50", tint: "app" },
  { icon: MousePointer2, title: "Complete a quick digital task", detail: "5 min · Microjob", reward: "$0.75", tint: "job" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="container">
        <header className="topbar">
          <a className="brand" href="#" aria-label="SIVO home">
            <span className="brand-mark"><Zap size={20} fill="currentColor" /></span>
            SIVO<span style={{ color: "var(--cyan)" }}>.</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#opportunities">Opportunities</a>
            <a href="#how-it-works">How it works</a>
            <a href="#why-sivo">Why SIVO</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a className="text-link" href="/login">Log in</a>
            <a className="btn btn-primary" href="/register">Get started <ArrowUpRight size={15} /></a>
          </div>
        </header>

        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <div className="eyebrow"><span className="pulse-dot" /> Your next opportunity starts here</div>
            <h1 className="display-font">Turn your time into <span className="gradient-text">opportunity.</span></h1>
            <p className="hero-copy">Discover surveys, digital offers, microjobs and more — all in one place. Choose what fits your time, complete eligible tasks, and track your progress with SIVO.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/register">Start exploring <ArrowRight size={16} /></a>
              <a className="btn btn-secondary" href="#how-it-works"><Play size={14} /> See how it works</a>
            </div>
            <div className="trust-row">
              <span className="trust-item"><Globe2 size={14} /> Built for a global audience</span>
              <span className="trust-item"><ShieldCheck size={14} /> Security-minded by design</span>
            </div>
          </motion.div>

          <motion.div className="preview-wrap" initial={{ opacity: 0, y: 25, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="preview-glow" />
            <div className="float-chip float-chip-one">
              <span className="chip-symbol"><CircleDollarSign size={17} /></span>
              <span><strong>More ways to earn</strong><small>Find your next task</small></span>
            </div>
            <div className="dashboard-preview">
              <div className="preview-top">
                <span>YOUR SIVO SPACE</span>
                <span className="preview-user"><span className="avatar">S</span> Your dashboard</span>
              </div>
              <div className="balance-card">
                <div className="balance-label">Illustrative earnings overview</div>
                <div className="balance-number">$24.80</div>
                <div className="balance-foot">
                  <span><span className="positive">↗ 12.8%</span> <span>sample progress</span></span>
                  <span className="mini-cta">View wallet <ArrowUpRight size={12} /></span>
                </div>
              </div>
              <div className="preview-section-head"><span>Opportunities for you</span><span>Explore all <ArrowRight size={11} /></span></div>
              <div className="task-preview-list">
                {tasks.map((task) => {
                  const Icon = task.icon;
                  return (
                    <div className="task-preview" key={task.title}>
                      <div className="task-icon"><Icon size={17} /></div>
                      <div className="task-meta"><div className="task-title">{task.title}</div><div className="task-subtitle">{task.detail}</div></div>
                      <div className="task-reward">{task.reward}</div>
                    </div>
                  );
                })}
              </div>
              <div className="preview-bottom">
                <span><Compass size={13} /> Discover</span><span><Wallet size={13} /> Wallet</span><span><BarChart3 size={13} /> Activity</span>
              </div>
            </div>
            <div className="float-chip float-chip-two">
              <span className="chip-symbol"><BadgeCheck size={17} /></span>
              <span><strong>Progress, made clear</strong><small>Know where you stand</small></span>
            </div>
          </motion.div>
        </section>

        <section className="stats-strip" aria-label="SIVO principles">
          <div className="stat"><strong>One place</strong><span>Multiple task categories</span></div>
          <div className="stat"><strong>Your pace</strong><span>Choose what fits your time</span></div>
          <div className="stat"><strong>Clear status</strong><span>Track task progress</span></div>
          <div className="stat"><strong>Global-minded</strong><span>Availability varies by region</span></div>
        </section>

        <section className="section" id="opportunities">
          <div className="section-heading">
            <div className="section-kicker">Explore opportunities</div>
            <h2 className="section-title">Different ways to make your time count.</h2>
            <p className="section-copy">Find opportunities that match your interests, device and availability. Actual tasks and rewards depend on eligibility, partner rules and location.</p>
          </div>
          <div className="category-grid">
            {categories.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a href="/register" className="category-card" key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .4, delay: index * .07 }}>
                  <Icon className="category-arrow" size={17} />
                  <div className="category-icon"><Icon size={22} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.a>
              );
            })}
          </div>
        </section>

        <section className="section" id="how-it-works" style={{ paddingTop: 28 }}>
          <div className="section-heading">
            <div className="section-kicker">Simple by design</div>
            <h2 className="section-title">A clearer path from task to reward.</h2>
            <p className="section-copy">SIVO is being built to make the process understandable at every step — from discovering an opportunity to tracking its status.</p>
          </div>
          <div className="how-grid">
            <div className="how-card"><div className="step-number">STEP 01 / DISCOVER</div><h3>Find your fit.</h3><p>Browse available tasks and review the requirements, estimated time and reward details before you begin.</p></div>
            <div className="how-card"><div className="step-number">STEP 02 / COMPLETE</div><h3>Follow the instructions.</h3><p>Complete the task honestly and meet the provider’s conditions. Some tasks require review before approval.</p></div>
            <div className="how-card"><div className="step-number">STEP 03 / TRACK</div><h3>See your progress.</h3><p>Track submitted, pending and approved rewards in one place. Eligible approved balances can be withdrawn under the applicable rules.</p></div>
          </div>
        </section>

        <section className="section" id="why-sivo" style={{ paddingTop: 22 }}>
          <div className="why-panel">
            <div>
              <div className="section-kicker">Built around clarity</div>
              <h2 className="section-title">A platform that respects your time.</h2>
              <p className="section-copy" style={{ marginLeft: 0 }}>We want the experience to feel straightforward: clear task details, transparent statuses and account controls designed with care.</p>
              <a className="btn btn-secondary" href="#faq" style={{ marginTop: 25 }}>Learn about SIVO <ArrowDownRight size={15} /></a>
            </div>
            <div className="feature-list">
              <div className="feature"><span className="feature-check"><Check size={15} /></span><div><h3>Know the requirements first</h3><p>Review task instructions and eligibility before you spend your time.</p></div></div>
              <div className="feature"><span className="feature-check"><Check size={15} /></span><div><h3>Understand reward status</h3><p>Submitted rewards may remain pending until a provider confirms completion.</p></div></div>
              <div className="feature"><span className="feature-check"><Check size={15} /></span><div><h3>Designed with account safety in mind</h3><p>Security checks and fair-use controls help protect the platform and its users.</p></div></div>
              <div className="feature"><span className="feature-check"><Check size={15} /></span><div><h3>Room to grow</h3><p>Achievements, referrals and new task types can expand as the platform develops.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section" id="faq" style={{ paddingTop: 15, paddingBottom: 20 }}>
          <div className="final-cta">
            <div className="section-kicker">Your next step</div>
            <h2 className="section-title">Ready to explore what’s possible?</h2>
            <p className="section-copy">Create your SIVO account when registration opens and discover opportunities available to you.</p>
            <a className="btn btn-primary" href="/register">Get started with SIVO <ArrowRight size={16} /></a>
            <p style={{ color: "#78869d", fontSize: 10, lineHeight: 1.7, maxWidth: 660, margin: "20px auto 0" }}>SIVO is not a promise of guaranteed income. Opportunities, eligibility, rewards and payout methods vary by provider and country. The dashboard above is illustrative and does not represent real users, live tasks or actual balances.</p>
          </div>
        </section>

        <footer className="footer">
          <a className="brand" href="#" style={{ fontSize: 19 }}><span className="brand-mark" style={{ width: 28, height: 28, borderRadius: 9 }}><Zap size={16} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></a>
          <span>© {new Date().getFullYear()} SIVO. Earn. Explore. Evolve.</span>
          <div className="footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/support">Support</a></div>
        </footer>
      </div>
    </main>
  );
}