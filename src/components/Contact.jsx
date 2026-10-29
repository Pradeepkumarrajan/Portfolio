import { useState } from "react";

const empty = { name: "", email: "", message: "" };

export default function Contact({ profile }) {
  const [form, setForm] = useState(empty);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // Opens the visitor's email app with the message ready to send. No server needed.
  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact" id="contact">
      <div>
        <h2>Let's talk</h2>
        <p className="section-note">
          Hiring for a Java or full stack role, or have a project in mind? Fill the form
          or write to <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </div>

      <form onSubmit={submit}>
        <label>Your name
          <input value={form.name} onChange={set("name")} autoComplete="name" required />
        </label>
        <label>Your email
          <input type="email" value={form.email} onChange={set("email")} autoComplete="email" required />
        </label>
        <label>Message
          <textarea rows="5" value={form.message} onChange={set("message")} minLength="10" required />
        </label>
        <button className="btn btn-primary">Open in my email app</button>
      </form>
    </section>
  );
}
