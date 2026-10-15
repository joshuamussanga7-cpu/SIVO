"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Compass, LayoutDashboard, UserRound, Wallet, Zap } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/earn", label: "Earn", icon: Compass },
  { href: "/wallet", label: "Wallet", icon: Wallet },
  { href: "/notifications", label: "Updates", icon: Bell },
  { href: "/profile", label: "Profile", icon: UserRound },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="mobile-app-nav" aria-label="Mobile navigation">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href + "/"));
        return <Link href={href} key={href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>
          <Icon size={19} strokeWidth={active ? 2.3 : 1.8} /><span>{label}</span>
        </Link>;
      })}
    </nav>
  );
}