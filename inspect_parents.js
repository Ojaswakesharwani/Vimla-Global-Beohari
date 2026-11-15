const fs = require('fs');
const html = fs.readFileSync('scraped/index.html', 'utf8');

const tIdx = html.indexOf('What Parents are Saying');
if (tIdx !== -1) {
  console.log(html.slice(tIdx, tIdx + 4000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}
