import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL || (process.env.NODE_ENV === 'production' ? '/kleinpeterhomeimprovement/' : '/'), // GitHub Pages: set VITE_BASE_URL in workflow
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            return 'vendor';
          }
          // Split pages into separate chunks
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0];
            return `page-${pageName}`;
          }
        },
      },
    },
    // Faster builds
    minify: 'esbuild',
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    // Enable source maps only in dev
    sourcemap: false,
  },
  // Faster CSS processing - optimized for immediate updates
  css: {
    devSourcemap: false,
  },
});
