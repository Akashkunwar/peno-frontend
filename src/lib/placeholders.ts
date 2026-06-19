const palettes = [["#1a1a2e","#16213e","#0f3460"],["#2d1b69","#5b2c8e","#8b5cf6"],["#0d5e43","#059669","#34d399"],["#4a1d96","#6d28d9","#a78bfa"],["#7c2d12","#c2410c","#f97316"],["#064e3b","#047857","#6ee7b7"],["#312e81","#4338ca","#818cf8"],["#0f172a","#1e293b","#475569"]];
export function placeholderSVG(seed: string): string {
  let h=0; for(let i=0;i<seed.length;i++) h=seed.charCodeAt(i)+((h<<5)-h);
  const p=palettes[Math.abs(h)%palettes.length];
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${p[0]}"/><stop offset="50%" style="stop-color:${p[1]}"/><stop offset="100%" style="stop-color:${p[2]}"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/></svg>`)}`;
}
