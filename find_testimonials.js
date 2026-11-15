const fs = require('fs');

const indexHtml = fs.readFileSync('scraped/index.html', 'utf8');
const lines = indexHtml.split('\n');
let capturing = false;
let captured = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('What Parents') || lines[i].includes('testimonial') || lines[i].includes('Ramavtar') || lines[i].includes('Manoj')) {
    console.log('Found around line', i);
    console.log(lines.slice(Math.max(0, i - 5), Math.min(lines.length, i + 50)).join('\n'));
    break;
  }
}
