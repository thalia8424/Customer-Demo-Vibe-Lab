import { existsSync, renameSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const outputDirectory = resolve("output");

export default defineConfig({
  plugins: [
    viteSingleFile(),
    {
      name: "rename-export",
      closeBundle() {
        const source = resolve(outputDirectory, "index.html");
        const destination = resolve(outputDirectory, "customer-demo.html");

        if (existsSync(source)) {
          renameSync(source, destination);
        }
      }
    }
  ],
  build: {
    outDir: outputDirectory,
    emptyOutDir: true
  }
});