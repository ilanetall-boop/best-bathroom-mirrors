/**
 * site-config.js — Best Bathroom Mirrors
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Bathroom Mirrors",
  domain: "bestbathroommirrors.com",
  tagline: "Expert reviews & buying guides for the perfect bathroom mirror",
  logo: "images/mirrors-logo.svg?v=2",
  newsletterUrl: "https://script.google.com/macros/s/AKfycbxhUcinCHfLDqvtL6ko2bxreGTOv4yOkGPrO_hUC7v9AVXvjI0cAG9k2nVXKAkbN8kV/exec",
  affiliateTag: "bestbathroommirrors-20",
  gaId: "G-C1VJMF3G8M",
  colors: {
    primary: "#283593",
    primaryLight: "#5C6BC0",
    primaryDark: "#1A237E",
    accent: "#FFD600",
    accentDark: "#F9A825"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "articles" },
    { label: "Comparisons", href: "comparisons" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ],
  footer: {
    description: "Your trusted source for bathroom mirror reviews, comparisons, and buying guides. Find the perfect mirror for style, lighting, and functionality.",
    quickLinks: [
      { label: "All Articles", href: "articles" },
      { label: "Comparisons", href: "comparisons" },
      { label: "How We Research", href: "how-we-research" },
      { label: "About Us", href: "about" }
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
      { label: "Affiliate Disclosure", href: "disclosure" }
    ],
    network: [
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" },
      { label: "Best Shower Curtains", href: "https://www.best-shower-curtains.com" },
      { label: "Best Toilet Seats", href: "https://www.besttoiletseats.com" },
      { label: "Best Bathroom Vanities", href: "https://www.bestbathroomvanities.com" },
      { label: "Best Shower Heads", href: "https://www.best-shower-heads.com" },
      { label: "Best Soap Dispensers", href: "https://best-soap-dispensers.com" },
      { label: "Best Bath Towels", href: "https://www.best-bath-towels.com" },
      { label: "Best Towel Warmers", href: "https://www.best-towel-warmers.com" },
      { label: "Best Bathroom Faucets", href: "https://best-bathroom-faucets.com" },
      { label: "Best Bathroom Storage", href: "https://www.bestbathroomstorage.com" }
    ]
  },
  networkBanners: [
    {
      id: "best-bath-rugs",
      domain: "www.bestbathrugs.com",
      headline: "Looking for the Perfect Bath Rug?",
      description: "Discover our expert reviews of the best bath rugs — from ultra-absorbent to non-slip designs. Find your perfect match.",
      ctaText: "Browse Bath Rugs",
      active: true
    },
    {
      id: "best-shower-curtains",
      domain: "best-shower-curtains.com",
      headline: "Need a New Shower Curtain?",
      description: "From waterproof liners to luxury hotel-style designs. Our experts tested the top shower curtains so you don't have to.",
      ctaText: "Browse Shower Curtains",
      active: true
    },
    {
      id: "best-toilet-seats",
      domain: "besttoiletseats.com",
      headline: "Upgrading Your Toilet Seat?",
      description: "From bidet seats to soft-close designs. Expert reviews of the best toilet seats for comfort and hygiene.",
      ctaText: "Browse Toilet Seats",
      active: true
    },
    {
      id: "best-bathroom-vanities",
      domain: "bestbathroomvanities.com",
      headline: "Shopping for a Bathroom Vanity?",
      description: "Expert reviews of the best bathroom vanities — from floating modern designs to farmhouse styles. Find the perfect vanity for your renovation.",
      ctaText: "Browse Bathroom Vanities",
      active: true
    },
    {
      id: "best-shower-heads",
      domain: "best-shower-heads.com",
      headline: "Need a Better Shower Head?",
      description: "From rainfall to high-pressure to filtered — expert reviews of the best shower heads for every bathroom.",
      ctaText: "Browse Shower Heads",
      active: true
    },
    {
      id: "best-bath-towels",
      domain: "best-bath-towels.com",
      headline: "Looking for Luxury Bath Towels?",
      description: "Expert reviews of the softest, most absorbent bath towels. From Egyptian cotton to quick-dry microfiber.",
      ctaText: "Browse Bath Towels",
      active: true
    }
  ]
};

// Set CSS variables immediately
(function () {
  var c = window.SITE_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary', c.primary);
  r.setProperty('--primary-light', c.primaryLight);
  r.setProperty('--primary-dark', c.primaryDark);
  r.setProperty('--accent', c.accent);
  r.setProperty('--accent-dark', c.accentDark);

  // Reserve header space to prevent CLS (layout shift)
  var s = document.createElement('style');
  s.textContent = '#site-header{min-height:89px;background:#fff;border-bottom:1px solid #e5e5e5;position:sticky;top:0;z-index:50}';
  document.head.appendChild(s);
})();
