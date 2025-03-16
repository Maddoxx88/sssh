import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss({
      config: {
        applyBaseStyles: false,
        theme: {
          extend: {
            colors: {
              primary: '#913322'
            }
          }
        }
      },
    })],
  },

  site: 'https://Maddoxx88.github.io',
  integrations: [react()],
})