import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rachelscleaningswfl.com',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
});
