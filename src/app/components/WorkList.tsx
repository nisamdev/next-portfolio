"use client";

import { useState } from "react";
import { projects, workFilters } from "../lib/content";

export const WorkList = () => {
  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (project) => active === "all" || project.areas.includes(active)
  );

  return (
    <>
      <div className="chips" role="group" aria-label="Filter work">
        {workFilters.map((filter) => (
          <button
            key={filter.id}
            className="chip"
            type="button"
            aria-pressed={active === filter.id}
            onClick={() => setActive(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="work">
        {visible.map((project, index) => (
          // Keyed by filter so every filter change starts with the entries collapsed
          <details
            key={`${active}-${project.title}`}
            className="job"
            open={index === 0 && active === "all"}
          >
            <summary>
              <h3>{project.title}</h3>
              <span className="when">{project.when}</span>
              <p className="what">{project.description}</p>
              <span className="tg">{project.tags}</span>
            </summary>
            <div className="more">
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </>
  );
};
