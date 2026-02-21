"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button/Button";

export default function Header() {
  return (
    <header className="siteHeader">
      <nav className="nav pagePadding">
        <div className="navLinks">
          <Link className="navLink navLinkHome" href="/">Home</Link>
          <NavLink href="/about">About</NavLink>
        </div>

        <div className="navRight">
           <Button variant="secondary" label="The design system" href="/design-system" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}



