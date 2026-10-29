import { portfolio } from "./data.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const { profile, experience, projects, skills } = portfolio;
  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero profile={profile} />
        <Experience items={experience} />
        <Projects items={projects} />
        <Skills items={skills} />
        <Contact profile={profile} />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React.</p>
      </footer>
    </>
  );
}
