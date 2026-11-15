const fs = require('fs');

console.log('--- ACTIVITIES ---');
const actHtml = fs.readFileSync('scraped/activities.html', 'utf8');
console.log(actHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1500));

console.log('\n--- CBSE SARAS ---');
const sarasHtml = fs.readFileSync('scraped/cbse-saras.html', 'utf8');
const sarasClean = sarasHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(sarasClean.slice(sarasClean.indexOf('Mandatory Public Disclosure'), sarasClean.indexOf('Mandatory Public Disclosure') + 2500));
