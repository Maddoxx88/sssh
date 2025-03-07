import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite";

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
})