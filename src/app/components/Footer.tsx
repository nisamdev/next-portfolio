import Link from "next/link";
import { EMAIL } from "../lib/content";
import { ContactActions } from "./ContactActions";

export const Footer = () => {
  return (
    <section id="contact" className="bleed ink">
      <div className="w">
        <div className="label">Contact</div>
        <p className="mail" id="mailText">
          {EMAIL}
        </p>
        <ContactActions />
        <p className="muted note">
          Hiring for a senior or lead role, or building a product? I also build my own
          products under YEGstack, including Roost for Alberta daycares.
        </p>
        <div className="foot">
          <span>&copy; {new Date().getFullYear()} Nisamudheen Kalampulan, Edmonton, Alberta</span>
          <Link href="#top">Back to top</Link>
        </div>
      </div>
    </section>
  );
};
