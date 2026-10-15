"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Banknote, Clock3, ShieldCheck, Smartphone, Wallet, Zap } from "lucide-react";

const methods = [
  { id: "digital-wallet", title: "Digital payment provider", detail: "Availability depends on country and provider", icon: Wallet },
  { id: "bank", title: "Bank transfer", detail: "Supported regions and fees to be confirmed", icon: Banknote },
  { id: "mobile-money", title: "Mobile money", detail: "Only where a contracted provider supports it", icon: Smartphone },
];

export default function WithdrawalPreview() {
  const [amount, setAmount] = useState("10.00");
  const [method, setMethod] = useState("digital-wallet");
  const [notice, setNotice] = useState("");
  const parsedAmount = Number(amount);
  const validAmount = Number.isFinite(parsedAmount) && parsedAmount >= 10 && parsedAmount <= 24.8;
  const illustrativeFee = validAmount ? Math.min(0.3, parsedAmount * 0.03) : 0;
  const illustrativeReceive = validAmount ? parsedAmount - illustrativeFee : 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Preview only: withdrawal requests are not connected. Nothing has been submitted and no payment will be made.");
  }

  return (
    <main className="site-shell" style={{ minHeight: "100vh" }}>
      <div className="container" style={{ paddingBottom: 55 }}>
        <header className="topbar">
          <Link className="brand" href="/"><span className="brand-mark"><Zap size={20} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></Link>
          <Link className="btn btn-secondary" href="/wallet"><ArrowLeft size={14} /> Back to wallet</Link>
        </header>
        <section className="withdraw-layout">
          <div>
            <div className="section-kicker">SIVO · Wallet preview</div>
            <h1 className="withdraw-title">Withdraw your rewards.</h1>
            <p className="withdraw-copy">A preview of the future withdrawal flow, designed to show the amount, payout method, fee disclosure and review step clearly.</p>
            <div className="withdraw-balance"><div className="withdraw-balance-top"><span>Illustrative available balance</span><Wallet size={18} /></div><strong>$24.80</strong><small>Sample UI value · Not real or withdrawable</small></div>
            <div className="withdraw-assurance"><ShieldCheck size={18} /><span>In production, only approved rewards and eligible accounts would be considered. Fees and estimated arrival times must be shown before confirmation.</span></div>
          </div>
          <form className="withdraw-card" onSubmit={handleSubmit}>
            <h2>Request a withdrawal</h2>
            <p className="withdraw-caption">Sample form only — no payment service is connected.</p>
            <label className="form-field">Amount (USD)
              <div className="amount-input-wrap"><span>$</span><input value={amount} onChange={(event) => { setAmount(event.target.value); setNotice(""); }} type="number" min="10" max="24.8" step="0.01" inputMode="decimal" required /></div>
            </label>
            <div className="amount-shortcuts">{["10.00", "15.00", "20.00"].map((value) => <button type="button" className={amount === value ? "selected" : ""} key={value} onClick={() => { setAmount(value); setNotice(""); }}>$ {value}</button>)}</div>
            <div className="form-field">Payout method
              <div className="payout-methods">
                {methods.map(({ id, title, detail, icon: Icon }) => <button type="button" key={id} className={method === id ? "payout-method selected" : "payout-method"} onClick={() => { setMethod(id); setNotice(""); }} aria-pressed={method === id}>
                  <span className="payout-icon"><Icon size={18} /></span><span className="payout-label"><strong>{title}</strong><small>{detail}</small></span><span className="payout-radio">{method === id && <span />}</span>
                </button>)}
              </div>
            </div>
            <div className="withdraw-summary">
              <div><span>Requested amount</span><strong>{validAmount ? "$" + parsedAmount.toFixed(2) : "—"}</strong></div>
              <div><span>Illustrative fee estimate</span><strong>{validAmount ? "$" + illustrativeFee.toFixed(2) : "—"}</strong></div>
              <div className="withdraw-receive"><span>Estimated amount received</span><strong>{validAmount ? "$" + illustrativeReceive.toFixed(2) : "—"}</strong></div>
              <small>Fee calculation is illustrative only and is not a real SIVO quote.</small>
            </div>
            <button className="btn btn-primary withdraw-submit" type="submit" disabled={!validAmount}>Review request <ArrowRight size={15} /></button>
            {notice && <div className="auth-notice" role="status">{notice}</div>}
            <div className="withdraw-footnote"><Clock3 size={13} /> Real processing times, minimums, supported countries and fees must be confirmed before launch.</div>
          </form>
        </section>
        <footer className="footer"><Link className="brand" href="/" style={{ fontSize: 19 }}><span className="brand-mark" style={{ width: 28, height: 28, borderRadius: 9 }}><Zap size={16} fill="currentColor" /></span>SIVO<span style={{ color: "var(--cyan)" }}>.</span></Link><span>© {new Date().getFullYear()} SIVO · Preview only</span><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link></div></footer>
      </div>
    </main>
  );
}