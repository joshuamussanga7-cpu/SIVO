"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";

type AuthFormProps = { mode: "login" | "register" };

export default function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("This is the SIVO UI prototype. Account services are not connected yet, so no account has been created and no information has been sent.");
  }

  return (
    <main className="auth-shell">
      <aside className="auth-story">
        <Link className="brand" href="/"><span className="brand-mark"><Zap size={20} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></Link>
        <div className="auth-story-content">
          <div className="eyebrow"><span className="pulse-dot" /> Earn. Explore. Evolve.</div>
          <h1>Make room for your next <span className="gradient-text">opportunity.</span></h1>
          <p>One place to discover digital tasks, follow your progress and explore new ways to put your time to work.</p>
          <div className="auth-points">
            <div className="auth-point"><CheckCircle2 size={17} /> See task requirements before you start</div>
            <div className="auth-point"><CheckCircle2 size={17} /> Track pending and approved rewards clearly</div>
            <div className="auth-point"><ShieldCheck size={17} /> Account safety built into the roadmap</div>
          </div>
        </div>
        <div style={{ color: "#77859c", fontSize: 11 }}>© {new Date().getFullYear()} SIVO · Frontend preview</div>
      </aside>

      <section className="auth-main">
        <div style={{ width: "min(100%, 430px)" }}>
          <Link href="/" className="auth-back"><ArrowLeft size={14} /> Back to SIVO</Link>
          <div className="auth-card" style={{ marginTop: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--cyan)", fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 20 }}>
              <Sparkles size={15} /> SIVO ACCOUNT
            </div>
            <h2>{isRegister ? "Create your account" : "Welcome back"}</h2>
            <p className="auth-subtitle">{isRegister ? "Start with your details. Registration will be enabled after the account system is implemented." : "Sign-in services are not live yet. This screen is part of the current interface prototype."}</p>
            <form className="auth-form" onSubmit={handleSubmit}>
              {isRegister && <label className="form-field">Full name<input name="name" autoComplete="name" placeholder="Enter your full name" required /></label>}
              <label className="form-field">Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
              <label className="form-field">Password<input name="password" type="password" autoComplete={isRegister ? "new-password" : "current-password"} placeholder={isRegister ? "Create a strong password" : "Enter your password"} minLength={8} required /></label>
              {isRegister && <p style={{ margin: "0", color: "#8794aa", fontSize: 10, lineHeight: 1.7 }}>By continuing, you acknowledge that SIVO’s registration and legal acceptance flows are not active in this prototype.</p>}
              <button className="btn btn-primary" type="submit">{isRegister ? "Create account" : "Log in"} <ArrowRight size={15} /></button>
              {notice && <div className="auth-notice" role="status">{notice}</div>}
            </form>
            <div className="auth-switch">
              {isRegister ? <>Already have an account? <Link href="/login">Log in</Link></> : <>New to SIVO? <Link href="/register">Create an account</Link></>}
            </div>
            <div className="auth-footnote">Never share your password with anyone. SIVO will not ask you to pay a fee just to create an account.</div>
          </div>
        </div>
      </section>
    </main>
  );
}