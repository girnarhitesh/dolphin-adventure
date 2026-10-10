import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { applyDocument } from "./scripts/site-meta.mjs";

function siteSeoPlugin() {
  return {
    name: "site-seo",
    async transformIndexHtml(html, ctx) {
      const pathname = (ctx?.originalUrl || "/").split("?")[0];
      let appHtml = "";

      if (ctx?.server) {
        try {
          const mod = await ctx.server.ssrLoadModule("/src/entry-server.jsx");
          appHtml = mod.render(pathname);
        } catch (error) {
          console.error("[site-seo] page HTML was not added to the source:", error);
        }
      }

      return applyDocument(html, { pathname, appHtml });
    },
  };
}

export default defineConfig({
  plugins: [react(), siteSeoPlugin()],
});
