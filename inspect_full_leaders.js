const fs = require('fs');
const html = fs.readFileSync('scraped/index.html', 'utf8');

// Also check Principal Neha Tripathi in staff.html or index.html
console.log('--- CHAIRMAN ---');
const cIdx = html.indexOf('From the desk of the Chairman');
console.log(html.slice(cIdx, cIdx + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

console.log('\n--- DIRECTOR ---');
const dIdx = html.indexOf('From the desk of the Director');
console.log(html.slice(dIdx, dIdx + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

console.log('\n--- SECRETARY ---');
const sIdx = html.indexOf('From the desk of the Secretary');
console.log(html.slice(sIdx, sIdx + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

console.log('\n--- FOUNDER / MANAGER ---');
const fIdx = html.indexOf('From the desk of Founder member');
console.log(html.slice(fIdx, fIdx + 1200).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));

const staffHtml = fs.readFileSync('scraped/staff.html', 'utf8');
console.log('\n--- PRINCIPAL (from staff.html) ---');
const pIdx = staffHtml.indexOf('Neha Tripathi');
console.log(staffHtml.slice(Math.max(0, pIdx - 200), pIdx + 1000).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
