export default function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <h2>Where I have worked</h2>
      <p className="section-note">From the shop floor to the codebase, newest first.</p>
      <ol className="timeline">
        {items.map((e) => (
          <li key={e.id ?? e.role}>
            <div className="tl-meta">
              <span>{e.duration}</span>
            </div>
            <div className="tl-body">
              <h3>{e.role}</h3>
              <p className="tl-org">{e.organization}</p>
              <p>{e.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
