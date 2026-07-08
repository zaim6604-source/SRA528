/* ── Photo-realistic SVG data-URI placeholders (Magenta Bloom) ── */

function svgURI(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function heroImage() {
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <defs><linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#D7263D"/><stop offset="100%" style="stop-color:#B3001B"/></linearGradient></defs>
    <rect width="500" height="500" fill="#FFF0F3"/>
    <circle cx="250" cy="240" r="140" fill="none" stroke="#D7263D" stroke-width="2" opacity="0.3"/>
    <circle cx="250" cy="240" r="100" fill="none" stroke="#D7263D" stroke-width="1.5" opacity="0.2"/>
    <ellipse cx="200" cy="220" rx="40" ry="25" fill="#D7263D" opacity="0.4"/>
    <ellipse cx="300" cy="230" rx="30" ry="20" fill="#D7263D" opacity="0.35"/>
    <ellipse cx="250" cy="280" rx="25" ry="15" fill="#D7263D" opacity="0.3"/>
    <line x1="200" y1="220" x2="300" y2="230" stroke="#02C39A" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="250" y1="280" x2="200" y2="220" stroke="#02C39A" stroke-width="1.5" stroke-dasharray="3,3"/>
    <circle cx="200" cy="218" r="6" fill="#D7263D"/><circle cx="200" cy="218" r="3" fill="white"/>
    <circle cx="300" cy="228" r="6" fill="#D7263D"/><circle cx="300" cy="228" r="3" fill="white"/>
    <circle cx="250" cy="278" r="5" fill="#F46197"/><circle cx="250" cy="278" r="2.5" fill="white"/>
    <rect x="0" y="400" width="500" height="100" fill="url(#hg)" rx="0"/>
    <text x="250" y="440" text-anchor="middle" fill="white" font-size="18" font-weight="800" font-family="sans-serif">SAREER RECRUITING</text>
    <text x="250" y="465" text-anchor="middle" fill="#02C39A" font-size="12" font-weight="600" font-family="sans-serif">AGENCY · LICENSE 2218/MLK</text>
  </svg>`);
}

export function aboutImage() {
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
    <defs><linearGradient id="abg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0d1520"/></linearGradient></defs>
    <rect width="600" height="400" fill="#e8f0fe"/>
    <rect width="600" height="180" fill="#c8ddf5"/>
    <ellipse cx="140" cy="50" rx="55" ry="22" fill="white" opacity="0.7"/>
    <rect x="160" y="90" width="280" height="280" fill="#ddd" rx="2"/>
    <rect x="165" y="95" width="270" height="270" fill="#f0f0f0" rx="2"/>
    <rect x="210" y="70" width="180" height="25" fill="#D7263D" rx="2"/>
    <text x="300" y="87" text-anchor="middle" fill="white" font-size="12" font-weight="800" font-family="sans-serif">SAREER RECRUITING</text>
    <rect x="180" y="120" width="45" height="55" fill="#88c4f5" rx="2"/>
    <rect x="240" y="120" width="45" height="55" fill="#d4e8fa" rx="2"/>
    <rect x="300" y="120" width="45" height="55" fill="#88c4f5" rx="2"/>
    <rect x="360" y="120" width="45" height="55" fill="#d4e8fa" rx="2"/>
    <rect x="250" y="330" width="100" height="60" fill="#D7263D" rx="3"/>
    <rect x="256" y="336" width="88" height="48" fill="#F46197" rx="2"/>
    <circle cx="330" cy="360" r="3" fill="#02C39A"/>
    <rect x="0" y="380" width="600" height="20" fill="#7a9e6d"/>
    <circle cx="520" cy="45" r="38" fill="#02C39A" opacity="0.8"/>
  </svg>`);
}

export function serviceImage(index) {
  const icons = ['&#x1F3D7;','&#x1F477;','&#x1F4CB;','&#x2708;','&#x1F3E2;','&#x1F393;','&#x1F91D;','&#x1F4BC;'];
  const labels = ['Manpower Supply','Visa Processing','Documentation','Travel','Pre-Departure','Training','Partnership','Executive Search'];
  const icon = icons[index] || '&#x1F4BC;';
  const label = labels[index] || 'Service';
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280"><rect width="400" height="280" fill="url(#sg${index})"/><defs><linearGradient id="sg${index}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#D7263D"/><stop offset="100%" style="stop-color:#B3001B"/></linearGradient></defs><circle cx="200" cy="110" r="55" fill="white" opacity="0.15"/><text x="200" y="130" text-anchor="middle" fill="white" font-size="50">${icon}</text><text x="200" y="220" text-anchor="middle" fill="white" font-size="18" font-weight="800" font-family="sans-serif">${label}</text></svg>`);
}

export function countryImage(name) {
  const scenes = {
    'Saudi Arabia': `<rect width="400" height="280" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="55" fill="#006C35"/><rect x="0" y="225" width="400" height="55" fill="#006C35"/><rect x="155" y="15" width="90" height="250" fill="#C2A06E"/><rect x="100" y="60" width="200" height="160" fill="#f5e6c8" rx="6"/><text x="200" y="155" text-anchor="middle" fill="#006C35" font-size="45" font-weight="bold" font-family="serif">&#x2704;</text>`,
    'UAE': `<rect width="400" height="280" fill="#f5e6c8"/><rect x="0" y="0" width="400" height="70" fill="#00732F"/><rect x="0" y="70" width="400" height="12" fill="white"/><rect x="0" y="82" width="400" height="12" fill="black"/><rect x="0" y="198" width="400" height="12" fill="black"/><rect x="0" y="210" width="400" height="12" fill="white"/><rect x="0" y="222" width="400" height="58" fill="#00732F"/><rect x="0" y="0" width="60" height="280" fill="#D7263D"/><circle cx="30" cy="140" r="16" fill="white"/><circle cx="30" cy="140" r="9" fill="#D7263D"/><text x="295" y="60" text-anchor="middle" fill="#340710" font-size="18" font-weight="800" font-family="sans-serif">UAE</text>`,
    'Qatar': `<rect width="400" height="280" fill="#8A1538"/><polygon points="100,0 120,15 100,30 120,45 100,60 120,75 100,90 120,105 100,120 120,135 100,150 120,165 100,180 120,195 100,210 120,225 100,240 120,255 100,260 120,265 120,280 0,280 0,0" fill="white"/><text x="260" y="88" text-anchor="middle" fill="white" font-size="24" font-weight="800" font-family="sans-serif">QATAR</text>`,
    'Oman': `<rect width="400" height="280" fill="#e8f4f8"/><rect x="0" y="0" width="400" height="50" fill="#D7263D"/><rect x="0" y="50" width="400" height="12" fill="white"/><rect x="0" y="62" width="400" height="50" fill="#D7263D"/><rect x="0" y="220" width="400" height="60" fill="#006847"/><rect x="0" y="62" width="60" height="218" fill="#D7263D"/><circle cx="30" cy="170" r="20" fill="white"/><circle cx="30" cy="170" r="14" fill="#D7263D"/><text x="260" y="180" text-anchor="middle" fill="#340710" font-size="22" font-weight="800" font-family="sans-serif">Muscat</text>`,
    'Germany': `<rect width="400" height="280" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="93" fill="black"/><rect x="0" y="93" width="400" height="94" fill="#DD0000"/><rect x="0" y="187" width="400" height="93" fill="#FFCE00"/><text x="200" y="155" text-anchor="middle" fill="white" font-size="32" font-weight="800" font-family="sans-serif" paint-order="stroke" stroke="#333" stroke-width="3">GERMANY</text>`,
    'Romania': `<rect width="400" height="280" fill="#f5f5f5"/><rect x="0" y="0" width="133" height="280" fill="#002B7F"/><rect x="133" y="0" width="134" height="280" fill="#FCD116"/><rect x="267" y="0" width="133" height="280" fill="#CE1126"/><text x="200" y="155" text-anchor="middle" fill="white" font-size="22" font-weight="800" font-family="sans-serif" paint-order="stroke" stroke="#333" stroke-width="2">ROMANIA</text>`,
    'Greece': `<rect width="400" height="280" fill="#e8f4f8"/><rect x="0" y="0" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="40" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="80" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="120" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="160" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="200" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="240" width="400" height="20" fill="#0D5EAF"/><rect x="0" y="0" width="100" height="100" fill="#0D5EAF"/><rect x="40" y="0" width="20" height="100" fill="white"/><rect x="0" y="40" width="100" height="20" fill="white"/><text x="280" y="165" text-anchor="middle" fill="#0D5EAF" font-size="22" font-weight="800" font-family="sans-serif">GREECE</text>`,
    'Croatia': `<rect width="400" height="280" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="93" fill="#D7263D"/><rect x="0" y="93" width="400" height="94" fill="white"/><rect x="0" y="187" width="400" height="93" fill="#0D5EAF"/><rect x="140" y="10" width="120" height="70" fill="white" rx="4"/><circle cx="200" cy="45" r="20" fill="#D7263D"/><circle cx="200" cy="45" r="14" fill="white"/><circle cx="200" cy="45" r="7" fill="#D7263D"/><text x="200" y="150" text-anchor="middle" fill="#340710" font-size="22" font-weight="800" font-family="sans-serif">CROATIA</text>`,
    'Malaysia': `<rect width="400" height="280" fill="#f5f5f5"/><rect x="0" y="0" width="400" height="20" fill="#D7263D"/><rect x="0" y="40" width="400" height="20" fill="#D7263D"/><rect x="0" y="80" width="400" height="20" fill="#D7263D"/><rect x="0" y="120" width="400" height="20" fill="#D7263D"/><rect x="0" y="160" width="400" height="20" fill="#D7263D"/><rect x="0" y="200" width="400" height="20" fill="#D7263D"/><rect x="0" y="240" width="400" height="20" fill="#D7263D"/><rect x="0" y="0" width="140" height="100" fill="#0D5EAF"/><rect x="0" y="0" width="20" height="100" fill="#D7263D"/><rect x="0" y="0" width="140" height="20" fill="#D7263D"/><rect x="0" y="40" width="140" height="20" fill="#D7263D"/><rect x="0" y="80" width="140" height="20" fill="#D7263D"/><rect x="0" y="0" width="40" height="100" fill="#0D5EAF"/><rect x="0" y="0" width="40" height="20" fill="#02C39A"/><rect x="0" y="40" width="40" height="20" fill="#02C39A"/><rect x="0" y="80" width="40" height="20" fill="#02C39A"/><circle cx="20" cy="50" r="8" fill="#02C39A"/><text x="280" y="165" text-anchor="middle" fill="#340710" font-size="22" font-weight="800" font-family="sans-serif">MALAYSIA</text>`,
  };
  return svgURI(scenes[name] || `<rect width="400" height="280" fill="#D7263D"/><circle cx="200" cy="140" r="70" fill="white" opacity="0.9"/><text x="200" y="155" text-anchor="middle" fill="#D7263D" font-size="45" font-weight="bold" font-family="sans-serif">${name.charAt(0)}</text><text x="200" y="230" text-anchor="middle" fill="white" font-size="18" font-weight="700" font-family="sans-serif">${name}</text>`);
}

export function galleryImage(type) {
  const scenes = {
    Office: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#c8ddf5"/><rect x="100" y="120" width="200" height="240" fill="#ddd" rx="2"/><rect x="105" y="125" width="190" height="230" fill="#f0f0f0" rx="2"/><rect x="130" y="100" width="140" height="25" fill="#D7263D" rx="2"/><text x="200" y="117" text-anchor="middle" fill="white" font-size="11" font-weight="800" font-family="sans-serif">SAREER</text><rect x="250" y="330" width="60" height="50" fill="#D7263D" rx="3"/><rect x="254" y="334" width="52" height="42" fill="#F46197" rx="2"/><rect x="0" y="360" width="400" height="40" fill="#7a9e6d"/><text x="200" y="385" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">Our Office · Batkhela</text></svg>`,
    Team: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#FFF0F3"/><circle cx="130" cy="140" r="40" fill="#D7263D" opacity="0.12"/><circle cx="270" cy="140" r="40" fill="#D7263D" opacity="0.12"/><circle cx="200" cy="260" r="50" fill="#D7263D" opacity="0.1"/><text x="200" y="275" text-anchor="middle" fill="#D7263D" font-size="40" font-weight="bold" font-family="sans-serif">&#x1F465;</text><text x="200" y="340" text-anchor="middle" fill="#D7263D" font-size="14" font-weight="800" font-family="sans-serif">Our Team</text></svg>`,
    Documents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#f8f5f0"/><rect x="80" y="50" width="240" height="300" fill="white" rx="6"/><rect x="100" y="70" width="200" height="45" fill="#D7263D" rx="4"/><text x="200" y="97" text-anchor="middle" fill="white" font-size="13" font-weight="700" font-family="sans-serif">&#x1F4C4; DOCUMENTS</text></svg>`,
    Travel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#e8f4f8"/><rect x="0" y="250" width="400" height="150" fill="#888"/><polygon points="200,50 230,115 170,115" fill="#D7263D"/><polygon points="200,55 225,110 175,110" fill="#F46197"/><rect x="185" y="100" width="30" height="20" fill="#02C39A" rx="2"/><text x="200" y="305" text-anchor="middle" fill="#D7263D" font-size="14" font-weight="800" font-family="sans-serif">&#x2708; Travel</text></svg>`,
    Partners: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#FFF0F3"/><circle cx="140" cy="150" r="55" fill="#D7263D" opacity="0.1"/><circle cx="260" cy="150" r="55" fill="#D7263D" opacity="0.1"/><rect x="155" y="235" width="90" height="70" fill="#D7263D" rx="8"/><text x="200" y="273" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="sans-serif">&#x1F91D;</text><text x="200" y="340" text-anchor="middle" fill="#D7263D" font-size="14" font-weight="800" font-family="sans-serif">Global Partners</text></svg>`,
    Training: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#FFF0F3"/><rect x="60" y="60" width="280" height="220" fill="white" rx="10"/><rect x="80" y="80" width="240" height="5" fill="#D7263D" rx="2"/><text x="120" y="163" text-anchor="middle" fill="#D7263D" font-size="18" font-weight="800" font-family="sans-serif">&#x1F393;</text><rect x="80" y="270" width="240" height="70" fill="#D7263D" rx="0"/><text x="200" y="315" text-anchor="middle" fill="white" font-size="14" font-weight="800" font-family="sans-serif">Training</text></svg>`,
  };
  return svgURI(scenes[type] || `<rect width="400" height="400" fill="#D7263D"/><circle cx="200" cy="200" r="80" fill="white" opacity="0.2"/><text x="200" y="215" text-anchor="middle" fill="white" font-size="50" font-weight="bold" font-family="sans-serif">${type.charAt(0)}</text><text x="200" y="340" text-anchor="middle" fill="white" font-size="18" font-weight="700" font-family="sans-serif">${type}</text>`);
}

export function testimonialAvatar(seed) {
  const colors = [['#D7263D','#B3001B'],['#F46197','#D7263D'],['#7768AE','#F46197'],['#B3001B','#8B0000']];
  const c = colors[seed % colors.length];
  const initials = ['A','F','M','S'];
  const i = initials[seed % initials.length];
  return svgURI(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="a${seed}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c[0]}"/><stop offset="100%" style="stop-color:${c[1]}"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#a${seed})"/><circle cx="50" cy="38" r="16" fill="white" opacity="0.85"/><ellipse cx="50" cy="80" rx="28" ry="24" fill="white" opacity="0.85"/><text x="50" y="44" text-anchor="middle" fill="${c[0]}" font-size="22" font-weight="800" font-family="sans-serif">${i}</text></svg>`);
}

export default { heroImage, aboutImage, serviceImage, countryImage, galleryImage, testimonialAvatar };