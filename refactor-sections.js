const fs = require('fs');

const pageContent = fs.readFileSync('app/page.js', 'utf8');

const markers = [
  { id: 1, name: 'HeroSection', startStr: '{/* 1. HERO SECTION */}' },
  { id: 2, name: 'CapacitySelector', startStr: '{/* 2. INTERACTIVE CAPACITY SELECTOR */}' },
  { id: 3, name: 'ProductRange', startStr: '{/* 3. PRODUCT RANGE */}' },
  { id: 4, name: 'PowerTypeSection', startStr: '{/* 4. POWER TYPE SECTION */}' },
  { id: 5, name: 'SpotlightSection', startStr: '{/* 5. 3 TON FEATURE SPOTLIGHT */}' },
  { id: 6, name: 'WhyEiraSection', startStr: '{/* 6. WHY EIRA */}' },
  { id: 7, name: 'ApplicationsSection', startStr: '{/* 7. PAKISTANI INDUSTRIAL APPLICATIONS */}' },
  { id: 8, name: 'SupportSection', startStr: '{/* 8. SUPPORT BEYOND THE SALE */}' },
  { id: 9, name: 'AboutSection', startStr: '{/* 9. ABOUT EIRA */}' },
  { id: 10, name: 'QuoteModule', startStr: '{/* 10. LEAD GENERATION / QUOTATION MODULE */}' },
];

let sections = [];

for (let i = 0; i < markers.length; i++) {
  const current = markers[i];
  const startIndex = pageContent.indexOf(current.startStr);
  const endIndex = (i < markers.length - 1) 
    ? pageContent.indexOf(markers[i+1].startStr) 
    : pageContent.indexOf('</div>\n      </main>');
    
  if (startIndex === -1) {
    console.log(`Failed to find ${current.startStr}`);
    continue;
  }
  
  const content = pageContent.slice(startIndex, endIndex).trim();
  sections.push({ ...current, content });
}

// Extract capacityData and useState logic
const dataStart = pageContent.indexOf('const capacityData = {');
const dataEnd = pageContent.indexOf('export default function Home() {') - 1;
const capacityDataCode = pageContent.slice(dataStart, dataEnd).trim();

// Create files for each component
sections.forEach(sec => {
  let code = '';
  if (sec.name === 'CapacitySelector') {
    code = `"use client";\n\nimport { useState } from "react";\n\n${capacityDataCode}\n\nexport default function ${sec.name}() {\n  const [activeCap, setActiveCap] = useState('3t');\n  const activeData = capacityData[activeCap];\n\n  return (\n    <>\n      ${sec.content}\n    </>\n  );\n}\n`;
  } else if (sec.name === 'QuoteModule') {
    // QuoteModule has an onSubmit alert, requires use client if we want to be safe, but onClick inline alerts work in client components. It's safer to add "use client" for anything with events.
    code = `"use client";\n\nexport default function ${sec.name}() {\n  return (\n    <>\n      ${sec.content}\n    </>\n  );\n}\n`;
  } else if (sec.name === 'SpotlightSection') {
     code = `"use client";\n\nexport default function ${sec.name}() {\n  return (\n    <>\n      ${sec.content}\n    </>\n  );\n}\n`;
  } else {
    code = `export default function ${sec.name}() {\n  return (\n    <>\n      ${sec.content}\n    </>\n  );\n}\n`;
  }
  fs.writeFileSync(`components/${sec.name}.jsx`, code);
});

// Create new page.js
const imports = sections.map(sec => `import ${sec.name} from "../components/${sec.name}";`).join('\n');
const components = sections.map(sec => `          <${sec.name} />`).join('\n');

const newPageContent = `${imports}

export default function Home() {
  return (
    <main className="w-full pt-28 bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">
${components}
      </div>
    </main>
  );
}
`;

fs.writeFileSync('app/page.js', newPageContent);
console.log('Refactoring complete!');
