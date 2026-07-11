import fs from "node:fs";
import path from "node:path";

const clientDir = path.resolve("build/client");
const nestedDir = path.join(clientDir, "nasser-junior-portfolio");

if (fs.existsSync(nestedDir)) {
  const indexPath = path.join(nestedDir, "index.html");
  if (fs.existsSync(indexPath)) {
    fs.renameSync(indexPath, path.join(clientDir, "index.html"));
  }

  for (const entry of fs.readdirSync(nestedDir)) {
    const from = path.join(nestedDir, entry);
    const to = path.join(clientDir, entry);

    if (fs.existsSync(to)) {
      fs.rmSync(to, { recursive: true, force: true });
    }

    fs.renameSync(from, to);
  }

  fs.rmdirSync(nestedDir);
}

const fallback = path.join(clientDir, "__spa-fallback.html");
const notFound = path.join(clientDir, "404.html");
const index = path.join(clientDir, "index.html");

if (fs.existsSync(fallback)) {
  fs.copyFileSync(fallback, notFound);
} else if (fs.existsSync(index)) {
  fs.copyFileSync(index, notFound);
}
