const fs = require('fs');

const html = fs.readFileSync('site.html', 'utf8');
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Images count:', imgs.length);
console.log('Images:', JSON.stringify(imgs, null, 2));

const links = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Unique Links:', JSON.stringify([...new Set(links)], null, 2));
