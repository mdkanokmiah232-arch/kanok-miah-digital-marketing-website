#!/usr/bin/env node

/**
 * verify-routes.ts
 * 
 * Verifies that:
 * 1. Every route in lib/routes.ts has a corresponding page.tsx
 * 2. Every page.tsx has a corresponding route in lib/routes.ts
 * 3. Every route has exported metadata
 */

import { routes } from '../src/lib/routes';
import * as fs from 'fs';
import * as path from 'path';

const SRC_DIR = path.join(__dirname, '..', 'src', 'app');

function routeToFilePath(routePath: string): string {
  // Convert route path to file path
  // / -> /page.tsx
  // /about/ -> /about/page.tsx
  // /services/seo/ -> /services/seo/page.tsx
  const cleanPath = routePath.replace(/\/$/, '') || '/';
  return path.join(SRC_DIR, cleanPath, 'page.tsx');
}

function checkRouteFileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

function checkMetadataExported(filePath: string): boolean {
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.includes('export const metadata') || content.includes('export async function generateMetadata');
}

function main() {
  console.log('🔍 Verifying routes...\n');
  
  let errors = 0;
  let warnings = 0;
  
  // Check 1: Every route in manifest has a page
  for (const route of routes) {
    const filePath = routeToFilePath(route.path);
    
    if (!checkRouteFileExists(filePath)) {
      console.log(`❌ Missing page for route: ${route.path}`);
      console.log(`   Expected: ${filePath}`);
      errors++;
    } else if (!checkMetadataExported(filePath)) {
      console.log(`⚠️  Missing metadata export: ${route.path}`);
      warnings++;
    }
  }
  
  // Check 2: Every page.tsx has a route in manifest
  function findPageFiles(dir: string): string[] {
    const pages: string[] = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        pages.push(...findPageFiles(fullPath));
      } else if (item.name === 'page.tsx') {
        pages.push(fullPath);
      }
    }
    
    return pages;
  }
  
  const pageFiles = findPageFiles(SRC_DIR);
  
  for (const pageFile of pageFiles) {
    const relativePath = path.relative(SRC_DIR, pageFile);
    const routePath = '/' + relativePath.replace('/page.tsx', '').replace(/\\/g, '/');
    
    const routeExists = routes.some(r => r.path === routePath);
    
    if (!routeExists) {
      console.log(`⚠️  Page without route in manifest: ${routePath}`);
      warnings++;
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  
  if (errors === 0 && warnings === 0) {
    console.log('✅ All routes verified successfully!');
    process.exit(0);
  } else {
    console.log(`❌ ${errors} errors, ${warnings} warnings`);
    process.exit(1);
  }
}

main();
