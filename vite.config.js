import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    // Compile the plain-markdown pages in src/content/*.md into React components.
    // format: 'md' keeps them as pure markdown (no JSX/MDX syntax).
    { enforce: 'pre', ...mdx({ format: 'md' }) },
    react(),
  ],
  build: {
    outDir: 'build', // netlify.toml publishes build/
  },
});
