// Membangun OS 2D (os-source) lalu menyalinnya ke static/os.
// Ditulis dengan Node supaya jalan di Windows, macOS, dan Linux.
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'os-source');
const target = path.join(root, 'static', 'os');

const env = Object.assign({}, process.env, { CI: 'false', GENERATE_SOURCEMAP: 'false' });
const run = (command) => execSync(command, { cwd: source, stdio: 'inherit', env });

run('npm install --legacy-peer-deps');
run('npm run build');

fs.rmSync(target, { recursive: true, force: true });
fs.cpSync(path.join(source, 'build'), target, { recursive: true });

console.log('\nSelesai. static/os sudah diperbarui dari os-source.');