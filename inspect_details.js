const fs = require('fs');

function inspectPage(filename) {
  const text = fs.readFileSync('scraped/' + filename, 'utf8');
  console.log(`\n=================== ${filename} ===================`);
  // print all headings, quotes, tables, and strong tags
  const matches = text.match(/<(h[1-6]|p|blockquote|table)[^>]*>([\s\S]*?)<\/\1>/gi) || [];
  for (const m of matches.slice(0, 30)) {
    const clean = m.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean.length > 10) {
      console.log(`- ${clean.slice(0, 180)}`);
    }
  }
}

inspectPage('index.html');
inspectPage('cbse-saras.html');
inspectPage('staff.html');
