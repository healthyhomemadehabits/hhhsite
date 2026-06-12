"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/grocery-guide", label: "The Guide" },
  { href: "/free-guide", label: "Free Resource" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const isGroceryGuide = pathname === "/grocery-guide";

  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.navInner}`}>
        <Link href="/" className={styles.brand}>
          <i className="ph ph-plant" />
          Healthy Homemade Habits
        </Link>
        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.active : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.navRight}>
          {isGroceryGuide ? (
            <a href="#buy" className="btn btn-primary">
              Get the Guide — $37
            </a>
          ) : (
            <Link href="/free-guide" className="btn btn-primary">
              Get the Free Guide
            </Link>
          )}
          <button className={styles.menuBtn} aria-label="Menu">
            <i className="ph ph-list" />
          </button>
        </div>
      </div>
    </header>
  );
}
