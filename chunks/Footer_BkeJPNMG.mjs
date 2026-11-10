import { A as AstroError, M as MissingLocale, b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderScript, a as renderTemplate } from './astro/server_DvfQH5Qi.mjs';
import 'piccolore';
import 'clsx';

const translations = {
  en: {
    navigation: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About"
    },
    actions: {
      goHome: "Go to homepage",
      toggleTheme: "Toggle color theme",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchLanguage: "Switch to Spanish"
    },
    home: {
      title: "Hello, I'm Rodrigo Moncada Arevalo",
      description: "Frontend and database developer focused on creating funtional web, desktop, virtual reality, and augmented reality applications tailored to each project's needs.",
      buttons: {
        about: "About Me",
        projects: "View Projects"
      }
    },
    languages: {
      en: "English",
      es: "Español"
    },
    education: {
      title: "Education",
      master: "Master in Intelligent Systems",
      masterDetail: "University of Salamanca (USAL) — in progress",
      graduate: "Graduate in Systems Engineering",
      graduateDetail: "Universidad Cesar Vallejo"
    },
    languagesSection: {
      title: "Languages"
    }
  },
  es: {
    navigation: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Sobre mí"
    },
    actions: {
      goHome: "Ir a la página principal",
      toggleTheme: "Cambiar tema de color",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
      switchLanguage: "Cambiar a inglés"
    },
    home: {
      title: "Hola, soy Rodrigo Moncada Arevalo",
      description: "Desarrollador frontend y de bases de datos, enfocado en crear aplicaciones web, de escritorio, de realidad virtual y aumentada, adapatadas a las necesidades de cada proyecto.",
      buttons: {
        about: "Sobre mí",
        projects: "Ver proyectos"
      }
    },
    education: {
      title: "Educación",
      master: "Máster en Sistemas Inteligentes",
      masterDetail: "Universidad de Salamanca (USAL) — en curso",
      graduate: "Graduado en Ingeniería de Sistemas",
      graduateDetail: "Universidad Cesar Vallejo"
    },
    languagesSection: {
      title: "Idiomas"
    }
  }
};

function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  let relativePath;
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    relativePath = appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    relativePath = joinPaths(...pathsToJoin);
  }
  if (relativePath === "") {
    return "/";
  }
  return relativePath;
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "es"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$Astro = createAstro("https://ChocoShit.github.io");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentLanguage = Astro2.url.pathname.startsWith("/es") ? "es" : "en";
  const text = translations[currentLanguage];
  const homeUrl = getRelativeLocaleUrl(currentLanguage, "");
  const servicesUrl = getRelativeLocaleUrl(currentLanguage, "services");
  const projectsUrl = getRelativeLocaleUrl(currentLanguage, "projects");
  const aboutUrl = getRelativeLocaleUrl(currentLanguage, "about");
  const currentPath = Astro2.url.pathname.replace(/^\/es(?=\/|$)/, "").replace(/^\/+|\/+$/g, "");
  const alternateLanguage = currentLanguage === "en" ? "es" : "en";
  const alternateLanguageUrl = getRelativeLocaleUrl(
    alternateLanguage,
    currentPath
  );
  const alternateLanguageLabel = alternateLanguage.toUpperCase();
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/85 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-900/85"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex h-16 items-center justify-between"> <!-- Logo --> <a${addAttribute(homeUrl, "href")}> <img src="/logo.png" alt="Choco logo" width="40" height="40" class="h-10 w-10 rounded-xl object-contain"> </a> <div class="flex items-center gap-2"> <!-- Navegación de escritorio --> <div class="hidden items-center gap-4 md:flex"> <a${addAttribute(homeUrl, "href")} class="text-sm text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 sm:text-base"> ${text.navigation.home} </a> <a${addAttribute(servicesUrl, "href")} class="text-sm text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 sm:text-base"> ${text.navigation.services} </a> <a${addAttribute(projectsUrl, "href")} class="text-sm text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 sm:text-base"> ${text.navigation.projects} </a> <a${addAttribute(aboutUrl, "href")} class="text-sm text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200 sm:text-base"> ${text.navigation.about} </a> <a${addAttribute(alternateLanguageUrl, "href")}${addAttribute(alternateLanguage, "hreflang")}${addAttribute(text.actions.switchLanguage, "aria-label")}${addAttribute(text.actions.switchLanguage, "title")} class="px-2 py-1 text-sm font-semibold tracking-wide text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"> ${alternateLanguageLabel} </a> </div> <a${addAttribute(alternateLanguageUrl, "href")}${addAttribute(alternateLanguage, "hreflang")}${addAttribute(text.actions.switchLanguage, "aria-label")}${addAttribute(text.actions.switchLanguage, "title")} class="px-2 py-1 text-xs font-semibold tracking-wide text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors md:hidden"> ${alternateLanguageLabel} </a> <!-- Cambio de tema --> <button id="theme-toggle" type="button" class="rounded-full p-2 text-neutral-600 transition-colors hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-200"${addAttribute(text.actions.toggleTheme, "title")}${addAttribute(text.actions.toggleTheme, "aria-label")}> <svg class="theme-icon-light hidden h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path> </svg> <svg class="theme-icon-dark hidden h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> </button> <!-- Botón hamburguesa --> <button id="mobile-menu-toggle" type="button" class="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 md:hidden" aria-label="Open navigation menu" aria-controls="mobile-menu" aria-expanded="false"> <!-- Icono hamburguesa --> <svg class="menu-icon-open h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Icono cerrar --> <svg class="menu-icon-close hidden h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Menú desplegable móvil --> <div id="mobile-menu" class="absolute left-0 right-0 top-16 hidden border-t border-neutral-200/70 bg-white/95 px-4 pb-4 shadow-lg backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-900/95 md:hidden"> <div class="flex flex-col gap-1 pt-3"> <a${addAttribute(homeUrl, "href")} class="mobile-menu-link rounded-lg px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"> ${text.navigation.home} </a> <a${addAttribute(servicesUrl, "href")} class="mobile-menu-link rounded-lg px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"> ${text.navigation.services} </a> <a${addAttribute(projectsUrl, "href")} class="mobile-menu-link rounded-lg px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"> ${text.navigation.projects} </a> <a${addAttribute(aboutUrl, "href")} class="mobile-menu-link rounded-lg px-3 py-2 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"> ${text.navigation.about} </a> </div> </div> </div> </nav> ${renderScript($$result, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/components/Navigation.astro", void 0);

const siteConfig = {
  title: "Rodrigo Moncada - Portfolio",
  description: "Portfolio of Rodrigo Moncada — frontend, database, AI and robotics developer.",
  social: {
    github: "https://github.com/ChocoShit",
    whatsapp: "https://wa.me/34677543431",
    email: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo"
  }
};
const homeContent = {
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg"
  }
};
const aboutContent = {
  meta: {
    title: "About - My Portfolio",
    description: "Learn more about my background, skills, and experience"
  },
  image: {
    src: "/assets/images/about/portfolio.png",
    alt: "Profile"
  },
  en: {
    title: "About Me",
    description: "Frontend and database developer with a background in virtual and augmented reality, web solutions and desktop software. I am a Graduate in Systems Engineering and a student of the Master in Intelligent Systems at the University of Salamanca (USAL). Throughout my career I have worked with Unity, Visual Studio, Visual Studio Code, and languages such as C#, C++, JavaScript, TypeScript, SQL, HTML, and CSS, as well as tools and environments like Node, npm, Blade, Astro, Tailwind CSS, Git, Python, Streamlit and Docker. My mission is to transform ideas into functional, engaging products, always maintaining a focus on quality, innovation and continuous learning.",
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
      "ROS"
    ],
    languages: [
      { name: "English", level: "Intermediate" }
    ],
    experience: {
      title: "Experience",
      items: [
        {
          period: "2026 - Present",
          position: "Support System",
          company: "Fast Click Tech",
          description: "Equipment maintenance, security camera installation and configuration, solar panel installation, and electric vehicle scanning."
        },
        {
          period: "06/2025 - 10/2025",
          position: "Support Systems",
          company: "Grupo Palermo",
          description: "Hardware maintenance and repairs for equipment from various companies."
        },
        {
          period: "2024 - 2025",
          position: "Support Systems",
          company: "Universidad Cesar Vallejo",
          description: "Development and maintenance of web applications and tools, plus support for professors and students."
        },
        {
          period: "07/2023 - 11/2023",
          position: "Support Systems",
          company: "Salud Ocupacional Norte",
          description: "Data center support and maintenance, medical reports, and development of new technologies."
        }
      ]
    },
    connect: {
      title: "Let's Connect",
      description: "Feel free to reach out if you want to collaborate or just say hi! You can find me on social media or drop me an",
      email: {
        text: "email",
        href: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo"
      }
    }
  },
  es: {
    title: "Sobre mí",
    description: "Desarrollador frontend y de bases de datos con formación en realidad virtual y aumentada, soluciones web y software de escritorio. Soy Graduado en Ingeniería de Sistemas y estudiante del Máster en Sistemas Inteligentes en la Universidad de Salamanca (USAL). A lo largo de mi carrera he trabajado con Unity, Visual Studio, Visual Studio Code y lenguajes como C#, C++, JavaScript, TypeScript, SQL, HTML y CSS, así como entornos como Node, npm, Blade, Astro, Tailwind CSS, Git, Python, Streamlit y Docker. Mi misión es transformar ideas en productos funcionales y atractivos, manteniendo siempre un foco en la calidad, la innovación y el aprendizaje continuo.",
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
      "ROS"
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio" }
    ],
    experience: {
      title: "Experiencia",
      items: [
        {
          period: "2026 - Actualidad",
          position: "Sistema de Soporte",
          company: "Fast Click Tech",
          description: "Mantenimiento de equipos, instalación y configuración de cámaras de seguridad, instalación de paneles solares y escaneo de vehículos eléctricos."
        },
        {
          period: "06/2025 - 10/2025",
          position: "Sistemas de Soporte",
          company: "Grupo Palermo",
          description: "Mantenimiento y reparaciones de hardware de equipos de diversas empresas."
        },
        {
          period: "2024 - 2025",
          position: "Sistemas de Soporte",
          company: "Universidad Cesar Vallejo",
          description: "Desarrollo y mantenimiento de aplicaciones y herramientas web, además de soporte a profesores y estudiantes."
        },
        {
          period: "07/2023 - 11/2023",
          position: "Sistemas de Soporte",
          company: "Salud Ocupacional Norte",
          description: "Soporte y mantenimiento de centros de datos, creación de informes médicos y desarrollo de nuevas tecnologías."
        }
      ]
    },
    connect: {
      title: "Conectemos",
      description: "No dudes en contactar si quieres colaborar o simplemente decir hola. Puedes encontrarme en redes sociales o escribirme un",
      email: {
        text: "correo",
        href: "mailto:chocoshitdev@gmail.com?body=Hello%20Rodrigo"
      }
    }
  }
};
const projectsContent = {
  meta: {
    title: "Projects - Rodrigo Moncada",
    description: "Selected projects: AI, robotics, web and automation."
  },
  title: "Projects",
  description: "A selection of my projects across AI, robotics, web development and automation. Each one solves a real problem with the tools I know best.",
  projects: [
    {
      title: "Chef_IA",
      description: "Recipe recommendation assistant combining fuzzy logic with a neural network. Deployed on Streamlit Cloud as an interactive cooking assistant.",
      tags: ["Python", "Fuzzy Logic", "Neural Network", "Streamlit"],
      image: "/assets/images/projects/chef_ia.png",
      href: "https://github.com/ChocoShit/Chef_IA",
      stars: "fuzzy + NN"
    },
    {
      title: "iRobot Roomba 650",
      description: "Control and odometry system for the Roomba 650 robot. Sensor unification with the 149-byte package, safety logic and a desktop GUI.",
      tags: ["Python", "ROS", "Robotics", "Serial"],
      image: "/assets/images/projects/irobot_roomba.png",
      href: "https://github.com/ChocoShit/irobot_roomba",
      stars: "odometry"
    },
    {
      title: "Telegram Finanzas Bot",
      description: "Budget management bot built on the Telegram API with Excel export. ConversationHandler for tracking income and expenses.",
      tags: ["Python", "Telegram API", "Excel"],
      image: "/assets/images/projects/telegram_bot.png",
      href: "https://github.com/ChocoShit/Telegram_Finanzas_bot",
      stars: "budget"
    }
  ]
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Footer Component -->${maybeRenderHead()}<section class="relative text-gray-700"> <div class="container flex flex-col items-center justify-center min-h-[40px] mx-auto px-7 max-w-7xl sm:flex-row sm:min-h-[50px] bg-transparent py-4"> <a class="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-neutral-700 dark:text-neutral-300 font-semibold" href="/"> <span class="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">✦</span> <span class="-translate-y-0.5">Rodrigo Moncada</span> </a> <p class="mt-2 text-sm text-neutral-700 dark:text-neutral-300 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-700 dark:sm:border-neutral-300 sm:mt-0">
© 2026 Rodrigo Moncada. All rights reserved.
</p> <span class="inline-flex justify-center mt-2 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"> <a${addAttribute(siteConfig.social.whatsapp, "href")} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" title="Contactar por WhatsApp" class="text-neutral-500 transition-colors hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400"> <span class="sr-only">WhatsApp</span> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.1 7.8c.3-.3.7-.2.9.1l1.1 1.6c.2.3.2.7-.1 1l-.6.6c.7 1.5 1.9 2.7 3.4 3.4l.6-.6c.3-.3.7-.3 1-.1l1.6 1.1c.3.2.4.6.1.9-.7.9-1.8 1.3-2.9 1-3.5-.9-6.2-3.6-7.1-7.1-.3-1.1.1-2.2 1-2.9Z" fill="currentColor"></path> </svg> </a> <a${addAttribute(siteConfig.social.github, "href")} target="_blank" class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-400 dark:hover:text-neutral-300"> <span class="sr-only">GitHub</span> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.12 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a${addAttribute(siteConfig.social.email, "href")} class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-400 dark:hover:text-neutral-300"> <span class="sr-only">Email</span> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </a> </span> </div> </section>`;
}, "/home/runner/work/ChocoShit.github.io/ChocoShit.github.io/src/components/Footer.astro", void 0);

export { $$Footer as $, aboutContent as a, $$Navigation as b, getRelativeLocaleUrl as g, homeContent as h, projectsContent as p, siteConfig as s, translations as t };
