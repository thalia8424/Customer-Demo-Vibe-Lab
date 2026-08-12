import {
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const outputDirectory = resolve("output");

const singleFileExport = () => ({
  name: "single-file-export",
  closeBundle() {
    const htmlPath = resolve(outputDirectory, "index.html");
    const assetsPath = resolve(outputDirectory, "assets");
    const assetNames = readdirSync(assetsPath);
    const scriptName = assetNames.find((name) => name.endsWith(".js"));
    const stylesheetName = assetNames.find((name) => name.endsWith(".css"));

    if (!scriptName || !stylesheetName) {
      throw new Error("Single-file export requires one generated script and stylesheet.");
    }

    const script = readFileSync(resolve(assetsPath, scriptName), "utf8");
    const stylesheet = readFileSync(resolve(assetsPath, stylesheetName), "utf8");
    const html = readFileSync(htmlPath, "utf8")
      .replace(/<script type="module"[^>]*><\/script>/, `<script type="module">${script}</script>`)
      .replace(/<link rel="stylesheet"[^>]*>/, `<style>${stylesheet}</style>`);

    writeFileSync(htmlPath, html);
    rmSync(assetsPath, { recursive: true });
    renameSync(htmlPath, resolve(outputDirectory, "customer-demo.html"));
  }
});

export default defineConfig({
  plugins: [singleFileExport()],
  build: {
    outDir: outputDirectory,
    emptyOutDir: true
  }
});