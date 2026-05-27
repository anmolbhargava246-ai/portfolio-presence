// @ts-check
import { defineConfig } from 'astro/config';

// Full-time portfolio is served as a sub-path of the portfolio-presence
// GitHub Pages site: https://anmolbhargava246-ai.github.io/portfolio-presence/full-time/
// https://astro.build/config
export default defineConfig({
  site: 'https://anmolbhargava246-ai.github.io',
  base: '/portfolio-presence/full-time/',
});
