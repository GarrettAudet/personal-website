const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
for (const directory of ['public', 'build']) {
  const files = fs.readdirSync(path.join(root, directory));
  assert.ok(files.includes('CNAME'), `${directory}/CNAME must use the exact GitHub Pages filename`);
  assert.equal(fs.readFileSync(path.join(root, directory, 'CNAME'), 'utf8').trim(), 'garrettaudet.com');
}
assert.ok(fs.existsSync(path.join(root, 'build', 'index.html')), 'production HTML must exist');
console.log('Verified public/CNAME and production build/CNAME: garrettaudet.com');
