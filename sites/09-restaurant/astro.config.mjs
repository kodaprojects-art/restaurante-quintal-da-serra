import { defineConfig } from 'astro/config';

export default defineConfig({
  // [TODO] set the production URL per site (used for canonical and Open Graph URLs).
  site: 'https://example.com',
  output: 'static',
  // Generate responsive srcset (WebP) for every <Image>; layout styles stay in site CSS.
  image: { layout: 'constrained', responsiveStyles: false },
});
