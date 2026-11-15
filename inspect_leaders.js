const fs = require('fs');
const html = fs.readFileSync('scraped/index.html', 'utf8');

const leaders = ['Viresh', 'Rinku', 'Gunjan', 'Prabhat', 'alok', 'Neha', 'Tripathi'];
for (const l of leaders) {
  let idx = 0;
  while ((idx = html.toLowerCase().indexOf(l.toLowerCase(), idx)) !== -1) {
    console.log(`=== Found ${l} at ${idx} ===`);
    console.log(html.slice(Math.max(0, idx - 100), Math.min(html.length, idx + 400)).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    idx += l.length + 100;
  }
}
