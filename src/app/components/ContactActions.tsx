import { CALENDAR_URL, GITHUB_URL, LINKEDIN_URL } from "../lib/content";
import { CopyEmailButton } from "./CopyEmailButton";

export const ContactActions = () => {
  return (
    <div className="cta">
      <a className="btn solid" href={CALENDAR_URL} target="_blank" rel="noopener">
        Schedule a call
      </a>
      <CopyEmailButton />
      <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noopener">
        LinkedIn
      </a>
      <a className="btn" href={GITHUB_URL} target="_blank" rel="noopener">
        GitHub
      </a>
    </div>
  );
};
