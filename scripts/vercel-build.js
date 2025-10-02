#!/usr/bin/env node

// Vercel build optimization script
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Vercel optimized build...');

// Check if we're in Vercel environment
const isVercel = process.env.VERCEL === '1';

if (isVercel) {
  console.log('📦 Running in Vercel environment');
  
  // Set production environment
  process.env.NODE_ENV = 'production';
  
  // Run type checking
  console.log('🔍 Type checking...');
  try {
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
    console.log('✅ Type checking passed');
  } catch (error) {
    console.error('❌ Type checking failed');
    process.exit(1);
  }
  
  // Run build
  console.log('🏗️ Building application...');
  try {
    execSync('npx vite build', { stdio: 'inherit' });
    console.log('✅ Build completed');
  } catch (error) {
    console.error('❌ Build failed');
    process.exit(1);
  }
  
  // Log build stats
  const distPath = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath, { recursive: true });
    console.log(`📊 Generated ${files.length} files in dist/`);
  }
  
} else {
  console.log('🏠 Running in local environment');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('🎉 Build optimization complete!');