import Link from "next/link";
import { ArrowLeft, Compass, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <main className="site-shell" style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <section style={{ width: "min(100%, 520px)", textAlign: "center", padding: "50px 28px", border: "1px solid var(--line)", borderRadius: 24, background: "rgba(16,21,35,.82)" }}>
        <div style={{ display: "inline-grid", placeItems: "center", width: 54, height: 54, borderRadius: 18, color: "#061313", background: "linear-gradient(140deg,var(--cyan),#7bd4ff)" }}><Zap size={26} fill="currentColor" /></div>
        <div className="section-kicker" style={{ marginTop: 25 }}>Error 404</div>
        <h1 className="section-title" style={{ marginTop: 12 }}>This page is off the map.</h1>
        <p className="section-copy" style={{ marginBottom: 25 }}>The page may have moved or may not exist yet. Head back to SIVO and continue exploring.</p>
        <Link className="btn btn-primary" href="/"><ArrowLeft size={15} /> Back to SIVO</Link>
        <div style={{ marginTop: 17 }}><Link href="/earn" className="text-link" style={{ fontSize: 12 }}>Browse opportunities <Compass size={13} style={{ display: "inline", verticalAlign: "middle" }} /></Link></div>
      </section>
    </main>
  );
}