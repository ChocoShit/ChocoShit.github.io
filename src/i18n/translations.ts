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
  },
} as const;

export type Language = keyof typeof translations;

export const defaultLanguage: Language = "en";