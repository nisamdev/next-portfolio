import { ContactActions } from "./components/ContactActions";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { WorkList } from "./components/WorkList";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  aiTopics,
  deliverySteps,
  experience,
  identityPoints,
  services,
  sideProjects,
  stackGroups,
} from "./lib/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nisamudheen Kalampulan",
  jobTitle: "Technical Lead and Full Stack Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />

      <main id="top" className="w">
        <div className="hero">
          <p className="hello">
            <i></i>Edmonton, Alberta. Open to new roles.
          </p>
          <h1>
            I lead the engineering behind <em>web products.</em>
          </h1>
          <p className="intro">
            I design and lead the technical side of web products: APIs, identity, front ends and
            releases. I work across Node.js, TypeScript, Vue 3, Angular, Ruby on Rails and Laravel.
          </p>
          <p className="intro2">
            I have worked in small to medium teams, from four to fifteen developers. In them I own
            technical direction, review code, guide other engineers, and keep releases safe with
            unit tests and CI/CD. I use Claude Code and Cursor every day, and I build LLM features
            with the guardrails production needs.
          </p>
          <ContactActions />
          <p className="ribbon">
            <b>Node.js</b>, <b>TypeScript</b>, <b>Vue 3</b>, <b>Angular</b>, <b>Ruby on Rails</b>,{" "}
            <b>Laravel</b>, React, Next.js, PostgreSQL, MySQL, Redis, Docker, Kubernetes, OpenShift,
            GitHub Actions.
          </p>
        </div>
      </main>

      <section id="do" className="bleed">
        <div className="w row">
          <div className="label">What I do</div>
          <div>
            <h2>Six things I take ownership of in a product team.</h2>
            <div className="topics">
              {services.map((service) => (
                <div className="topic" key={service.title}>
                  <div>
                    <h3>{service.title}</h3>
                  </div>
                  <div>
                    <p>{service.description}</p>
                    <small>{service.tools}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="bleed band">
        <div className="w row">
          <div className="label">Results</div>
          <div>
            <p className="big">
              Average API response time down <span>about 75%</span>. Dashboards <span>50%</span>{" "}
              faster. Post-release defects down <span>20%</span> and deployment time down{" "}
              <span>25%</span>.
            </p>
            <p className="big sub">
              Led <span>10 to 15</span> developers as technical lead, and owned technical direction
              for a four-developer product team.
            </p>
            <p className="src">
              Figures come from the API platform I owned, a patient data portal built with
              Elasticsearch, and a team where unit testing and streamlined deployment were
              introduced.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="bleed">
        <div className="w row">
          <div className="label">Selected work</div>
          <div>
            <h2>Systems I built, ran or migrated.</h2>
            <WorkList />
          </div>
        </div>
      </section>

      <section id="side-projects" className="bleed">
        <div className="w row">
          <div className="label">Side projects</div>
          <div>
            <h2>Things I build on my own, in different stacks.</h2>
            <div className="topics">
              {sideProjects.map((project) => (
                <div className="topic" key={project.title}>
                  <h3>
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noopener">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div>
                    <p>{project.description}</p>
                    <small>{project.tools}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="identity" className="bleed">
        <div className="w row">
          <div className="label">Identity and access</div>
          <div>
            <h2>Authentication is part of every API I own.</h2>
            <p className="big-list">
              <span>OAuth 2.0</span>, <span>OpenID Connect</span>, <span>SAML</span>,{" "}
              <span>JWT</span>, <span>MFA</span>, Azure AD single sign-on, policies and gates, and
              per-tenant isolation.
            </p>
            <ul className="where">
              {identityPoints.map((point) => (
                <li key={point.title}>
                  <b>{point.title}</b> {point.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="delivery" className="bleed">
        <div className="w row">
          <div className="label">Delivery and quality</div>
          <div>
            <h2>Every release goes through CI/CD, with unit tests in the path.</h2>
            <ol className="flow">
              {deliverySteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              On my own product team I built the GitHub Actions pipeline end to end, with tests,
              tagged Docker images, deployment and automatic rollback, and I watch it with Grafana
              and Loki and Slack alerts. On enterprise teams I shipped through OpenShift, including
              a Kubernetes operator written in Go.
            </p>
            <p className="muted">
              Unit testing has been part of my work in most of the teams I have worked in, and still
              is. Where I introduced it, post-release defects fell by about 20%.
            </p>
          </div>
        </div>
      </section>

      <section id="ai" className="bleed">
        <div className="w row">
          <div className="label">AI</div>
          <div>
            <h2>AI in the product and in the way I work.</h2>
            <p className="muted">Retrieval is one technique of several. I choose the one that fits the job.</p>
            <div className="topics">
              {aiTopics.map((topic) => (
                <div className="topic" key={topic.title}>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="bleed">
        <div className="w row">
          <div className="label">Stack</div>
          <div>
            <h2>Grouped by how I use each tool.</h2>
            <div className="stk">
              {stackGroups.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <p className={group.secondary ? "lo" : undefined}>{group.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bleed">
        <div className="w row">
          <div className="label">Experience</div>
          <div className="xp">
            {experience.map((job) => (
              <article key={`${job.when}-${job.company}`}>
                <time>{job.when}</time>
                <div>
                  <h3>{job.role}</h3>
                  <p>
                    {job.company}. {job.summary}
                  </p>
                  <p className="meta">{job.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
