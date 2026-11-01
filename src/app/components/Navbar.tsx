import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#do", label: "What I do" },
  { href: "#results", label: "Results" },
  { href: "#work", label: "Work" },
  { href: "#identity", label: "Identity" },
  { href: "#delivery", label: "Delivery" },
  { href: "#ai", label: "AI" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="bleed nav">
      <div className="w">
        <Link className="mark" href="#top">
          nisam<b>.</b>
        </Link>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </div>
  );
};
