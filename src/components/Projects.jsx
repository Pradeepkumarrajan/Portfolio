import { useState } from "react";

const techOf = (p) => p.stack.split(",").map((t) => t.trim());

export default function Projects({ items }) {
  const [tech, setTech] = useState("All");
  const all = [...new Set(items.flatMap(techOf))];
  const shown = tech === "All" ? items : items.filter((p) => techOf(p).includes(tech));

  return (
    <section className="section" id="projects">
      <h2>Things I have built</h2>
      <div className="filters" role="group" aria-label="Filter projects by technology">
        {["All", ...all].map((t) => (
          <button key={t} className="chip" aria-pressed={tech === t} onClick={() => setTech(t)}>{t}</button>
        ))}
      </div>
      <ul className="projects">
        {shown.map((p) => (
          <li key={p.id ?? p.title}>
            <div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer">View source</a>}
            </div>
            <ul className="tags" aria-label="Technologies">
              {techOf(p).map((t) => (
                <li key={t}><button className="chip" aria-pressed={tech === t} onClick={() => setTech(t)}>{t}</button></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
