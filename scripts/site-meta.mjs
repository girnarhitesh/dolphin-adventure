export const SITE_URL = "https://beytdwarka.com";

export const SITE = {
  name: "Dolphin Adventure",
  locale: "en_IN",
  phone: "+91 7201060500",
  phoneTel: "+917201060500",
  email: "info@beytdwarka.com",
  locality: "Beyt Dwarka",
  region: "Gujarat",
  country: "IN",
  imagePath: "/Images/policy-hero.jpg",
  logoPath: "/Images/dolphin-adventure-logo.png",
  facebook: "https://www.facebook.com/ajay.kateshiya.manu247",
  instagram: "https://www.instagram.com/beytdwarka_tourism",
};

export const pages = [
  {
    path: "/",
    title: "Dolphin Adventure | Beach Camping & Water Sports in Beyt Dwarka",
    description:
      "Dolphin Adventure is Beyt Dwarka's only campsite with water sports on the beach. Parasailing, jet ski, speed boat, banana ride, sofa ride, ATV, dolphin exploration, bonfire, and beach stays.",
    keywords:
      "Dolphin Adventure, Beyt Dwarka camping, water sports Beyt Dwarka, parasailing Beyt Dwarka, jet ski Beyt Dwarka, dolphin exploration, beach camping Gujarat",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Dolphin Adventure",
    description:
      "How Dolphin Adventure collects and uses booking, safety, and stay details for water sports, dolphin exploration, bonfire, and beach stays at Beyt Dwarka.",
    keywords: "Dolphin Adventure privacy policy, Beyt Dwarka booking privacy",
    changefreq: "yearly",
    priority: "0.4",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms & Conditions | Dolphin Adventure",
    description:
      "Booking terms for parasailing, jet ski, speed boat, banana ride, sofa ride, ATV, dolphin exploration, bonfire, Beach Camping, and Beach Stay at Dolphin Adventure, Beyt Dwarka.",
    keywords: "Dolphin Adventure terms, Beyt Dwarka water sports booking terms",
    changefreq: "yearly",
    priority: "0.4",
  },
  {
    path: "/refund-policy",
    title: "Refund & Cancellation Policy | Dolphin Adventure",
    description:
      "Cancellation windows and refunds for day activities and camp stays at Dolphin Adventure, Beyt Dwarka, including weather and sea-condition cancellations.",
    keywords: "Dolphin Adventure refund, Beyt Dwarka camping cancellation",
    changefreq: "yearly",
    priority: "0.4",
  },
  {
    path: "/liability-waiver",
    title: "Liability Waiver | Dolphin Adventure",
    description:
      "Risks, age and weight limits, life jacket rules, and safety briefings for water sports and beach stays at Dolphin Adventure, Beyt Dwarka.",
    keywords: "Dolphin Adventure waiver, Beyt Dwarka water sports safety",
    changefreq: "yearly",
    priority: "0.4",
  },
];

const offers = [
  ["Parasailing", "1500"],
  ["Jet Ski Ride", "500"],
  ["Speed Boat", "200"],
  ["Banana Ride", "200"],
  ["Sofa Ride", "200"],
  ["ATV Ride", "200"],
  ["Beach Camping", "2999"],
  ["Beach Stay", "1199"],
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function normalizePath(pathname = "/") {
  const path = pathname.split("?")[0].split("#")[0];
  if (path === "" || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function metaFor(pathname) {
  const path = normalizePath(pathname);
  return (
    pages.find((page) => page.path === path) || {
      path,
      title: "Page not found | Dolphin Adventure",
      description: "This page is not part of the Dolphin Adventure website.",
      keywords: "Dolphin Adventure, Beyt Dwarka",
      robots: "noindex, follow",
    }
  );
}

function jsonLd(meta) {
  const canonical = new URL(meta.path, SITE_URL).href;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE.name,
        description: pages[0].description,
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": ["TouristAttraction", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: SITE.name,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${SITE.imagePath}`,
        logo: `${SITE_URL}${SITE.logoPath}`,
        telephone: SITE.phoneTel,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.locality,
          addressRegion: SITE.region,
          addressCountry: SITE.country,
        },
        sameAs: [SITE.facebook, SITE.instagram],
        makesOffer: offers.map(([name, price]) => ({
          "@type": "Offer",
          name,
          price,
          priceCurrency: "INR",
          url: `${SITE_URL}/`,
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
    ],
  };
}

export function renderHead(pathname) {
  const meta = metaFor(pathname);
  const canonical = new URL(meta.path === "/" ? "/" : meta.path, SITE_URL).href;
  const image = `${SITE_URL}${SITE.imagePath}`;
  const robots = meta.robots || "index, follow, max-image-preview:large";
  const structuredData = JSON.stringify(jsonLd(meta)).replaceAll("<", "\\u003c");

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`,
    `<meta name="author" content="${escapeHtml(SITE.name)}" />`,
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<meta name="theme-color" content="#134070" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta property="og:image:alt" content="The sea at Beyt Dwarka, Dolphin Adventure" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    `<script type="application/ld+json">${structuredData}</script>`,
  ].join("\n    ");
}

export function applyDocument(html, { pathname = "/", appHtml = "" } = {}) {
  const head = renderHead(pathname);
  let next = html.replace(
    /<!--seo-->[\s\S]*?<!--\/seo-->/,
    `<!--seo-->\n    ${head}\n    <!--/seo-->`
  );

  if (appHtml) {
    next = next.replace("<!--app-html-->", appHtml);
  }

  return next;
}

export function sitemapXml() {
  const lastmod = "2026-10-10";
  const urls = pages
    .map((page) => {
      const loc = new URL(page.path, SITE_URL).href;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${page.changefreq}</changefreq>`,
        `    <priority>${page.priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}
