import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Necesario en ESM para obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ignoredDirs = ["node_modules", ".git", "dist", "build"];

async function printTree(dir, prefix = "") {
  const files = await readdir(dir);
  for (const file of files) {
    if (ignoredDirs.includes(file)) continue;
    const fullPath = path.join(dir, file);
    const stats = await stat(fullPath);
    const isDir = stats.isDirectory();

    console.log(`${prefix}${isDir ? "📁" : "📄"} ${file}`);
    if (isDir) {
      await printTree(fullPath, prefix + "  ");
    }
  }
}

console.log("\n📦 Estructura del Proyecto JustDiveCol:\n");
await printTree(__dirname);