const fs = require('fs');
const path = require('path');

const baseUrl = 'http://vgsbeohari.com/';
const pages = [
  'index.html',
  'about.html',
  'mission.html',
  'vision.html',
  'inspiration.html',
  'fee-structure.html',
  'staff.html',
  'committee.html',
  'activities.html',
  'cbse-saras.html',
  'result.html',
  'admission.html',
  'achievement.html',
  'contact.html'
];

async function run() {
  if (!fs.existsSync('scraped')) fs.mkdirSync('scraped');
  if (!fs.existsSync('scraped/images')) fs.mkdirSync('scraped/images', { recursive: true });

  const allImages = new Set([
    'images/logo.png',
    'images/banner-3.jpg',
    'images/banner.jpg',
    'images/Rinku-Bhaiya.jpg',
    'images/dr-gunjan-singh.jpg',
    'images/prabhat-singh.jpg',
    'images/alok.jpg',
    'images/LKSingh.jpg',
    'images/vimlaSingh.jpg',
    'images/banner-5.jpg',
    'images/logo-name.png',
    'images/book-now.jpg',
    'images/s-1.png',
    'images/s-2.png',
    'images/s-3.png',
    'images/s-4.png',
    'images/s-5.png',
    'images/f-1.png',
    'images/f-2.png',
    'images/f-3.png',
    'images/f-4.png'
  ]);

  for (const p of pages) {
    try {
      console.log('Fetching page:', p);
      const res = await fetch(baseUrl + p);
      const text = await res.text();
      fs.writeFileSync(path.join('scraped', p), text);

      // Collect any other images
      const matches = [...text.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
      for (const m of matches) {
        if (!m.startsWith('http') && !m.startsWith('//')) {
          allImages.add(m.replace(/^\//, ''));
        }
      }
    } catch (e) {
      console.error('Error fetching page', p, e.message);
    }
  }

  console.log('Total unique images to download:', allImages.size);
  for (const img of allImages) {
    try {
      const url = baseUrl + img;
      console.log('Downloading image:', url);
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        const localPath = path.join('scraped', img);
        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        fs.writeFileSync(localPath, buf);
        console.log('Saved', localPath, buf.length, 'bytes');
      } else {
        console.log('Failed to fetch', url, res.status);
      }
    } catch (e) {
      console.error('Error downloading image', img, e.message);
    }
  }
}

run();
