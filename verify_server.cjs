async function test() {
  try {
    const res = await fetch('http://127.0.0.1:3000/');
    console.log('HTTP Status:', res.status, res.statusText);
    const html = await res.text();
    console.log('HTML Length:', html.length);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
    
    // Check main JS entry
    const scriptMatch = html.match(/src="([^"]+\.jsx?)"/);
    if (scriptMatch) {
      const scriptUrl = 'http://127.0.0.1:3000' + scriptMatch[1];
      console.log('Fetching JS entry:', scriptUrl);
      const scriptRes = await fetch(scriptUrl);
      console.log('JS Entry Status:', scriptRes.status);
    }

    // Check images
    const imgRes = await fetch('http://127.0.0.1:3000/images/logo.png');
    console.log('Logo Status:', imgRes.status, imgRes.headers.get('content-type'));

    const founderImgRes = await fetch('http://127.0.0.1:3000/images/LKSingh.jpg');
    console.log('Founder Image Status:', founderImgRes.status, founderImgRes.headers.get('content-type'));

    const chairImgRes = await fetch('http://127.0.0.1:3000/images/Rinku-Bhaiya.jpg');
    console.log('Chairman Image Status:', chairImgRes.status, chairImgRes.headers.get('content-type'));
  } catch (err) {
    console.error('Verification failed:', err.message);
  }
}

test();
