export default function Skills({ items }) {
  const groups = items.reduce((acc, s) => {
    (acc[s.group] ||= []).push(s.name);
    return acc;
  }, {});
  return (
    <section className="section" id="skills">
      <h2>What I work with</h2>
      <div className="skills">
        {Object.entries(groups).map(([group, names]) => (
          <div key={group}>
            <h3>{group}</h3>
            <p>{names.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
