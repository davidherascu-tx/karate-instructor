import fs from 'fs';
import path from 'path';

export function getImagesFromFolder(folderName: string) {
  try {
    const folderPath = path.join(process.cwd(), 'public', 'literatur', folderName);
    
    if (!fs.existsSync(folderPath)) {
      // console.warn(`Ordner nicht gefunden: ${folderPath}`);
      return [];
    }

    const files = fs.readdirSync(folderPath);
    
    return files
      .filter(file => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .map(file => `/literatur/${folderName}/${file}`);
  } catch (error) {
    console.error("Fehler beim Scannen der Ordner:", error);
    return [];
  }
}