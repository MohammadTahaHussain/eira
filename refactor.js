const fs = require('fs');
const content = fs.readFileSync('app/page.js', 'utf8');

const headerStart = content.indexOf('<header');
const headerEnd = content.indexOf('</header>') + 9;
const footerStart = content.indexOf('<footer');
const footerEnd = content.indexOf('</footer>') + 9;

const headerJSX = content.slice(headerStart, headerEnd);
const footerJSX = content.slice(footerStart, footerEnd);

fs.mkdirSync('components', { recursive: true });

fs.writeFileSync('components/Header.jsx', `export default function Header() {\n  return (\n    ${headerJSX}\n  );\n}\n`);
fs.writeFileSync('components/Footer.jsx', `export default function Footer() {\n  return (\n    ${footerJSX}\n  );\n}\n`);

const mainStart = content.indexOf('<main');
const mainEnd = content.indexOf('</main>') + 7;
const mainJSX = content.slice(mainStart, mainEnd);

const newPageJs = content.slice(0, headerStart) + mainJSX + '\n    </>\n  );\n}\n';
fs.writeFileSync('app/page.js', newPageJs);
