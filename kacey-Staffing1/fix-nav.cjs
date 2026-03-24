const fs = require('fs');
let code = fs.readFileSync('src/components/Navigation.tsx', 'utf8');

code = code.replace(/location\.pathname === '\/' && !isScrolled/g, "['/', '/programs', '/application'].includes(location.pathname) && !isScrolled");

fs.writeFileSync('src/components/Navigation.tsx', code);
