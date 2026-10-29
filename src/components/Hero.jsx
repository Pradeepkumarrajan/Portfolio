import { useEffect, useState } from "react";

const defaultRoles = [
  "Java full stack developer",
  "Spring Boot and React builder",
  "Former CAD customization engineer",
];

function useTyper(words) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(reduce ? words[0] : "");

  useEffect(() => {
    if (reduce) return;
    let i = 0, n = 0, deleting = false, timer;
    const tick = () => {
      const word = words[i];
      n += deleting ? -1 : 1;
      setText(word.slice(0, n));
      let delay = deleting ? 35 : 70;
      if (!deleting && n === word.length) { deleting = true; delay = 1600; }
      else if (deleting && n === 0) { deleting = false; i = (i + 1) % words.length; delay = 350; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words, reduce]);

  return text;
}

function Photo({ name }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  if (failed) {
    return <div className="photo photo-fallback" role="img" aria-label={name}>{initials}</div>;
  }
  return <img className="photo" src="1000123997.png" alt={`Portrait of ${name}`} onError={() => setFailed(true)} />;
}

export default function Hero({ profile }) {
  const typed = useTyper(profile.roles ?? defaultRoles);
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <h1>{profile.name}</h1>
        <p className="hero-lead" aria-label={profile.headline}><span className="typed">{typed}</span></p>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">Get in touch</a>
          <a className="btn" href="#projects">See my projects</a>
        </div>
      </div>

      <figure className="titleblock" aria-label="Profile summary">
        <div className="frame">
          <span className="crop tl" /><span className="crop tr" /><span className="crop bl" /><span className="crop br" />
          <Photo name={profile.name} />
          <span className="dim dim-h" aria-hidden="true"><i>Portrait</i></span>
        </div>
        <dl>
          <div><dt>Name</dt><dd>{profile.name}</dd></div>
          <div><dt>Role</dt><dd>Full stack developer</dd></div>
          <div><dt>Based in</dt><dd>{profile.location}</dd></div>
          <div><dt>Main stack</dt><dd>Java, Spring Boot, React</dd></div>
          <div><dt>Links</dt>
            <dd>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              {" and "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </dd>
          </div>
        </dl>
      </figure>
    </section>
  );
}
