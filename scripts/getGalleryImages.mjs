import path from "path";
import fs from "fs";

export async function getGalleryImages() {
  const root = process.cwd();
  const imgDir = path.join(root, "/public/img/gallery");
  const imgNames = fs.readdirSync(imgDir);
  imgNames.reverse();
  return imgNames;
}
