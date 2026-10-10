import { build } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { applyDocument, pages, robotsTxt, sitemapXml } from "./site-meta.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const routes = pages.map((page) => page.path);

await build({
  root,
  plugins: [react()],
  build: {
    ssr: true,
    outDir: "dist/server",
    rollupOptions: {
      input: "src/entry-server.jsx",
    },
    emptyOutDir: true,
  },
  ssr: {
    noExternal: true,
  },
});

const serverEntry = path.join(distDir, "server", "entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

for (const route of routes) {
  const appHtml = render(route);
  const html = applyDocument(template, { pathname: route, appHtml });

  if (route === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html);
    continue;
  }

  const routeDir = path.join(distDir, route.slice(1));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
}

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml());
fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt());
fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });

console.log(`Prerendered ${routes.length} routes.`);
