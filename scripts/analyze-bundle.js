import { build } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

// Build with bundle analyzer
async function analyzeBuild() {
  try {
    await build({
      plugins: [
        visualizer({
          filename: 'dist/bundle-analysis.html',
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    });
    console.log('✅ Bundle analysis complete! Check dist/bundle-analysis.html');
  } catch (error) {
    console.error('❌ Build analysis failed:', error);
  }
}

analyzeBuild();