export const siteConfig = {
  name: "Me",
  title: "Rodrigo Moncada - Portfolio",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/ChocoShit",
    whatsapp: "https://wa.me/34677543431",
    email: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo",
  },
};

export const homeContent = {
  title: "Hello, I'm Rodrigo Moncada Arevalo",
  description:
    "A passionate frontend and database developer, i make desings to your needs, without losing funcionality. Experience in virtual and augmented reality development, web pages and desktop applications for companies.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    projects: {
      text: "View Projects",
      href: "/projects/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - My Portfolio",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "I am a developer experienced in creating virtual and augmented reality applications, web solutions, and desktop software, combining creativity and technology to build useful, immersive experiences. Throughout my career, I have worked with Unity, Visual Studio, Visual Studio Code, and languages ​​such as C#, C++, JavaScript, TypeScript, SQL, HTML, and CSS, as well as tools and environments like Node, npm, Blade, Astro, Tailwind CSS, and Git. My mission is to transform ideas into functional, engaging products, always maintaining a focus on quality, innovation, and continuous learning.",
  skills: [
    "Unity",
    "Visual Studio",
    "Visual Studio Code",
    "C#",
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
    "npm",
    "Blade",
    "Astro",
    "Tailwind CSS",
    "Git",
    "SQL",
  ],
  image: {
    src: "/assets/images/about/portfolio.png",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2026 - Present",
        position: "Support System",
        company: "Fast Click Tech",
        description:
          "I performed equipment maintenance, installed and configured security cameras, installed solar panels, and scanned electric vehicless.",
      },
      {
        period: "06/2025 - 10/2025",
        position: "Support Systems",
        company: "Grupo Palermo",
        description:
          "I performed hardware maintenance and repairs for equipment from various companies.",
      },
      {
        period: "2024 - 2025",
        position: "Support Systems",
        company: "Universidad Cesar Vallejo",
        description:
          "I developed and maintained various web applications and tools, in addition to providing support to professors and students.",
      },
      {
        period: "07/2023 - 11/2023",
        position: "Support Systems",
        company: "Salud Ocupacional Norte",
        description: "Worked on data center support and maintenance, creation of medical reports, and development of new technologies.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can find me on social media or drop me an",
    email: {
      text: "email",
      href: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "Our Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of your first project. Explain what it does and what technologies you used.",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe your second project here. Highlight the key features and your role in development.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Project Three",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};

