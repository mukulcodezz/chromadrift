/**
 * CHROMADRIFT — collection data (generative colour-plate edition).
 * Curatorial concept: a finite suite of 4,444 generative colour plates in the
 * lineage of Albers and the Bauhaus colour course. No two palettes alike.
 */

export const COLLECTION = {
  name: "CHROMADRIFT",
  descriptor: "Generative Colour Plates",
  tagline: "A finite suite of generative colour plates — no two alike.",
  supply: 4444,
  chain: "Solana",
  standard: "Metaplex Core",
  mintPrice: 1.5,
  currency: "SOL",
  royalty: 5,
  maxPerWallet: 1,
  mintWindow: "Autumn 2026",
  curator: "Hélène Roy",
  studio: "Studio Chromadrift",
  contractAddress: "CHr0M…DR1FT",
  year: "MMXXVI",
};

export const NOTE = {
  marker: "§ 01 — Note",
  lead:
    "Chromadrift is a fixed edition of 4,444 plates, each the record of a single pass through a colour system that never resolves the same way twice. The work descends from the chromatic studies of Albers and the Bauhaus colour course — interval, adjacency, the way one field quietly changes its neighbour.",
  body:
    "No two plates share a palette. Each is composed, numbered, and signed at the moment of minting — then left exactly as it fell.",
};

/* Featured plates shown in the catalogue, mirroring the imported design. */
export const FEATURED = [
  { no: "0007", title: "Interval", artist: "M. Okonkwo", dim: "2400×3000", ar: "4-5", col: "a" },
  { no: "0142", title: "Quiet Adjacency", artist: "L. Vahl", dim: "3000×2000", ar: "3-2", col: "b" },
  { no: "0291", title: "Warm Over Cool", artist: "I. Tanaka", dim: "2600×2600", ar: "1-1", col: "c" },
  { no: "0488", title: "Recto", artist: "C. Mercer", dim: "2400×3000", ar: "4-5", col: "d" },
  { no: "0654", title: "Untitled (Drift)", artist: "T. Ferro", dim: "2200×2933", ar: "3-4", col: "e" },
  { no: "0810", title: "Field, Folded", artist: "H. Roy", dim: "3200×2000", ar: "16-10", col: "f" },
];

export const TRAITS = [
  { name: "Palette family", values: ["Warm", "Cool", "Neutral", "Split", "Near-monochrome"] },
  { name: "Interval", values: ["Tight", "Even", "Wide", "Irregular"] },
  { name: "Value run", values: ["Light→Dark", "Dark→Light"] },
  { name: "Chroma", values: ["Muted", "Mid", "Saturated"] },
  { name: "Fields", values: ["Four nested rectangles"] },
  { name: "Edition mark", values: ["Plate", "Proof", "Artist's Proof"] },
];

export const MINT_PHASES = [
  { name: "Allowlist", price: "1.5 ◎ SOL", limit: "1 per wallet", status: "upcoming", detail: "Opens one week prior" },
  { name: "Public", price: "1.5 ◎ SOL", limit: "Remainder", status: "upcoming", detail: "Autumn 2026" },
];

export const ROADMAP = [
  {
    phase: "Plate I",
    title: "The Edition",
    status: "active",
    desc: "Compose and release all 4,444 plates on Metaplex Core. Each palette generated, numbered, and signed at mint. Royalties enforced at 5%.",
    tags: ["Mint", "On-chain", "Provenance"],
  },
  {
    phase: "Plate II",
    title: "The Catalogue",
    status: "upcoming",
    desc: "A permanent on-site catalogue raisonné: every plate browsable by palette family, interval, and value run, with full minting record.",
    tags: ["Catalogue", "Index", "Search"],
  },
  {
    phase: "Plate III",
    title: "The Printing",
    status: "upcoming",
    desc: "Archival giclée editions for holders — the on-chain plate rendered to paper at 2400×3000, signed by the studio.",
    tags: ["Print", "Physical", "Holder"],
  },
  {
    phase: "Plate IV",
    title: "The Annex",
    status: "active",
    desc: "Annex I — Grove is live in the catalogue: fourteen companion plates by Grove (scenes and mascot Alfie), indexed alongside the generative edition. Further guest suites to follow.",
    tags: ["Grove", "Companion", "Annex I"],
  },
];

export const TEAM = [
  { name: "Hélène Roy", role: "Curator / Direction", bio: "Colour theorist and editor. Sets the system's intervals and selects each release.", social: { x: "@heleneroy" } },
  { name: "Mira Okonkwo", role: "Generative Systems", bio: "Writes the colour engine. Anchor and Rust developer, shipped on Solana mainnet.", social: { x: "@miraonchain" } },
  { name: "Isamu Tanaka", role: "Colour Composition", bio: "Painter working in value and adjacency. Author of the warm-over-cool studies.", social: { x: "@itanaka" } },
  { name: "Clara Mercer", role: "Catalogue / Print", bio: "Book designer. Builds the catalogue raisonné and the archival print program.", social: { x: "@cmercer" } },
  { name: "Theo Ferro", role: "Community", bio: "Runs the studio's correspondence and allowlist. Believes the index is the artwork.", social: { x: "@theoferro" } },
  { name: "L. Vahl", role: "Anonymous Colourist", bio: "Guest contributor. Identity disclosed when Plate IV opens.", social: { x: "@lvahl" } },
];

export const FAQ = [
  { q: "What is Chromadrift?", a: "A fixed edition of 4,444 generative colour plates on Solana. Each plate is a single pass through a colour system — composed, numbered, and signed at the moment of minting." },
  { q: "What does a plate actually look like?", a: "The generative edition is four nested rectangular fields in a generated palette, in the lineage of Albers' colour studies — re-roll the living plate on the home page to see the system. The catalogue currently shows Annex I (Grove): illustrated scenes and a mascot, presented in the same plate index." },
  { q: "What is Annex I — Grove?", a: "The first companion suite in the Chromadrift programme — fourteen plates by Grove (thirteen scenes plus Alfie the mascot), indexed and browsable here while the generative edition prepares to mint." },
  { q: "How much does it cost to mint?", a: "1.5 ◎ SOL per plate, plus standard Solana network fees. One plate per wallet during allowlist; the remainder release publicly thereafter." },
  { q: "What wallet do I need?", a: "Phantom, Solflare, or any Wallet Standard compatible Solana wallet. Connect on the Mint page when the window opens." },
  { q: "When is the mint?", a: "Autumn 2026. The allowlist opens one week prior. Exact block and date are announced to the studio's correspondents first." },
  { q: "Are royalties enforced?", a: "Yes — a 5% creator royalty on secondary sales, enforced via the Metaplex Core royalty plugin." },
  { q: "Is this financial advice?", a: "No. Chromadrift is a digital art edition. Acquire it because you want the plate." },
];

/* Catalogue items — the Grove drop. Real artwork, presented as plates. */
const GROVE = [
  { file: "32", title: "First Light", tier: "scene" },
  { file: "11", title: "Late Shift", tier: "scene" },
  { file: "26", title: "Adrift", tier: "scene" },
  { file: "12", title: "Slow Morning", tier: "scene" },
  { file: "28", title: "The Long Way", tier: "scene" },
  { file: "27", title: "Coin Toss", tier: "scene" },
  { file: "13", title: "Night Walk", tier: "scene" },
  { file: "29", title: "High Noon", tier: "scene" },
  { file: "14", title: "Quiet Hours", tier: "scene" },
  { file: "25", title: "Deep End", tier: "scene" },
  { file: "15", title: "Off Grid", tier: "scene" },
  { file: "30", title: "Last Call", tier: "scene" },
  { file: "16", title: "Homebound", tier: "scene" },
  { file: "alfie", title: "Alfie", tier: "mascot" },
];

export const GALLERY_ITEMS = GROVE.map((g, i) => ({
  id: String(g.file === "alfie" ? 1 : parseInt(g.file, 10)).padStart(4, "0"),
  title: g.title,
  artist: "Annex I · Grove",
  family: g.tier,
  tier: g.tier === "mascot" ? "Mascot" : "Drop",
  tier_key: g.tier,
  img: `assets/images/grove/${g.file}.webp`,
}));
