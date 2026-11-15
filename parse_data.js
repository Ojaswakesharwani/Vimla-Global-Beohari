const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'mission.html', 'vision.html', 'inspiration.html', 'cbse-saras.html', 'staff.html', 'contact.html', 'achievement.html'];

for (const file of files) {
  const p = path.join('scraped', file);
  if (fs.existsSync(p)) {
    const text = fs.readFileSync(p, 'utf8');
    // clean scripts and tags
    const clean = text
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    console.log(`=== ${file} (${clean.length} chars) ===`);
    console.log(clean.slice(0, 500));
    console.log('\n');
  }
}
