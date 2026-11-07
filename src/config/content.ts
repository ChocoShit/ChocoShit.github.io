export const siteConfig = {
  name: "Choco",
  title: "Rodrigo Moncada - Portfolio",
  description: "Portfolio of Rodrigo Moncada — frontend, database, AI and robotics developer.",
  social: {
    github: "https://github.com/ChocoShit",
    whatsapp: "https://wa.me/34677543431",
    email: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo",
  },
};

export const homeContent = {
  title: "Hello, I'm Rodrigo Moncada Arevalo",
  description:
    "Frontend and database developer focused on creating functional web, desktop, virtual reality, and augmented reality applications tailored to each project's needs.",
  buttons: {
    about: {
      text: "About Me",
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
  image: {
    src: "/assets/images/about/portfolio.png",
    alt: "Profile",
  },
  en: {
    title: "About Me",
    description:
      "Frontend and database developer with a background in virtual and augmented reality, web solutions and desktop software. I am a Graduate in Systems Engineering and a student of the Master in Intelligent Systems at the University of Salamanca (USAL). Throughout my career I have worked with Unity, Visual Studio, Visual Studio Code, and languages such as C#, C++, JavaScript, TypeScript, SQL, HTML, and CSS, as well as tools and environments like Node, npm, Blade, Astro, Tailwind CSS, Git, Python, Streamlit and Docker. My mission is to transform ideas into functional, engaging products, always maintaining a focus on quality, innovation and continuous learning.",
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
      "Python",
      "Streamlit",
      "Docker",
      "Fuzzy Logic",
      "ROS",
    ],
    languages: [
      { name: "English", level: "Intermediate" },
    ],
    experience: {
      title: "Experience",
      items: [
        {
          period: "2026 - Present",
          position: "Support System",
          company: "Fast Click Tech",
          description:
            "Equipment maintenance, security camera installation and configuration, solar panel installation, and electric vehicle scanning.",
        },
        {
          period: "06/2025 - 10/2025",
          position: "Support Systems",
          company: "Grupo Palermo",
          description:
            "Hardware maintenance and repairs for equipment from various companies.",
        },
        {
          period: "2024 - 2025",
          position: "Support Systems",
          company: "Universidad Cesar Vallejo",
          description:
            "Development and maintenance of web applications and tools, plus support for professors and students.",
        },
        {
          period: "07/2023 - 11/2023",
          position: "Support Systems",
          company: "Salud Ocupacional Norte",
          description:
            "Data center support and maintenance, medical reports, and development of new technologies.",
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
  },
  es: {
    title: "Sobre mí",
    description:
      "Desarrollador frontend y de bases de datos con formación en realidad virtual y aumentada, soluciones web y software de escritorio. Soy Graduado en Ingeniería de Sistemas y estudiante del Máster en Sistemas Inteligentes en la Universidad de Salamanca (USAL). A lo largo de mi carrera he trabajado con Unity, Visual Studio, Visual Studio Code y lenguajes como C#, C++, JavaScript, TypeScript, SQL, HTML y CSS, así como entornos como Node, npm, Blade, Astro, Tailwind CSS, Git, Python, Streamlit y Docker. Mi misión es transformar ideas en productos funcionales y atractivos, manteniendo siempre un foco en la calidad, la innovación y el aprendizaje continuo.",
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
      "Python",
      "Streamlit",
      "Docker",
      "Lógica Difusa",
      "ROS",
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio" },
    ],
    experience: {
      title: "Experiencia",
      items: [
        {
          period: "2026 - Actualidad",
          position: "Sistema de Soporte",
          company: "Fast Click Tech",
          description:
            "Mantenimiento de equipos, instalación y configuración de cámaras de seguridad, instalación de paneles solares y escaneo de vehículos eléctricos.",
        },
        {
          period: "06/2025 - 10/2025",
          position: "Sistemas de Soporte",
          company: "Grupo Palermo",
          description:
            "Mantenimiento y reparaciones de hardware de equipos de diversas empresas.",
        },
        {
          period: "2024 - 2025",
          position: "Sistemas de Soporte",
          company: "Universidad Cesar Vallejo",
          description:
            "Desarrollo y mantenimiento de aplicaciones y herramientas web, además de soporte a profesores y estudiantes.",
        },
        {
          period: "07/2023 - 11/2023",
          position: "Sistemas de Soporte",
          company: "Salud Ocupacional Norte",
          description:
            "Soporte y mantenimiento de centros de datos, creación de informes médicos y desarrollo de nuevas tecnologías.",
        },
      ],
    },
    connect: {
      title: "Conectemos",
      description:
        "No dudes en contactar si quieres colaborar o simplemente decir hola. Puedes encontrarme en redes sociales o escribirme un",
      email: {
        text: "correo",
        href: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo",
      },
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Rodrigo Moncada",
    description: "Selected projects: AI, robotics, web and automation.",
  },
  title: "Projects",
  description:
    "A selection of my projects across AI, robotics, web development and automation. Each one solves a real problem with the tools I know best.",
  projects: [
    {
      title: "Chef_IA",
      description:
        "Recipe recommendation assistant combining fuzzy logic with a neural network. Deployed on Streamlit Cloud as an interactive cooking assistant.",
      tags: ["Python", "Fuzzy Logic", "Neural Network", "Streamlit"],
      image: "/assets/images/projects/chef_ia.png",
      href: "https://github.com/ChocoShit/Chef_IA",
      stars: "fuzzy + NN",
    },
    {
      title: "iRobot Roomba 650",
      description:
        "Control and odometry system for the Roomba 650 robot. Sensor unification with the 149-byte package, safety logic and a desktop GUI.",
      tags: ["Python", "ROS", "Robotics", "Serial"],
      image: "/assets/images/projects/irobot_roomba.png",
      href: "https://github.com/ChocoShit/irobot_roomba",
      stars: "odometry",
    },
    {
      title: "Telegram Finanzas Bot",
      description:
        "Budget management bot built on the Telegram API with Excel export. ConversationHandler for tracking income and expenses.",
      tags: ["Python", "Telegram API", "Excel"],
      image: "/assets/images/projects/telegram_bot.png",
      href: "https://github.com/ChocoShit/Telegram_Finanzas_bot",
      stars: "budget",
    },
  ],
};