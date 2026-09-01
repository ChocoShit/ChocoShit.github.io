import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
//import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
//  adapter: vercel(),
  site: 'https://ChocoShit.github.io',

  i18n:{
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  
  integrations: [tailwind()],
  server: {
    port: 4321,
    host: true
  },
  devToolbar: {
    enabled: false
  },
  vite: {
    server: {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    }
  }
});
