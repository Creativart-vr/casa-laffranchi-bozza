import { cp, mkdir, rm } from "node:fs/promises";

const folders = ["images", "video", "download"];

for (const folder of folders) {
  const source = new URL(`../public/${folder}/`, import.meta.url);
  const destination = new URL(`../dist/${folder}/`, import.meta.url);
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true });
}
