export const translations = {
  en: {
    navigation: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
    },
    actions: {
      goHome: "Go to homepage",
      toggleTheme: "Toggle color theme",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchLanguage: "Switch to Spanish",
    },
    home: {
        title: "Hello, I'm Rodrigo Moncada Arevalo",
        description:
            "Frontend and database developer focused on creating funtional web, desktop, virtual reality, and augmented reality applications tailored to each project's needs.",
        buttons: {
            about: "About Me",
            projects: "View Projects",
        },
    },
    languages: {
      en: "English",
      es: "Español",
    },
    education: {
      title: "Education",
      master: "Master in Intelligent Systems",
      masterDetail: "University of Salamanca (USAL) — in progress",
      graduate: "Graduate in Systems Engineering",
      graduateDetail: "Universidad Cesar Vallejo",
    },
    languagesSection: {
      title: "Languages",
    },
    projects: {
      title: "Projects",
      description:
        "A selection of my projects across AI, robotics, web development and automation. Each one solves a real problem with the tools I know best.",
      tags: {
        fuzzy: "Fuzzy + NN",
        robotics: "Robotics",
        budget: "Budget",
        fullstack: "Fullstack",
      },
    },
    services: {
      title: "Services",
      subtitle: "What I can do",
      description:
        "Technology solutions organized according to your development, technical support and smart home needs.",
      items: {
        software: {
          number: "01",
          title: "Software Development",
          description:
            "Development of customized software solutions for businesses, professionals and personal projects.",
          list: [
            "Web applications",
            "Desktop applications",
            "Mobile applications",
          ],
        },
        interactive: {
          number: "02",
          title: "Interactive Experiences",
          description:
            "Creation of educational and immersive applications using interactive technologies.",
          list: [
            "Educational games",
            "Virtual reality applications",
            "Augmented reality applications",
          ],
        },
        support: {
          number: "03",
          title: "Computer Support",
          description:
            "Installation, maintenance and technical assistance for desktop and portable computers.",
          list: [
            "Computer assembly",
            "Desktop and laptop maintenance",
            "Software installation and configuration",
            "Remote technical support",
          ],
        },
        smart: {
          number: "04",
          title: "Smart Home & Security",
          description:
            "Installation and configuration of connected devices for safer and more efficient spaces.",
          list: [
            "Security cameras",
            "Alexa devices",
            "Home automation",
            "Smart locks",
            "Smart lights and switches",
          ],
        },
      },
    },
  },

  es: {
    navigation: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Sobre mí",
    },
    actions: {
      goHome: "Ir a la página principal",
      toggleTheme: "Cambiar tema de color",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      switchLanguage: "Cambiar a inglés",
    },
    home: {
        title: "Hola, soy Rodrigo Moncada Arevalo",
        description:
            "Desarrollador frontend y de bases de datos, enfocado en crear aplicaciones web, de escritorio, de realidad virtual y aumentada, adapatadas a las necesidades de cada proyecto.",
        buttons: {
            about: "Sobre mí",
            projects: "Ver proyectos",
        },
    },
    education: {
      title: "Educación",
      master: "Máster en Sistemas Inteligentes",
      masterDetail: "Universidad de Salamanca (USAL) — en curso",
      graduate: "Graduado en Ingeniería de Sistemas",
      graduateDetail: "Universidad Cesar Vallejo",
    },
    languagesSection: {
      title: "Idiomas",
    },
    projects: {
      title: "Proyectos",
      description:
        "Una selección de mis proyectos en IA, robótica, desarrollo web y automatización. Cada uno resuelve un problema real con las herramientas que mejor conozco.",
      tags: {
        fuzzy: "Lógica difusa + RN",
        robotics: "Robótica",
        budget: "Presupuesto",
        fullstack: "Fullstack",
      },
    },
    services: {
      title: "Servicios",
      subtitle: "Qué puedo hacer",
      description:
        "Soluciones tecnológicas organizadas según tus necesidades de desarrollo, soporte técnico y hogar inteligente.",
      items: {
        software: {
          number: "01",
          title: "Desarrollo de Software",
          description:
            "Desarrollo de soluciones software personalizadas para empresas, profesionales y proyectos personales.",
          list: [
            "Aplicaciones web",
            "Aplicaciones de escritorio",
            "Aplicaciones móviles",
          ],
        },
        interactive: {
          number: "02",
          title: "Experiencias Interactivas",
          description:
            "Creación de aplicaciones educativas e inmersivas usando tecnologías interactivas.",
          list: [
            "Juegos educativos",
            "Aplicaciones de realidad virtual",
            "Aplicaciones de realidad aumentada",
          ],
        },
        support: {
          number: "03",
          title: "Soporte Informático",
          description:
            "Instalación, mantenimiento y asistencia técnica para ordenadores de sobremesa y portátiles.",
          list: [
            "Montaje de ordenadores",
            "Mantenimiento de sobremesa y portátiles",
            "Instalación y configuración de software",
            "Soporte técnico remoto",
          ],
        },
        smart: {
          number: "04",
          title: "Hogar Inteligente y Seguridad",
          description:
            "Instalación y configuración de dispositivos conectados para espacios más seguros y eficientes.",
          list: [
            "Cámaras de seguridad",
            "Dispositivos Alexa",
            "Domótica",
            "Cerraduras inteligentes",
            "Bombillas y interruptores inteligentes",
          ],
        },
      },
    },
  },
} as const;

export type Language = keyof typeof translations;

export const defaultLanguage: Language = "en";