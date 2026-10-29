import { useEffect, useState } from "react";

const links = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Nav({ name }) {
  const [active, setActive] = useState("");

  // Highlights the link for the section currently on screen
  useEffect(() => {
    const ids = ["top", ...links.map(([, h]) => h.slice(1))];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id === "top" ? "" : `#${e.target.id}`);
      }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.map((id) => document.getElementById(id)).filter(Boolean).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav">
      <a className="nav-name" href="#top">{name}</a>
      <nav aria-label="Primary">
        {links.map(([label, href]) => (
          <a key={href} href={href} className={active === href ? "active" : ""}
             aria-current={active === href ? "true" : undefined}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
