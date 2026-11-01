import "./globals.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nisam Kalampulan Portfolio",
  description:
    "Nisamudheen Kalampulan, technical lead and full stack engineer in Edmonton, Alberta. Node.js, Vue 3, Angular, Ruby on Rails and Laravel, with OAuth2, OpenID Connect and SAML, CI/CD and AI features.",
  openGraph: {
    title: "Nisamudheen Kalampulan | Technical Lead and Full Stack Engineer",
    description:
      "APIs, identity, front ends and releases across Node.js, Vue 3, Angular, Rails and Laravel.",
    type: "website",
  },
};

// Runs before first paint so a saved theme doesn't flash the system one
const restoreTheme = `try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolageGrotesque.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
