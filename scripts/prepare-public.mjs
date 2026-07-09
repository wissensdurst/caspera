import { cpSync, existsSync, mkdirSync, rmSync, copyFileSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "..");
const assetsSource = resolve(rootDir, "assets");
const assetsTarget = resolve(rootDir, "public", "assets");
const stylesDir = resolve(rootDir, "public", "styles");
const cssSource = resolve(rootDir, "styles", "main.css");
const cssTarget = resolve(stylesDir, "main.css");

if (existsSync(assetsTarget)) {
  rmSync(assetsTarget, { recursive: true, force: true });
}

cpSync(assetsSource, assetsTarget, { recursive: true });
mkdirSync(stylesDir, { recursive: true });
copyFileSync(cssSource, cssTarget);
