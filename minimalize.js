import fs from 'fs';
import path from 'path';

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Typography
      content = content.replace(/text-brand-text-secondary/g, 'text-gray-500');

      // Radii
      content = content.replace(/rounded-3xl/g, 'rounded-none');
      content = content.replace(/rounded-2xl/g, 'rounded-none');
      content = content.replace(/rounded-xl/g, 'rounded-none');
      content = content.replace(/rounded-lg/g, 'rounded-none');
      
      // Shadows
      content = content.replace(/shadow-2xl/g, '');
      content = content.replace(/shadow-xl/g, '');
      content = content.replace(/shadow-lg/g, '');
      content = content.replace(/shadow-sm/g, '');
      content = content.replace(/shadow-\[[^\]]+\]/g, '');
      content = content.replace(/hover:shadow-\[[^\]]+\]/g, '');

      // Borders
      content = content.replace(/border-brand-border\/50/g, 'border-brand-border');
      content = content.replace(/border-brand-border\/60/g, 'border-brand-border');
      
      // Backgrounds
      content = content.replace(/bg-\[\#F6F9FC\]/g, 'bg-white');
      content = content.replace(/bg-\[\#EAF3FF\]\/40/g, 'bg-white');
      content = content.replace(/bg-brand-bg/g, 'bg-white');

      fs.writeFileSync(fullPath, content);
    }
  }
}

walk('src/components');
console.log('Minimalization pass complete.');
