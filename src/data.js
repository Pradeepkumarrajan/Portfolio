// Edit all your portfolio content here.
export const portfolio = {
  profile: {
    name: "Pradeep Kumar Rajan",
    headline: "Java full stack developer. Mechanical engineer by training.",
    bio: "I spent years checking that parts were built to spec and customizing CAD tools for design teams. Now I build backend services and web apps with the same habit: measure twice, ship once.",
    location: "Coimbatore, Tamil Nadu",
    email: "pradeepkumarrajan98@gmail.com",
    linkedin: "https://www.linkedin.com/in/pradeepkumar-rajan-3b6a79192",
    github: "https://github.com/Pradeepkumarrajan/Pradeepkumarrajan",
  },
  experience: [
    { id: 1, role: "Software Engineer", organization: "CADOpt Technologies", duration: "2.5+ years", summary: "Full stack development on an enterprise workflow management platform: Spring Boot services, REST APIs, Hibernate, SQL and web front ends." },
    { id: 2, role: "Quality Engineer", organization: "LG Balakrishnan Private Limited", duration: "1 year 2 months", summary: "Inward quality inspection and quality control of incoming parts against drawings and specifications." },
    { id: 3, role: "Quality Supervisor", organization: "Gennex Engineering", duration: "1 year", summary: "Supervised in-process quality checks on the shop floor." },
  ],
  projects: [
    { id: 1, title: "Enterprise Workflow Management Platform", summary: "Workflow platform built at CADOpt Technologies: configurable flows, role-based access and REST services behind a web UI.", stack: "Java,Spring Boot,Hibernate,SQL" },
    { id: 2, title: "Parcel Delivery App", summary: "Full stack delivery app with separate customer, rider and admin roles.", stack: "React,Spring Boot,REST" },
    { id: 3, title: "Rider AI", summary: "Helps e-commerce delivery riders by contacting sellers automatically to confirm a product is available before pickup.", stack: "Java,Spring Boot,AI" },
    { id: 4, title: "Parcel SMS Dispatch", summary: "Native Android app that sends delivery SMS updates to recipients.", stack: "Kotlin,Android" },
    { id: 5, title: "Java Interview Master Guide", summary: "An 18-chapter e-book taking readers from core Java to Spring Boot interview questions.", stack: "Java,Spring Boot,Writing" },
  ],
  skills: [
    ...["Java", "Spring Boot", "Hibernate", "RESTful APIs", "Microservices", "ASP.NET Core", "C#"].map((name) => ({ group: "Backend", name })),
    ...["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"].map((name) => ({ group: "Frontend", name })),
    ...["Kotlin", "Android"].map((name) => ({ group: "Mobile", name })),
    ...["SQL Server", "MySQL", "PostgreSQL"].map((name) => ({ group: "Data", name })),
    ...["Git", "Azure DevOps", "CI/CD", "Docker", "Kubernetes"].map((name) => ({ group: "Delivery", name })),
  ],
};
